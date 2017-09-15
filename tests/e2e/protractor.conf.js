// protractor.conf.js

/*OBSERVAÇÃO
O valor do atributo baseUrl deve ser substituído
posteriormente pela URL base da aplicação do projeto que
será testado utilizando o framework Protractor. Por hora,
entenda esta URL somente como um exemplo. */

module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
    'browserName': 'chrome'
    },
    specs: ['specs/*.spec.js'],
    baseUrl: 'http://www.protractortest.org/'
    };