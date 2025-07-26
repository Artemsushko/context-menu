import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module.js';

const contextMenu = new ContextMenu('#menu');
const clicksModule = new ClicksModule(3);
//вызываем метод ослеживания кликов
clicksModule.trigger();
contextMenu.add(clicksModule);
