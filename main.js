import Player from './Classes/Player.js'
import InputHandler from './Classes/InputHandler.js';
import {drawStatusText} from './utils.js'
import {states, State} from './Classes/States.js'
import { GamepadHandler } from './Classes/GamepadHandler.js';



document.addEventListener('DOMContentLoaded', () => {
const loading = document.getElementById('loading');
loading.style.display = 'none'
const canvas = document.getElementById('root');
const context_2D = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const player = new Player(canvas.width, canvas.height)
const input_handler = new GamepadHandler()
//const input_handler = new InputHandler()



let last_time = 0


function updateScreen (time_stamp) {
    const delta_time = time_stamp - last_time
    last_time = time_stamp
    context_2D.rect(0, 0, canvas.width, canvas.height)
    context_2D.fillStyle = 'blue'
    context_2D.fill()
    input_handler.updateButtonsStatus()
    drawStatusText(context_2D, input_handler, player)
    player.update(input_handler)
    player.draw(context_2D, delta_time)
    


    requestAnimationFrame(updateScreen)
}
updateScreen(0)



                                                })

