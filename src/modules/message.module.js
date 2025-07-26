import { Module } from '../core/module'
import { randomMessage } from '../utils'

export class CustomMessage extends Module {
  constructor() {
    super('custom-message', 'Показать кастомное сообщение')
  }

  toHTML() {
    return `<li data-type="${this.type}" style="color: white;cursor: pointer;">${this.text}</li>`
  }

  renderMessage() {
    this.textContainer = document.createElement('div')
    this.textContainer.className = 'randomTextContainer'

    this.randomText = document.createElement('p')
    this.randomText.textContent = `Рандомная строка: ${randomMessage()}`

    this.body = document.querySelector('body')

    this.textContainer.append(this.randomText)
    this.body.append(this.textContainer)

    return this.body
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
