import './styles.css'
import { ContextMenu } from './menu'
import { CustomMessage } from './modules/message.module'

const contextMenu = new ContextMenu('#menu')
const message = new CustomMessage()
contextMenu.add(message)
