import Utils from '../utils/Utils';

export default class Modal {
  constructor(element) {
    //l'element est recu par la component factory
    this.element = element;
    this.modalId = this.element.dataset.modalId;

    this.init();
  }

  init() {
    this.element.addEventListener('click', this.open.bind(this)); //dans notre methode open, tout le contexte de notre classse modale, incluant modalId, soit accessible a retardement apres le click

    this.close = this.close.bind(this);
  }

  updateContent() {
    // UNE DES SEULES FONCTIONS A MODIFIER DANS UN PROJET
    if (this.modalId == 'tpl-modal-tool') {
      this.modalElement.innerHTML = Utils.parseTemplate(
        //prend le contenu html pourt le remplacer par la clé
        this.modalElement.innerHTML,
        { title: this.element.dataset.modalTitle }
      );

      this.imagedemonchoix = this.element.dataset.modalaliment;
      console.log(this.imagedemonchoix);
      this.modalElement.innerHTML = Utils.parseTemplate(this.modalElement.innerHTML, { aliment: this.imagedemonchoix });
    }
  }

  open(event) {
    event.preventDefault(); //empeche de remonter en haut a cause des href="#"
    this.appendModal();
  }

  close(event) {
    document.documentElement.classList.remove('modal-is-active'); //fermer la modale
    this.closeButton.removeEventListener('click', this.close.bind(this));

    setTimeout(this.destroy.bind(this), 1000); //avant de tuer la modale, on lui laissse le temps de faire son animation
  }

  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement); //va chercher l'elelement modale, remonte a son parent et tue ses enfants modale element
  }

  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true); //on selectionne notre template modale pour le faire apparaitre, mais on peut juste influencer son premier child

      this.updateContent();

      document.body.appendChild(this.modalElement);

      this.element.getBoundingClientRect(); //pour que la page web load nos animations au debut (SUPER HACK 3000 HELL YEAH) "C'est comme si vous donniez une taloche en arriere de la tete a quelqun pour qui se remettre a dessiner"

      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close.bind(this));
      document.documentElement.addEventListener('keydown', (event) => {
        if (event.key == 'Escape') {
          document.documentElement.classList.remove('modal-is-active'); //fermer la modale
          this.closeButton.removeEventListener('click', this.close.bind(this));

          setTimeout(this.destroy.bind(this), 1000);
        }
        // do something
      });
    } else {
      console.log(`Le <template> avec le id ${this.modalId} n'existe pas`);
    }
  }
}
