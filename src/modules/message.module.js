import { Module } from '../core/module';
import { random } from '../utils';

export class CustomMessage extends Module {
  constructor() {
    super('custom-message', 'Показать кастомное сообщение');
  }

  #randomMessage() {
    const letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let newLetters = '';
    for (let i = 0; i < 11; i++) {
      const index = random(0, letters.length - 1);
      newLetters += letters[index].toLocaleUpperCase();
    }
    return newLetters;
  }

  renderMessage() {
    this.textContainer = document.createElement('div');
    this.textContainer.className = 'randomTextContainer';

    this.randomText = document.createElement('p');
    this.randomText.textContent = `Рандомная строка: ${this.#randomMessage()}`;

    this.textContainer.append(this.randomText);
    document.body.append(this.textContainer);
  }

  trigger() {
    if (this.textContainer) {
      clearTimeout(this.timerId);
      this.textContainer.remove();
    }

    this.renderMessage();

    this.timerId = setTimeout(() => {
      this.textContainer.remove();
      this.textContainer = null;
    }, 3000);
  }
}
