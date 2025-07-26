import './styles.css'
import { ContextMenu } from './menu'

import { RandomSound } from './modules/randomSound.module'

const contextMenu = new ContextMenu('#menu')

const randomSound = new RandomSound()
contextMenu.add(randomSound)
