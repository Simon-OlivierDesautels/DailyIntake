import Cache from '../utils/Cache';

/** Composante  de TimTools */
export default class {
  constructor(element) {
    this.element = element;

    this.scrolltaPosition = 0;
    this.lastScrolltaPosition = 0;
    this.html = document.documentElement; //pour eviter de toujours le reecrire
    this.boutonFermeture = document.querySelector('[data-component="Snackbar"]');

    //const lalimite = document.querySelector('[data-scrolllimit]');
    var lalimite = document.getElementById('snackbar'); //on va pogner le header avec le data attribute pour la limite
    this.scrollLimite = lalimite.dataset.scrolllalimit; //on associe le chiffre a la variable de notre limite
    this.tempsLimit = lalimite.dataset.delay;
    this.lalimitee = document.getElementById('snackbar');

    this.numero = this.boutonFermeture.dataset.id;

    const defaultcache = Cache.get(`snackbar-${this.numero}`);
    console.log(defaultcache);
    console.log(this.numero);
    console.log(`snackbar-${this.numero}`);

    if (!defaultcache) {
      //condition empechant la snackbar d'ouvrir si ona deja cliqué sur x
      setTimeout(function () {
        lalimite.className = lalimite.className.replace('snacknonvisible', 'snackvisible');
      }, this.tempsLimit);
    }

    this.init();
  }

  init() {
    //ajoute les eventlistener sur les boutons et scroll de la scene
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.boutonFermeture.addEventListener('click', this.fermeSnack.bind(this));
  }

  fermeSnack() {
    //ferme le snackbar au clic du x
    this.lalimitee.className = this.lalimitee.className.replace('snackvisible', 'snacknonvisible');
    Cache.set(`snackbar-${this.numero}`, true);
  }

  onScroll(event) {
    //localise la position actuelle et l'analyse
    this.lastScrolltaPosition = this.scrolltaPosition; //ancienne position
    this.scrolltaPosition = document.scrollingElement.scrollTop; //pogne la position de scroll //position actuelle
    this.setHeaderState();
    this.setDirectionState();
  }

  setHeaderState() {
    //on va selectionner si le header est cache ou non, si l'utilisateur a mis true, le hgeader va se cacher
    this.html.classList.add('snackhidden'); //le menu se cache par defaut
    if (document.querySelector('[data-auto-hide="false"]')) {
      //si l'individu met false ca se cache pas
      this.html.classList.remove('snackhidden');
    } //si il est cache, on lui ajoute la classe pour le cacher

    if (this.html.classList.contains('snackhidden')) {
      //si il est cache, on lui determine quand il va se cacher avec notre scroll limit
      const scrollleHeight = document.scrollingElement.scrollHeight; //pour créer une limite avant que le menu disparaisse

      if (this.scrolltaPosition > scrollleHeight * this.scrollLimite) {
        this.html.classList.add('snackhidden');
      } else {
        this.html.classList.remove('snackhidden');
      }
    }
  }

  //pour savoir quand on monte ouy descend en scrollant
  setDirectionState() {
    if (this.scrolltaPosition > this.lastScrolltaPosition) {
      this.html.classList.add('is-scrolling-downsnack');
      this.html.classList.remove('is-scrolling-upsnack');
    } else {
      this.html.classList.add('is-scrolling-upsnack');
      this.html.classList.remove('is-scrolling-downsnack');
    }
  }
}
