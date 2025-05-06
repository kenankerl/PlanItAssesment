const { expect } = require('@playwright/test')
const playwright = require('@playwright/test')
const { ENV } = require('../setup/env')
const { CommonUtils } = require('../commons/common-utils')

const envUtil = new ENV()

class Components {
  constructor(page) {
    this.page = page
    this.commonUtils = new CommonUtils(this.page)

    this.btnHome = `//a[normalize-space()='Home']`
    this.btnShop = `//a[normalize-space()='Shop']`
    this.btnContact = `//a[normalize-space()='Contact']`

    this.btnCart = `a[href='#/cart']`
  }
}

module.exports = { Components }
