# 🧪 UI Automation Project - Playwright & TypeScript
End-to-End (E2E) UI Automation Test Suite built with Playwright and TypeScript.

📌 Project Overview
This repository contains a structured and scalable UI Automation framework designed using the **Page Object Model (POM)** pattern. It automates critical user journeys, validates web application workflows, and handles resilient assertion logic with cross-browser execution support.

---

🛠️ Test Coverage Included
* **Page Object Model (POM) Architecture**:
  * Decoupled UI selectors from test scenarios for maximum maintainability.
  * Dedicated Page Classes (`LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`).

* **Functional & E2E Workflows**:
  * **Authentication**: User login validation and session handling.
  * **Inventory & Shopping Cart**: Product selection, filtering, dynamic item addition, and cart state persistence.
  * **Checkout Flow**: Form inputs, order review, price calculations, and end-to-end checkout completion.

* **Framework Capabilities & Resilience**:
  * Dynamic, auto-waiting locators to eliminate flaky execution.
  * Assertion checks for element visibility, text validation, and URL states.
  * Automated retries and trace recordings for rapid debugging.

---

🚀 How to Run the Tests

### Prerequisites
Make sure you have Node.js (v18+) installed locally.

### Setup
1. Clone or download this repository.
2. Install project dependencies:
   ```bash
   npm install
