import './styles.css';
import { ContextMenu } from './menu';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module.js';

const contextMenu = new ContextMenu('#menu');
const backgroundModule = new BackgroundModule();
const figureModule = new ShapeModule();
const clicksModule = new ClicksModule(3);

contextMenu.add(backgroundModule);
contextMenu.add(figureModule);
contextMenu.add(clicksModule);
