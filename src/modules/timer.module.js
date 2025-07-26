import { Module } from '../core/module'

console.log('Hello worlddddd')
// Модуль для таймера с выводом в corner-блоке
export class CountdownTimerModule extends Module {
  constructor(type, text, durationSeconds = 10) {
    super(type, text)
    //длительность таймера
    this.durationSeconds = durationSeconds
    // индефикатор таймера
    this.timerId = null
    // блок для таймера
    this.cornerBlock = document.createElement('div')
    this.cornerBlock.id = 'corner-block'
    document.querySelector('body').append(this.cornerBlock)
  }

  trigger() {
    //блок по id для вывода таймера
    const corner = document.getElementById('corner-block')
    //если его нет выводим ошибку
    if (!corner) {
      console.error('Corner block не найден')
      return
    }
    //начальное значение таймера оставшегося времени
    let remaining = this.durationSeconds
    //выводим сообщение в div
    corner.innerText = `Таймер: ${remaining}с`
    //если таймер запущен, то его останавливает clearInterval -что бы небыло одновременно
    if (this.timerId) clearInterval(this.timerId)
    // запускает новый интервал 1000мс
    this.timerId = setInterval(() => {
      //уменьшает оставш. время
      remaining--
      //если время вышло
      if (remaining > 0) {
        corner.innerText = `Таймер: ${remaining}с`
      } else {
        // останавливаем интервал
        clearInterval(this.timerId)
        // очищаем блок
        corner.innerText = ''
        alert('Время истекло!')
      }
    }, 1000)
  }
}
