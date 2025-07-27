import './styles.css';
import { ContextMenu } from './menu';
import { CustomMessage } from './modules/message.module';

const contextMenu = new ContextMenu('#menu');

const customMessage = new CustomMessage();

contextMenu.add(customMessage);
