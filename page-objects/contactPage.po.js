var ContactPage = function() {
    this.emailField = element(by.id('email-field'));
    this.messageTextAreaField = element(by.id('message-text-area-field'));
    this.nameField = element(by.id('name-field'));
    this.submitButton = element(by.id('submit'));
    this.successMessage = element(by.css('.success-message'));
};

ContactPage.prototype.fillForm = function(name, email, message) {
    this.nameField.sendKeys(name);
    this.emailField.sendKeys(email);
    this.messageTextAreaField.sendKeys(message);
};

ContactPage.prototype.visit = function() {
    browser.get('contact');
};

module.exports = ContactPage;