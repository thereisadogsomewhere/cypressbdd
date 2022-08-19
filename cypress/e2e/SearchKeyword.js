import HomePageActions from '../pageobjects/pageactions/HomePageActions'
import ResultPageActions from '../pageobjects/pageactions/ResultPageActions'
import searchData from '../fixtures/searchData.json'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePageActions()
const resultPage = new ResultPageActions()

Given('I navigate to the website', () => {
    homePage.navigateToURL()
})

When('I search the keyword', () => {
    homePage.searchKeyword(searchData.keyword)
})

Then('I see the result contains the keyword', () => {
    resultPage.firstResultTitle().should('contain', searchData.keyword)
})