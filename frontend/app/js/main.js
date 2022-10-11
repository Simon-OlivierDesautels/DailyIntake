import Accordion from "./components/Accordion";
import ComponentFactory from "./ComponentFactory";

class Main {
  constructor() {
    this.init();
  }

  init() {
    new ComponentFactory();
    // new Accordion(document.querySelector('[data-accordion]'));
  }
}

new Main();
