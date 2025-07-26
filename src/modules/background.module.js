import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor() {
        super('random bg', 'Поменять цвет')
    }

    trigger() {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        document.body.style.backgroundColor = color
    }
}