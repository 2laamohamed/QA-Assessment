import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('excute test cases in a group', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
  });

  // 1. Successful login
  test('Successful login using a standard user', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');
  });

  // 2. Failed login with locked_out_user
  test('Failed login using a locked-out user and verify error message', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });

  // 3. Add two specific products to the cart
  test('Add two specific products to the cart', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackAndBikeLightToCart();
    await inventoryPage.goToCart();

    await expect(cartPage.cartItems).toHaveCount(2);
  });

  // 4. Remove one product and verify cart contents
  test('Remove one product and verify the cart contents', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackAndBikeLightToCart();
    await inventoryPage.goToCart();

    await cartPage.removeBikeLight();
    await expect(cartPage.cartItems).toHaveCount(1);
  });

  // 5. Complete checkout flow
  test('Complete the checkout flow and verify confirmation page', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackAndBikeLightToCart();
    await inventoryPage.goToCart();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillInformation('Alaa', 'Harb', '12345');
    await checkoutPage.finishCheckout();

    await expect(checkoutPage.completeHeader).toBeVisible();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  // 6. Sort products by Price (Low to High)
  test('Sort products by Price (Low to High) and verify sorting result', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.sortByPriceLowToHigh();

    await expect(inventoryPage.firstItemPrice).toHaveText('$7.99');
    await expect(inventoryPage.lastItemPrice).toHaveText('$49.99');
  });
});