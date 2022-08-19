const locators = require('../../locator.json')

export default class ResultPageElements {

    firstResultTitle() {
        return cy.get(locators.resultPage.firstResultTitle).first()
    }

}