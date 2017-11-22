var ApiPage = require('../page-objects/apiPage.po.js');

describe('Homepage', function() {
    var apiPage = new ApiPage();
    it('perform a search into the api page', function() {
        apiPage.visit();
        apiPage.searchField.sendKeys('restart');
        apiPage.firstLinkOnLeftSide.click();
        expect(apiPage.itemTitle.getText()).toContain('browser.restart');
    });
});