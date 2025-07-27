import { Module } from '../core/module';
import { random } from '../utils';
import applepay from '../../assets/sounds/applepay.mp3';
import tada from '../../assets/sounds/quottadamquot-sound.mp3';
import icq from '../../assets/sounds/single-sound-message-icq-ooh.mp3';
import done from '../../assets/sounds/sound-when-something-is-done-on-the-computer-informative.mp3';

export class RandomSound extends Module {
  constructor() {
    super('random-sound', 'Рандомный звук');
    this.soundsFile = [applepay, tada, icq, done];
  }

  #randomSound(fileArray) {
    return fileArray[random(0, fileArray.length - 1)];
  }

  trigger() {
    try {
      const audio = new Audio(this.#randomSound(this.soundsFile));
      audio.play();
    } catch (error) {
      console.log(error);
    }
  }
}
