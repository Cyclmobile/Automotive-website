# PayPal setup

The cart works immediately. Payments require PayPal credentials.

1. Create a PayPal app in the PayPal Developer Dashboard.
2. Set these environment variables:

   ```sh
   export PAYPAL_CLIENT_ID="..."
   export PAYPAL_CLIENT_SECRET="..."
   export PAYPAL_ENV="sandbox"
   ```

3. Start the store:

   ```sh
   npm start
   ```

4. Open `http://localhost:4173`.

Use `PAYPAL_ENV=live` only after replacing the sandbox credentials with live credentials.

PayPal buttons appear for eligible payment methods. Direct card fields appear only when Advanced Credit and Debit Card Payments is enabled and eligible for the merchant account.
