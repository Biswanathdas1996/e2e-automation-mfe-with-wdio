class Elements {
  async inputByPlaceHolder(value) {
    return $(`input[placeholder='${value}']`);
  }

  async AddToCardButton(index) {
    return $(`//button[@id='cart_${index}']`);
  }

  async getProductCard(index) {
    return await $(
      `(//div[contains(@class,'MuiGrid-root MuiGrid-item')])[${index}]`
    );
  }

  async getProductTitle(productId) {
    const elem = await $(`//div[@id='product_title_${productId}']`);
    return elem;
  }

  get firstAddToCardButton() {
    return $("(//button[text()=' Add to cart'])[1]");
  }

  get cartIconBandage() {
    return $(
      `//span[contains(@class,'MuiBadge-anchorOriginTopRightRectangular')]`
    );
  }
  get cartIcon() {
    return $(`svg[data-testid="ShoppingCartIcon"]`);
  }
  async deleteButton(index) {
    return $(`(//button[text()='Delete'])[${index}]`);
  }
}

export default new Elements();
