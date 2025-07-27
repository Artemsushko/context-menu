import './styles.css';
import { ContextMenu } from './menu';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module.js';
import { RandomSound } from './modules/randomSound.module';
import { CustomMessage } from './modules/message.module.js';

const contextMenu = new ContextMenu('#menu');
const backgroundModule = new BackgroundModule();
const figureModule = new ShapeModule();
const clicksModule = new ClicksModule(3);
const randomSound = new RandomSound();
const customMessage = new CustomMessage();

contextMenu.add(backgroundModule);
contextMenu.add(figureModule);
contextMenu.add(clicksModule);
contextMenu.add(randomSound);
contextMenu.add(customMessage);
