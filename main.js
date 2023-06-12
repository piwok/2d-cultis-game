import Player from './Classes/Player.js'
import InputHandler from './Classes/InputHandler.js';
import {drawStatusText} from './utils.js'
import {states, State} from './Classes/States.js'

document.addEventListener('DOMContentLoaded', () => {
const loading = document.getElementById('loading');
loading.style.display = 'none'
const canvas = document.getElementById('root');
const context_2D = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const player = new Player(canvas.width, canvas.height)
const input_handler = new InputHandler()



function updateScreen () {
    context_2D.clearRect(0, 0, canvas.width, canvas.height)
    drawStatusText(context_2D, input_handler, player)
    player.update(input_handler.last_key)
    player.draw(context_2D)
    


    requestAnimationFrame(updateScreen)
}
updateScreen()



                                                })

