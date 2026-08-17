import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly removeBikeLightBtn: Locator;
  readonly cartItems: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.removeBikeLightBtn = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }

  async removeBikeLight() {
    await this.removeBikeLightBtn.click();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}