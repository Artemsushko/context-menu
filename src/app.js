import './styles.css'
import { ContextMenu } from './menu'
import { ClicksModule } from './modules/clicks.module.js'

const contextMenu = new ContextMenu('#menu')
const clicksModule = new ClicksModule(
  'click-analytics',
  'Отслеживание кликов',
  5
)
//вызываем метод ослеживания кликов
clicksModule.trigger()
contextMenu.add(clicksModule)
