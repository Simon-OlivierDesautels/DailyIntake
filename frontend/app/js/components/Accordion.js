export default class Accordion {
  constructor($el) {
    this.$el = $el;
    this.$title = this.$el.querySelector('[data-header]');
    this.$content = this.$el.querySelector('[data-content]');

    this.isOpen = false;
    this.height = 0;

    this.events();
    this.close();
  }

  events() {
    this.$title.addEventListener('click', this.handleClick.bind(this));
    this.$content.addEventListener('transitionend', this.handleTransition.bind(this));
  }

  handleClick() {
    this.height = this.$content.scrollHeight;

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.isOpen = false;
    this.$el.classList.remove('is-active');
    this.$content.style.maxHeight = `${this.height}px`;

    setTimeout(() => {
      this.$content.style.maxHeight = `${0}px`;
    }, 1);
  }

  open() {
    this.isOpen = true;
    this.$el.classList.add('is-active');
    this.$el.classList.remove('is-hidden');
    this.$content.style.maxHeight = `${0}px`;

    setTimeout(() => {
      this.$content.style.maxHeight = `${this.height}px`;
    }, 1);
  }

  handleTransition() {
    if (!this.isOpen) {
      this.$el.classList.add('is-hidden');
    }

    this.$content.style.maxHeight = '';
  }
}
