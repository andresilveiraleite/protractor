//wrappers= Page Objects mais genéricos.
/* Podem ser utilizados em múltiplos testes;
Evita duplicidade de código;
Quando uma diretiva, diálogo ou elemento comum
muda, você só precisa mudar o wrapper, e somente
uma vez. */

var MessagesWrapper = function() {
    this.successMessage = element(by.css('.success-message'));
};

module.exports = MessagesWrapper;


