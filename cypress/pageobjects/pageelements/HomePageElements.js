const locators = require('../../locator.json')

export default class HomePageElements {

    searchTxtBx() {
        return cy.get(locators.homepage.searchTxtBx)
    }

}