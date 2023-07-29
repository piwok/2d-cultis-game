import Player from './Classes/Player.js'
import Projectile from './Classes/Projectile.js'
import {Block} from './Classes/Block.js'
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
const test_projectile = new Projectile(canvas.width, canvas.height)
const floor_block = new Block({x:100, y: 800}, {width: 1000, height:50}, 'red')
const platform_block = new Block({x:400, y: 550}, {width: 200, height:30}, 'red')
const wall_block = new Block({x:550, y: 300}, {width: 100, height:500}, 'red')
player.addBlock(floor_block)
player.addBlock(platform_block)
player.addBlock(wall_block)
test_projectile.addBlock(floor_block)
test_projectile.addBlock(platform_block)
test_projectile.addBlock(wall_block)
const input_handler = new GamepadHandler()
let last_time = 0
let number_frames = 0
let total_time = 0

function updateScreen (time_stamp) {
    
    const delta_time = time_stamp - last_time
    total_time += delta_time
    number_frames += 1
    last_time = time_stamp
    context_2D.clearRect(0, 0, canvas.width, canvas.height)
    context_2D.fillStyle = 'blue'
    context_2D.fill()
    input_handler.updateButtonsStatus()
    drawStatusText(context_2D, input_handler, player, test_projectile, number_frames, total_time)
    player.update(input_handler)
    test_projectile.update(input_handler)
    floor_block.draw(context_2D)
    platform_block.draw(context_2D)
    wall_block.draw(context_2D)
    player.draw(context_2D, delta_time)
    test_projectile.draw(context_2D,delta_time)
    


    requestAnimationFrame(updateScreen)
}
updateScreen(0)



                                                })

