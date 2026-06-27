const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const PORT = Number(process.env.PORT || 4173);
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "";
const PAYPAL_ENV = process.env.PAYPAL_ENV === "live" ? "live" : "sandbox";
const PAYPAL_BASE_URL = PAYPAL_ENV === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
const CURRENCY = "DKK";

const catalog = new Map([
  [1, { sku: "WW-VAC-01", title: "Trådløs håndstøvsuger", price: 449 }],
  [2, { sku: "WW-CHG-01", title: "4-i-1 biloplader", price: 299 }],
  [3, { sku: "WW-ORG-01", title: "Smart opbevaringssæt", price: 249 }],
  [4, { sku: "WW-HLD-01", title: "Foldbar magnetisk mobilholder", price: 349 }],
  [5, { sku: "WW-AIR-01", title: "Minimalistisk bilduft", price: 129 }],
  [6, { sku: "WW-PKG-01", title: "WheelWare komplet bilpakke", price: 1199 }],
]);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function validateCart(input) {
  if (!Array.isArray(input) || input.length === 0) throw new Error("Kurven er tom.");
  return input.map((entry) => {
    const id = Number(entry.id);
    const quantity = Number(entry.quantity);
    const product = catalog.get(id);
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      throw new Error("Kurven indeholder en ugyldig vare.");
    }
    return { ...product, quantity };
  });
}

async function getAccessToken() {
  const credentials = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error_description || "PayPal-godkendelse mislykkedes.");
  return data.access_token;
}

async function paypalRequest(endpoint, options = {}) {
  const accessToken = await getAccessToken();
  const response = await fetch(`${PAYPAL_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "PayPal-Request-Id": crypto.randomUUID(),
      ...(options.headers || {}),
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.error("PayPal error:", JSON.stringify(data));
    throw new Error(data.message || "PayPal kunne ikke behandle betalingen.");
  }
  return data;
}

async function createOrder(cartInput) {
  const items = validateCart(cartInput);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return paypalRequest("/v2/checkout/orders", {
    method: "POST",
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [{
        amount: {
          currency_code: CURRENCY,
          value: total.toFixed(2),
          breakdown: { item_total: { currency_code: CURRENCY, value: total.toFixed(2) } },
        },
        items: items.map((item) => ({
          name: item.title,
          sku: item.sku,
          quantity: String(item.quantity),
          unit_amount: { currency_code: CURRENCY, value: item.price.toFixed(2) },
        })),
      }],
    }),
  });
}

async function handleApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/paypal/config") {
    return sendJson(res, 200, {
      configured: Boolean(PAYPAL_CLIENT_ID && PAYPAL_CLIENT_SECRET),
      clientId: PAYPAL_CLIENT_ID,
      currency: CURRENCY,
      environment: PAYPAL_ENV,
    });
  }

  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    return sendJson(res, 503, { message: "PayPal er ikke konfigureret på serveren." });
  }

  if (req.method === "POST" && url.pathname === "/api/paypal/orders") {
    const body = await readJson(req);
    return sendJson(res, 201, await createOrder(body.cart));
  }

  const captureMatch = url.pathname.match(/^\/api\/paypal\/orders\/([^/]+)\/capture$/);
  if (req.method === "POST" && captureMatch) {
    const orderId = decodeURIComponent(captureMatch[1]);
    return sendJson(res, 200, await paypalRequest(`/v2/checkout/orders/${orderId}/capture`, { method: "POST" }));
  }

  return sendJson(res, 404, { message: "API-endpoint blev ikke fundet." });
}

function serveStatic(res, url) {
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.resolve(__dirname, `.${requestedPath}`);
  if (!filePath.startsWith(__dirname) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    return res.end("Not found");
  }
  res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname.startsWith("/api/")) await handleApi(req, res, url);
    else serveStatic(res, url);
  } catch (error) {
    console.error(error);
    sendJson(res, 400, { message: error.message || "Der opstod en serverfejl." });
  }
});

server.listen(PORT, () => {
  console.log(`WheelWare kører på http://localhost:${PORT}`);
  console.log(`PayPal-miljø: ${PAYPAL_ENV}${PAYPAL_CLIENT_ID ? "" : " (mangler nøgler)"}`);
});
