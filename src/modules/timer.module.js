import { Module } from '../core/module';

export class CountdownTimerModule extends Module {
  constructor() {
    super('countdown-timer', 'Таймер');
    this.timerId = null;
  }

  trigger() {
    let corner = document.getElementById('corner-block');
    if (!corner) {
      corner = document.createElement('div');
      corner.id = 'corner-block';
      document.body.append(corner);
    }

    let remaining = Number(prompt('На сколько секунд поставить таймер?'));
    if (isNaN(remaining) || remaining <= 0) {
      alert('Введите корректное положительное число!');
      return;
    }

    corner.innerText = `Таймер: ${remaining}с`;

    if (this.timerId) clearInterval(this.timerId);

    this.timerId = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        corner.innerText = `Таймер: ${remaining}с`;
      } else {
        clearInterval(this.timerId);
        corner.innerText = '';
        alert('Время истекло!');
      }
    }, 1000);
  }
}
