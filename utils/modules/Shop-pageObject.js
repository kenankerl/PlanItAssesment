const { expect } = require('@playwright/test')
const playwright = require('@playwright/test')
const { ENV } = require('../setup/env')
const { CommonUtils } = require('../commons/common-utils')

const envUtil = new ENV()

class ShopItems {
  constructor(page) {
    this.page = page
    this.commonUtils = new CommonUtils(this.page)

    this.btnAddItemIntoCart = (itemName) => `//h4[normalize-space()='${itemName}']//parent::div//descendant::a`
  }
}

module.exports = { ShopItems }
