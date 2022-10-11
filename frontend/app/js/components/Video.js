import { Controller } from 'swiper';

/** Composante Video de TimTools */
export default class Video {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.flechee = this.element.querySelector('.play');
    this.videoContainer = this.element.querySelector('.js-video');
    this.poster = this.element.querySelector('.js-poster');
    this.videoId = this.element.dataset.videoId;
    this.autoplay = this.poster ? 1 : 0; //si il y a un poster

    this.lescontroles = this.element.querySelector('.video'); //on va pogner le header avec le data attribute pour la limite
    this.controls = this.element.dataset.controls;

    this.playerReady = false;

    Video.instances.push(this); //creer le tableau avec les differentes videos

    if (this.videoId) {
      //si il y a un id, la condition s'active
      Video.loadScript();
    } else {
      console.error('manque un id!');
    }
  }

  static loadScript() {
    //Cette fonction s'assure de loader une vidéo que si c'est la seule vidéo. Ainsi, on ne les load pas tous en meme temps
    if (!Video.scriptIsLoading) {
      Video.scriptIsLoading = true;

      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script); //instancier le lieu du video (mapping)
    }
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    //Cette fonction ajoute un eveneemnt clic sur la thumbnail, et si il n,y en a pas un evenment clic sur le video directement
    this.initPlayer = this.initPlayer.bind(this);
    if (this.poster) {
      this.element.addEventListener('click', this.initPlayer.bind(this));
    } else {
      this.initPlayer();
    }
  }

  initPlayer(event) {
    //Cette fonction instancie le videoPlayer de Youtube en s'assurant qu'une seule joue a la fois si on clique sur play
    if (event) {
      this.element.removeEventListener('click', this.initPlayer);
    }
    this.flechee.classList.add('fleche');

    this.flechee.classList.remove('play');

    this.player = new YT.Player(this.videoContainer, {
      //videoPlayer de youtube qui s'instanmcie avec un lieu et les infos
      height: '100%',
      width: '100%',
      videoId: this.videoId,
      playerVars: { controls: this.controls, rel: 0, autoplay: this.autoplay }, //pour pas cliquer deux fois
      events: {
        onReady: () => {
          this.playerReady = true;

          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: '0px 0px 0px 0px',
          });
          observer.observe(this.element);
        },
        onStateChange: (event) => {
          //pas jouer deux videos en meme temops
          if (event.data == YT.PlayerState.PLAYING) {
            //pause tout les videos sauf lui qui joue
            Video.pauseAll(this);
          } else if (event.data == YT.PlayerState.ENDED) {
            this.player.seekTo(0);
            this.player.pauseVideo();
          }
        },
      },
    });
  }

  watch(entries) {
    //Fonction s'assurant que si le player est pret et que ca n'intersecte pas avec le cadre on arrete la video
    if (this.playerReady && !entries[0].isIntersecting) {
      this.player.pauseVideo();
    }
  }

  static initAll() {
    //active tout les player Youtube
    document.documentElement.classList.add('is-video-ready'); //retirer le bouton  play avant que tout soit loadé

    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      instance.init(); //repete init le nombre de fois qu'on a de video dans notre tableau
    }
  }

  static pauseAll(currentInstance) {
    //Arrete la video active si une autre est cliquée

    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];

      if (instance.playerReady && instance !== currentInstance) {
        //si jmais l'instance dans la boucle est differente a l'instance active, on la pause
        instance.player.pauseVideo();
      }
    }
  }
}

Video.instances = [];
window.onYouTubeIframeAPIReady = Video.initAll; // mapping pour toutes les videos
