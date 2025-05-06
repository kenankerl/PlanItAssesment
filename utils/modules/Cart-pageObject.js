const { expect } = require('@playwright/test')
const playwright = require('@playwright/test')
const { ENV } = require('../setup/env')
const { CommonUtils } = require('../commons/common-utils')

const envUtil = new ENV()

class Carts {
  constructor(page) {
    this.page = page
    this.commonUtils = new CommonUtils(this.page)

    this.txtQualityInput = (itemName) => `//td[normalize-space()='${itemName}']//parent::tr//descendant::input`
    this.txtItemSubtotal = (itemName, subtotalPrice) => `//td[normalize-space()='${itemName}']//ancestor::tr//child::td[normalize-space()='$${subtotalPrice}']`
    this.lblTotalAmount = (amount) => `//strong[@class='total ng-binding' and normalize-space()='Total: ${amount}']`

    this.teest = `//td[normalize-space()='Stuffed Frog']//ancestor::tr//child::td[normalize-space()='$21.98']`
  }

  async editItemUnit(itemName, unit) {
    await this.page.locator(this.txtQualityInput(itemName)).clear()
    await this.page.locator(this.txtQualityInput(itemName)).type(unit)
  }

  async computeItemSubtotalAmount(itemprice, unit) {
    const price = +itemprice
    const quantity = +unit

    const subtotal = price * quantity
    return subtotal.toString()
  }

  async computeItemTotalAmount(item1, item2, item3) {
    return +item1 + +item2 + +item3
  }
}

module.exports = { Carts }
