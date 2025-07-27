import './styles.css';
import { ContextMenu } from './menu';
import { CountdownTimerModule } from './modules/timer.module.js';

const contextMenu = new ContextMenu('#menu');
const countDownTimerModule = new CountdownTimerModule();

contextMenu.add(countDownTimerModule);
