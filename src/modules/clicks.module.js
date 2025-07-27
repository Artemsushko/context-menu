import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor() {
    super('click-analytics', 'Отслеживание кликов');
    this.clicksCount = 0;
    this.timer = null;
    // привязка метода handleDocumentClick к текущему объекту
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  trigger() {
    const confirmStart = confirm('Вы готовы начать кликать?');
    if (!confirmStart) return;
    this.intervalSeconds = Number(
      prompt('На сколько секунд поставить таймер кликов?')
    );
    if (isNaN(this.intervalSeconds) || this.intervalSeconds < 1) {
      alert('Введите корректное положительное число!');
    }

    this.clicksCount = 0;
    //обработчик плюсует клики
    document.addEventListener('click', this.handleClick);
    console.log(
      `Модуль ClicksModule запущен. Отслеживание кликов для ${this.intervalSeconds} секунд.`
    );
    //обработчик создает эффект
    document.addEventListener('click', this.handleDocumentClick); // добавляем для эффекта ripple
    //тайме, который удаляет обработчики по истечению времени.
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('click', this.handleDocumentClick); // удаляем обработчик ripple
      alert(
        `За ${this.intervalSeconds} секунд: Вы совершили ${this.clicksCount} кликов`
      );
      console.log(`
Вы совершили: ${this.clicksCount} кликов`);
    }, this.intervalSeconds * 1000);
  }
  //увеличивает счетчик при каждом клике
  handleClick = () => {
    this.clicksCount++;
  };
  handleDocumentClick(event) {
    // Проверяем, что клик левой кнопкой мыши
    if (event.button !== 0) return;

    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';

    // координаты по месту клика
    ripple.style.setProperty('--x', `${event.clientX}px`);
    ripple.style.setProperty('--y', `${event.clientY}px`);

    // Генерируем случайный цвет в формате hsl
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    ripple.style.backgroundColor = randomColor;

    document.body.appendChild(ripple);

    // после окончания анимации удаляет этот элемент из DOM.
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}
