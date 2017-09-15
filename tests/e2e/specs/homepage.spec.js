// homepage.spec.js
describe('Homepage', function() {
    it('perform a search into the api page', function() {
    browser.get('#/api'); //buscará a url definida nas configurações e atribuirá esse valor
    element(by.model('searchTerm')).sendKeys('restart');
    element(by.css('.depth-1')).click();
    // expect(element(by.css('.api-title')).getText()).not.toContain('browser.restart');
    expect(element(by.css('.api-title')).getText()).toContain('browser.restart');
    });
});