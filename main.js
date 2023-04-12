document.addEventListener('DOMContentLoaded', () => {

const collision_blocks_map_1 = [];
const monsters_maps_1 = [];
let canvas = document.getElementById('root');
let context_2D = canvas.getContext('2d');
const map = {};
const floor = new CollisionBlock({x: 0, y: 750}, {width: 6400, height: 25, color: 'green'}, context_2D, {}, {}, {});
const wall_1 = new CollisionBlock({x: 1000, y: 450}, {width: 25, height: 300, color: 'yellow'}, context_2D, {}, {}, {});
const wall_2 = new CollisionBlock({x: 300, y: 600}, {width: 25, height: 150, color: 'yellow'}, context_2D, {}, {}, {});
const platform_1 = new CollisionBlock({x: 1100, y: 500}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_2 = new CollisionBlock({x: 1650, y: 500}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
collision_blocks_map_1.push(floor);
collision_blocks_map_1.push(wall_1);
collision_blocks_map_1.push(wall_2);
collision_blocks_map_1.push(platform_1);
collision_blocks_map_1.push(platform_2);
const player = new Player({x: 350, y: 0}, {width: 50, height: 150, color: 'red'}, context_2D, {}, {},
                    {width: 150, height: 40, color: 'black', rel_pos_x: 50, rel_pos_y: 0, attack: false, duration: 1000, damage: 1}, 0.45, map);
const background = new Map({x: 0, y: 0}, {width: 6400, height: 3600}, context_2D, './Assets/map1.png', 256, 144, {x: 0, y: 2700}, player);
const controller = new KeyboardController(player);
const cultist = new Monster ({x: 1000, y: 0}, {width: 50, height: 150, color: 'purple'}, context_2D, {}, {}, {width: 150, height: 40, attack: false, duration: 1000, damage: 1}, 0.05, map);
monsters_maps_1.push(cultist);
player.getCollisionBlocks(collision_blocks_map_1);
player.getMonsters(monsters_maps_1);
player.getBackground(background);
cultist.getCollisionBlocks(collision_blocks_map_1);



function updateScreen() {
    // context_2D.fillStyle = "blue";
    // context_2D.fillRect(0, 0, canvas.width, canvas.height);
    controller.applyController();
    background.update(); 
    player.update()
    collision_blocks_map_1.forEach((block) => {
        block.update();
    })
    monsters_maps_1.forEach((monster) => {
        monster.update()
    })
    
    window.requestAnimationFrame(updateScreen);

}
updateScreen();

});
