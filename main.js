document.addEventListener('DOMContentLoaded', () => {

const elements = [];
const collision_blocks_map_1 = [];
let canvas = document.getElementById('root');
let context_2D = canvas.getContext('2d');
 
const player = new Player({x: 350, y: 0}, {width: 50, height: 150},'red', context_2D, {width: 50, height: 150}, {}, 0.45);
const controller = new KeyboardController(player);
const cultist = new Monster ({x: 1000, y: 0}, {width: 50, height: 150},'purple', context_2D, {width: 50, height: 150}, {}, 0.5);
for (let i = 0; i < 30; i++) {
    collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 800}, {width: 25, height: 25}, 'green', context_2D, {},{}))}
for (let i = 31; i <= 55;i++) {
    collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 750}, {width: 25, height: 25}, 'green', context_2D, {},{}))}
for (let i = 20; i <= 30;i++) {
    collision_blocks_map_1.push(new CollisionBlock({x: 1400, y: 25*i}, {width: 25, height: 25}, 'yellow', context_2D, {},{}))}
player.getCollisionBlocks(collision_blocks_map_1);
elements.push(player);
elements.push(cultist);

function updateScreen() {
    context_2D.fillStyle = "blue";
    context_2D.fillRect(0, 0, canvas.width, canvas.height);
    controller.applyController();
    collision_blocks_map_1.forEach((block) => {
        block.update()
    })
    elements.forEach(element => {
        element.update();
    });
    window.requestAnimationFrame(updateScreen);

}
updateScreen();

});
