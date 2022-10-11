export default class Scrolly {
  constructor(element) {
    this.element = element;
    this.options = {
      rootMargin: '0px 0px 0px 0px',      //le cadre qui determine quand jouent les animations
    };

    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      this.watch.bind(this),                                 //un observateur observe le cadre
      this.options
    );

    const items = this.element.querySelectorAll('[data-scrolly]');           //un observateur observe les elements
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.observer.observe(item);                          
    }
  }

  watch(entries) {                       //l'observateur determine si certains elements interagissent avec le cadre, ce qui mene a son animation
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target);             //cette ligne determine si les animations jouent plusieurs fois
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
