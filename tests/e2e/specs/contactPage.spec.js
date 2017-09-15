
var ContactPage = require('/../protactor/page-objects/contactPage.po.js');
describe('contact page', function() {
    var contactPage = new ContactPage();
    it('successfull contact form submission', function() {
        contactPage.visit();
        contactPage.fillForm('walmyr', 'walmyr@email.com', 'My contact message.'); // clica no botão para submissão do formulário
        contactPage.submitButton.click();
        expect(contactPage.successMessage.isDisplayed()).toBe(true);
    });
});
