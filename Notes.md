# Assessment Task - Technical Notes & Responses

## 1. Design Decisions

* **Why did you choose this project structure?**
  * Kept the structure clean and lightweight with tests contained in `tests/testcases.spec.ts`.
  * Grouped related flows logically using `test.describe` blocks to maintain readable execution output and straightforward execution.

* **Why did you organize your Page Objects this way?**
  * Encapsulated page selectors and actions directly into dedicated page helpers/locators to separate test scripts from page mechanics.
  * Kept assertions within test files while leaving actions (login, adding items, navigation) modular for easy maintenance.

* **Why did you structure the Postman collection and variables this way?**
  * Utilized environment and collection variables to avoid hardcoding static values (such as base URLs, user credentials, and dynamic IDs).


* **If you had another day, what improvements would you make?**
  * Add visual regression comparison tests using Playwright's native snapshot matching (`toHaveScreenshot`).
  * Implement custom fixtures for auto-login state reuse to speed up test execution.
  * Integrate custom Slack or Email HTML test report notifications upon GitHub Actions run completion.

---

## 2. Test Coverage

* **What additional UI and API scenarios would you automate if this were a production application?**
  * **UI:** Complex multi-item checkout validations, empty cart validations, dynamic search/filter sorting logic, dynamic payment handling, and session timeout/expiry behaviors.
  * **API:** Negative response handling (400, 401, 403, 404), schema validations, edge cases for invalid payloads, and API rate-limiting checks.

* **Which scenarios would you intentionally avoid automating?**
  * Third-party SMS/Email OTP 2FA authentications.
  * One-time visual/CSS animations or strict micro-styling checks.

* **Explain your reasoning:**
  * Automation should prioritize critical path regression suite coverage. External third-party dependencies (like OTP/CAPTCHA) introduce severe flakiness and false-negative failures.

---

## 3. Automation Tools

* **Which Playwright features did you use and why?**
  * **Test Groups (`test.describe`):** To group related test cases and run sequential scenarios efficiently.
  * **Hooks (`beforeEach`):** To set up common initial states ( navigating to Base URL) prior to running tests.
  * **Built-in Locators & Auto-waiting Assertions:** To ensure tests automatically wait for DOM elements to be visible/clickable, preventing race conditions.
  * **Trace Viewer & Retries:** Enabled in `playwright.config.ts` to capture execution traces, screenshots, and videos on failure for easy debugging.

* **Which Postman features did you use?**
  * **Environment Variables:** For seamless base URL and parameter management.
  * **Test Scripts:** Adding assertions (`pm.response.to.have.status(200)`) to validate HTTP status codes and JSON response bodies.

* **How would you run both suites in a CI/CD pipeline?**
  * Automated using GitHub Actions workflows running in headless mode (`headless: true`).
  * Triggered automatically on `push` and `pull_request` events targeting the main branch, generating and preserving HTML test artifacts.
