import {Module} from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
    constructor() {
        super('random figure', 'Создать фигуру')
    }

    trigger() {
        const figure = document.createElement('div')
        const size = random(50, 150)
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        const x = random(0, window.innerWidth - size)
        const y = random(0, window.innerHeight - size)

        Object.assign(figure.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}px`,
            top: `${y}px`,
            backgroundColor: color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            zIndex: '1000'
        })

        document.body.appendChild(figure)
    }
}