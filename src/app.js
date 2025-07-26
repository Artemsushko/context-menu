import './styles.css';
import { ContextMenu } from './menu';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';

const contextMenu = new ContextMenu('#menu');
const backgroundModule = new BackgroundModule();
const figureModule = new ShapeModule();

contextMenu.add(backgroundModule);
contextMenu.add(figureModule);
