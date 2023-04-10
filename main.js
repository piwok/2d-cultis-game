document.addEventListener('DOMContentLoaded', () => {

const elements = [];
const collision_blocks_map_1 = [];
let canvas = document.getElementById('root');
let context_2D = canvas.getContext('2d');
const map = {};

for (let i = 0; i < 6400/25; i++) {
    for (let j = 0; j < 3600/25; j++) {
        map[`${i},${j}`] = 0;

    }
}


for (let i = 0; i < 6400/25; i++) {
    
    map[`${i},20`] = new CollisionBlock({x: 25*i, y: 20*25}, {width: 25, height: 25, color: 'green'}, context_2D, {}, {}, {})
    
}




const player = new Player({x: 350, y: 0}, {width: 50, height: 150, color: 'red'}, context_2D, {}, {},
                    {width: 150, height: 40, color: 'black', rel_pos_x: 50, rel_pos_y: 0, attack: false, duration: 1000, damage: 1}, 0.45, map);
const background = new Map({x: 0, y: 0}, {width: 6400, height: 3600}, context_2D, './Assets/map1.png', 256, 144, {x: 0, y: 2700}, player);
const controller = new KeyboardController(player);
const cultist = new Monster ({x: 1000, y: 0}, {width: 50, height: 150, color: 'purple'}, context_2D, {}, {}, {width: 150, height: 40, attack: false, duration: 1000, damage: 1}, 0.05, map);
// for (let i = 0; i < 30; i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 800}, {width: 25, height: 25, color: 'green'}, context_2D, {}, {}, {}))}
// for (let i = 31; i <= 55;i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 725}, {width: 25, height: 25, color: 'green'}, context_2D, {}, {}))}
// for (let i = 20; i <= 30;i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 1400, y: 25*i}, {width: 25, height: 25, color: 'yellow'}, context_2D, {}, {}))}
// for (let i = 20; i <= 31;i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 400, y: 25*i}, {width: 25, height: 25, color: 'orange'}, context_2D, {}, {}))}
// for (let i = 20; i <= 31;i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 300}, {width: 25, height: 25, color: 'red'}, context_2D, {}, {}))}
// for (let i = 20; i <= 31;i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 600}, {width: 25, height: 25, color: 'red'}, context_2D, {}, {}))}
// for (let i = 37; i <= 46;i++) {
//     collision_blocks_map_1.push(new CollisionBlock({x: 25*i, y: 450}, {width: 25, height: 25, color: 'red'}, context_2D, {}, {}))}

player.getCollisionBlocks(collision_blocks_map_1);
cultist.getCollisionBlocks(collision_blocks_map_1);
elements.push(background);
elements.push(player);
elements.push(cultist);


function updateScreen() {
    // context_2D.fillStyle = "blue";
    // context_2D.fillRect(0, 0, canvas.width, canvas.height);
    controller.applyController();
    elements.forEach(element => {
        
        element.update();
    });
    for (const [key, value] of Object.entries(map)) {
        if (value != 0) {
        value.update()
        }
    }
    
    window.requestAnimationFrame(updateScreen);

}
updateScreen();

});
