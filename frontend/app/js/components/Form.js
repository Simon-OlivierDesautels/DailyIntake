export default class Form {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element;
    this.formElements = this.element.elements;

    this.init();
  }

  init() {
    this.element.setAttribute('novalidate', '');

    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required) {
        input.addEventListener('input', this.validateInput.bind(this));
      }
    }

    this.element.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      //l'endroit ou en enverraerai vers une Database
      this.showConfirmation();
    } else {
      console.log('fail');
    }
  }

  validate() {
    //valide toute le fomrulaire
    let isValid = true;

    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required && !this.validateInput(input)) {
        //faire le tour des champs, et si une heure, on indique faux.
        isValid = false;
      }
    }
    return isValid;
  }

  validateInput(event) {
    const input = event.currentTarget || event; //est-ce quil y a quelquechose dedans

    //valide un seul champs
    if (input.validity.valid) {
      this.removeError(input); //pas d'erreur
    } else {
      this.addError(input); //une erreur
    }

    return input.validity.valid;
  }

  addError(input) {
    const container = input.closest('[data-input-container]') || input.closest('.input');
    container.classList.add('error');
  }

  removeError(input) {
    const container = input.closest('[data-input-container]') || input.closest('.input');
    container.classList.remove('error');
  }

  showConfirmation() {
    this.element.classList.add('is-sent');
  }
}
