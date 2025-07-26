import './styles.css'
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module'

const contextMenu = new ContextMenu('#menu');
const backgroundModule = new BackgroundModule()
contextMenu.add(backgroundModule)