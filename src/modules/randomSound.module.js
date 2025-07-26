import { Module } from '../core/module'
import { randomSound } from '../utils'
import applepay from '../assets/sounds/applepay.mp3'
import tada from '../assets/sounds/quottadamquot-sound.mp3'
import icq from '../assets/sounds/single-sound-message-icq-ooh.mp3'
import done from '../assets/sounds/sound-when-something-is-done-on-the-computer-informative.mp3'

export class RandomSound extends Module {
  constructor() {
    super('random-sound', 'Рандомный звук')
    this.soundsFile = [applepay, tada, icq, done]
  }

  toHTML() {
    return `<li data-type="${this.type}" style="color: white;cursor: pointer;">${this.text}</li>`
  }

  trigger() {
    const audio = new Audio(randomSound(this.soundsFile))
    return audio.play()
  }
}
