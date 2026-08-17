import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly backpackAddToCartBtn: Locator;
  readonly bikeLightAddToCartBtn: Locator;
  readonly shoppingCartLink: Locator;
  readonly sortDropdown: Locator;
  readonly firstItemPrice: Locator;
  readonly lastItemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bikeLightAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.firstItemPrice = page.locator('[data-test="inventory-item-price"]').first();
    this.lastItemPrice = page.locator('[data-test="inventory-item-price"]').last();
  }

  async addBackpackAndBikeLightToCart() {
    await this.backpackAddToCartBtn.click();
    await this.bikeLightAddToCartBtn.click();
  }

  async sortByPriceLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}