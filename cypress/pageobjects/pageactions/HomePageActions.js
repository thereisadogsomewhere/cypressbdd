import HomePageElements from "../pageelements/HomePageElements"
const locators = require('../../locator.json')


export default class HomePageActions {
    
    constructor() {
        globalThis.homePageElement = new HomePageElements()
    }

    navigateToURL() {
        cy.visit('/')
    }

    searchKeyword(keywordValue) {
        homePageElement.searchTxtBx().type(keywordValue + '{enter}')
    }

}