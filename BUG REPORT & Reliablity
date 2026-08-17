## 4. Bug Report

* **Title:** User can successfully complete checkout with an empty shopping cart ($0 total)
* **Environment:** Saucedemo Web Application (All Browsers)
* **Severity:** Critical
* **Priority:** High
* **Component:** Cart & Checkout Module

* **Pre-conditions:**
  * User is logged in to the application.
  * Shopping cart is completely empty (no items added).

* **Steps to Reproduce:**
  1. Click on the Shopping Cart icon with 0 items in it.
  2. Click the "Checkout" button.
  3. Fill in required user details (First Name, Last Name, Zip Code) and click "Continue".
  4. On the Checkout Overview page, observe the Total Amount ($0.00).
  5. Click the "Finish" button.

* **Expected Result:**
  * The "Checkout" button should be disabled when the cart is empty, or navigating to checkout should trigger a validation error (e.g., "Your cart is empty. Add items before checking out.").

* **Actual Result:**
  * The system allows the user to proceed through the entire checkout flow and displays "Thank you for your order!", successfully placing an order with 0 items and $0 total.


## 5. Reliability

* **How I Investigate Flaky Tests:**
  * **Review CI Logs:** I inspect the GitHub Actions run logs to verify if the issue was caused by headless mode setup, network delays, or slow page loads on the server.

* **How I Stabilize the Tests:**
  * **Use Auto-Waiting Locators:** I rely on Playwright's built-in auto-waiting assertions (like `expect().toBeVisible()`) instead of hardcoded wait times.
  * **Enforce Headless Mode:** Configured `headless: true` in the configuration file to ensure smooth and stable test runs on GitHub Actions runners without requiring a visual display server.
