export default class Header {
  constructor(element) {
    this.element = element;

    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement; //pour eviter de toujours le reecrire

    //const lalimite = document.querySelector('[data-scrolllimit]');
    var lalimite = document.getElementById('header'); //on va pogner le header avec le data attribute pour la limite
    this.scrollLimit = lalimite.dataset.scrolllimit; //on associe le chiffre a la variable de notre limite

    this.init();
    this.initNavMobile();
  }

  init() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event) {
    this.lastScrollPosition = this.scrollPosition; //ancienne position
    this.scrollPosition = document.scrollingElement.scrollTop; //pogne la position de scroll //position actuelle
    this.setHeaderState();
    this.setDirectionState();
  }

  setHeaderState() {
    const headercache = document.querySelector('[data-cache="true"]'); //on va selectionner si le header est cache ou non, si l'utilisateur a mis true, le hgeader va se cacher
    if (headercache) this.html.classList.add('header-is-hidden'); //si il est cache, on lui ajoute la classe pour le cacher

    if (this.html.classList.contains('header-is-hidden')) {
      //si il est cache, on lui determine quand il va se cacher avec notre scroll limit
      const scrollHeight = document.scrollingElement.scrollHeight; //pour créer une limite avant que le menu disparaisse

      if (this.scrollPosition > scrollHeight * this.scrollLimit) {
        this.html.classList.add('header-is-hidden');
      } else {
        this.html.classList.remove('header-is-hidden');
      }
    }
  }

  //pour savoir quand on monte ouy descend en scrollant
  setDirectionState() {
    if (this.scrollPosition > this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.add('is-scrolling-up');
      this.html.classList.remove('is-scrolling-down');
    }
  }

  //activer le toggle du nav en mobile (le hamburger/X)

  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  //on indique au html que le menu est actif

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
