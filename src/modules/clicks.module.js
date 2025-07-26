import { Module } from '../core/module'

// console.log('Hello Worldddddd')

export class ClicksModule extends Module {
  constructor(type, text, intervalSeconds = 5) {
    super(type, text)
    //сколько секунд отслеживать клики
    this.intervalSeconds = intervalSeconds
    // счётчик кликов
    this.clicksCount = 0
    //хранения таймера
    this.timer = null
  }

  trigger() {
    // Начинаем отслеживание кликов
    this.clicksCount = 0
    console.log(' this.clicksCount', this.clicksCount)
    //обработчик кликов на документ
    document.addEventListener('click', this.handleClick)
    console.log(
      `Модуль ClicksModule запущен. Отслеживание кликов для ${this.intervalSeconds} секунд.`
    )

    // Запускаем таймер для вывода статистики
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      //удаление обработчика, что б небыло утечки памяти
      document.removeEventListener('click', this.handleClick)
      alert(
        ` За ${this.intervalSeconds} секунд: Вы совершили ${this.clicksCount} кликов`
      )
      console.log(`
Вы совершили: ${this.clicksCount} кликов`)
    }, this.intervalSeconds * 1000)
  }
  //увеличивает счетчик при каждом клике
  handleClick = () => {
    this.clicksCount++
  }
}
