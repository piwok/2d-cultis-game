document.addEventListener('DOMContentLoaded', () => {

const collision_blocks_map_1 = [];
const monsters_maps_1 = [];
const lore = [];
let canvas = document.getElementById('root');
let context_2D = canvas.getContext('2d');
const map = {};
const floor = new CollisionBlock({x: 0, y: 750}, {width: 6400, height: 25, color: 'green'}, context_2D, {}, {}, {});
const wall_1 = new CollisionBlock({x: 1000, y: 450}, {width: 25, height: 300, color: 'yellow'}, context_2D, {}, {}, {});
const wall_2 = new CollisionBlock({x: 300, y: 600}, {width: 25, height: 150, color: 'yellow'}, context_2D, {}, {}, {});
const platform_1 = new CollisionBlock({x: 1100, y: 500}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_2 = new CollisionBlock({x: 1650, y: 300}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_3 = new CollisionBlock({x: 2200, y: 100}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_4 = new CollisionBlock({x: 2750, y: -100}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_5 = new CollisionBlock({x: 3300, y: -300}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_6 = new CollisionBlock({x: 3850, y: -500}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_7 = new CollisionBlock({x: 4400, y: -700}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_8 = new CollisionBlock({x: 4950, y: -900}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_9 = new CollisionBlock({x: 5500, y: -1100}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_10 = new CollisionBlock({x: 6050, y: -1300}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_11 = new CollisionBlock({x: 5500, y: -1500}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_12 = new CollisionBlock({x: 4950, y: -1700}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_13 = new CollisionBlock({x: 4400, y: -1900}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_14 = new CollisionBlock({x: 3850, y: -2100}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_15 = new CollisionBlock({x: 3300, y: -2300}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_16 = new CollisionBlock({x: 2750, y: -2500}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
const platform_17 = new CollisionBlock({x: 2200, y: -2700}, {width: 400, height: 25, color: 'brown'}, context_2D, {}, {}, {});
collision_blocks_map_1.push(floor);
collision_blocks_map_1.push(wall_1);
collision_blocks_map_1.push(wall_2);
collision_blocks_map_1.push(platform_1);
collision_blocks_map_1.push(platform_2);
collision_blocks_map_1.push(platform_3);
collision_blocks_map_1.push(platform_4);
collision_blocks_map_1.push(platform_5);
collision_blocks_map_1.push(platform_6);
collision_blocks_map_1.push(platform_7);
collision_blocks_map_1.push(platform_8);
collision_blocks_map_1.push(platform_9);
collision_blocks_map_1.push(platform_10);
collision_blocks_map_1.push(platform_11);
collision_blocks_map_1.push(platform_12);
collision_blocks_map_1.push(platform_13);
collision_blocks_map_1.push(platform_14);
collision_blocks_map_1.push(platform_15);
collision_blocks_map_1.push(platform_16);
collision_blocks_map_1.push(platform_17);



const player = new Player({x: 350, y: 0}, {width: 50, height: 150, color: 'red'}, context_2D, {}, {},
                    {width: 150, height: 40, color: 'black', rel_pos_x: 50, rel_pos_y: 0, attack: false, duration: 1000, damage: 1}, 0.45, map);
const background = new Map({x: 0, y: -2700}, {width: 6400, height: 3600}, context_2D, './Assets/map1.png', 256, 144);
const controller = new KeyboardController(player);
//const cultist = new Monster ({x: 1000, y: 0}, {width: 50, height: 150, color: 'purple'}, context_2D, {}, {}, {width: 150, height: 40, attack: false, duration: 1000, damage: 1}, 0.05, map);
const book = new LoreItem ({x: 750, y: 650}, {width: 66, height: 33, color: 'blue'}, context_2D, {}, {}, 'es un libro o rectangulo azul mas o menos', player)
const scepter = new LoreItem ({x: 2800, y: -2650}, {width: 12, height: 80, color: 'red'}, context_2D, {}, {}, 'cetro invocacion profundos', player)
lore.push(book)
lore.push(scepter)
//monsters_maps_1.push(cultist);
player.getCollisionBlocks(collision_blocks_map_1);
player.getMonsters(monsters_maps_1);
player.getBackground(background);
player.getLoreItems(lore);
//cultist.getCollisionBlocks(collision_blocks_map_1);



function updateScreen() {
    // context_2D.fillStyle = "blue";
    // context_2D.fillRect(0, 0, canvas.width, canvas.height);
    controller.applyController();
    background.update(); 
    
    collision_blocks_map_1.forEach((block) => {
        block.update();
    })
    monsters_maps_1.forEach((monster) => {
        monster.update()
    })
    lore.forEach((lore_item) => {
        lore_item.update()
    })
    player.update()
    
    window.requestAnimationFrame(updateScreen);

}
updateScreen();

});
