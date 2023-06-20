import Player from './Classes/Player.js'
import {Block} from './Classes/Block.js'
import InputHandler from './Classes/InputHandler.js';
import {drawStatusText, detectCollision} from './utils.js'
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
const floor_block = new Block({x:0, y: 800}, {width: 1000, height:50}, 'red')
player.addBlock(floor_block)
const input_handler = new GamepadHandler()
let last_time = 0

function updateScreen (time_stamp) {
    const delta_time = time_stamp - last_time
    last_time = time_stamp
    context_2D.clearRect(0, 0, canvas.width, canvas.height)
    context_2D.fillStyle = 'blue'
    context_2D.fill()
    input_handler.updateButtonsStatus()
    drawStatusText(context_2D, input_handler, player)
    player.update(input_handler)
    floor_block.draw(context_2D)
    player.draw(context_2D, delta_time)
    


    requestAnimationFrame(updateScreen)
}
updateScreen(0)



                                                })

