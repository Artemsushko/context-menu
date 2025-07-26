import { Module } from '../core/module'
import { randomMessage, delay } from '../utils'

export class CustomMessage extends Module {
  renderMessage() {
    this.textContainer = document.createElement('div')
    this.textContainer.className = 'randomTextConteiner'

    this.randomText = document.createElement('p')
    this.randomText.textContent = `Рандомная строка: ${randomMessage()}`

    this.body = document.querySelector('body')

    this.textContainer.append(this.randomText)
    this.body.append(this.textContainer)

    return this.body
  }

  async message() {
    this.renderMessage()
    await delay(4000)
    this.textContainer.remove()
  }
}
