import './styles.css';
import { ContextMenu } from './menu';
import { ShapeModule } from './modules/shape.module';
const contextMenu = new ContextMenu('#menu');
const figureModule = new ShapeModule();

contextMenu.add(figureModule);
