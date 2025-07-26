import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor(intervalSeconds = 5) {
    super('click-analytics', 'Отслеживание кликов');
    this.intervalSeconds = intervalSeconds;
    this.clicksCount = 0;
    this.timer = null;
  }

  trigger() {
    this.clicksCount = 0;
    document.addEventListener('click', this.handleClick);
    console.log(
      `Модуль ClicksModule запущен. Отслеживание кликов для ${this.intervalSeconds} секунд.`
    );

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      document.removeEventListener('click', this.handleClick);
      alert(
        `За ${this.intervalSeconds} секунд: Вы совершили ${this.clicksCount} кликов`
      );
      console.log(`
Вы совершили: ${this.clicksCount} кликов`);
    }, this.intervalSeconds * 1000);
  }
  handleClick = () => {
    this.clicksCount++;
  };
}
