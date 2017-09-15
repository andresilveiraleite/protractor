var ContactPage = require('/../protactor/page-objects/contactPage.po.js');
var MessagesWrapper = require('/../protactor/page-objects/messagesWrapper.po.js');

describe('contact page', function(){
    var contactPage = new ContactPage();
    var messagesWrapper = new MessagesWrapper();
    it('successfull contact form submission', function() {
        contactPage.visit();
        contactPage.fillForm('walmyr', 'walmyr@email.com', 'My contact message.');
        contactPage.submitButton.click();
        expect(messagesWrapper.successMessage.isDisplayed()).toBe(true);
    });
});


// Teste utilizando apenas 1 elemento do método:
/* var ContactPage = require('/../protactor/page-objects/contactPage.po.js');
var MessagesWrapper = require('/../protactor/page-objects/messagesWrapper.po.js');

describe('contact page', function(){
    var contactPage = new ContactPage();
    var messagesWrapper = new MessagesWrapper();
    it('try to submit contact form filling only the email field', function() {
        contactPage.visit();
        contactPage.emailField.sendKeys('email@example.com');
        contactPage.submitButton.click();
        expect(messagesWrapper.errorMessage.isDisplayed()).toBe(true);
    });
}); */