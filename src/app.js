import './styles.css'
import { ContextMenu } from './menu'
import { CountdownTimerModule } from './modules/timer.module.js'

const contextMenu = new ContextMenu('#menu')
const countDownTimerModule = new CountdownTimerModule(
  'countdown-timer',
  'Таймер',
  10
)
// запуск таймера
countDownTimerModule.trigger()

contextMenu.add(countDownTimerModule)
