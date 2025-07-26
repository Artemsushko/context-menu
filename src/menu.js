import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];
    this.el.addEventListener('click', this.#clickHandler.bind(this));
    document.addEventListener('contextmenu', this.#openHandler.bind(this));
  }

  #openHandler(event) {
    event.preventDefault();
    this.open(event.clientX, event.clientY);
  }

  open(x, y) {
    this.el.classList.add('open');
    this.el.style.top = `${y}px`;
    this.el.style.left = `${x}px`;
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.modules.push(module);
    this.el.insertAdjacentHTML('beforeend', module.toHTML());
  }

  #clickHandler(event) {
    const { type } = event.target.dataset;
    if (!type) return;

    const module = this.modules.find((m) => m.type === type);
    if (module) {
      module.trigger();
      this.close();
    }
  }
}