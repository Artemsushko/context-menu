import { Module } from '../core/module'
import { random } from '../utils'

export class CustomMessage extends Module {
  constructor() {
    super('custom-message', 'Показать кастомное сообщение')
  }

  #randomMessage() {
    this.letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    this.newLetters = ''
    while (this.newLetters.length <= 10) {
      this.index = random(0, this.letters.length - 1)
      this.newLetters += this.letters[this.index].toLocaleUpperCase()
    }
    return this.newLetters
  }

  toHTML() {
    return `<li data-type="${this.type}" class="menu-item">${this.text}</li>`
  }

  renderMessage() {
    this.textContainer = document.createElement('div')
    this.textContainer.className = 'randomTextContainer'

    this.randomText = document.createElement('p')
    this.randomText.textContent = `Рандомная строка: ${this.#randomMessage()}`

    this.textContainer.append(this.randomText)
    document.body.append(this.textContainer)
  }

  trigger() {
    if (this.textContainer) {
      clearTimeout(this.timerId)
      this.textContainer.remove()
    }

    this.renderMessage()

    this.timerId = setTimeout(() => {
      this.textContainer.remove()
      this.textContainer = null
    }, 3000)
  }
}
