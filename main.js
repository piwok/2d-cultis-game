document.addEventListener('DOMContentLoaded', () => {

const elements = [];
let collision_blocks = [];
let canvas = document.getElementById('root');
let context_2D = canvas.getContext('2d');
const player = new Player({x: 350, y: 0}, {width: 50, height: 150},'red', context_2D, {}, {}, 0.15);
const cultist = new Player({x: 1000, y: 0}, {width: 50, height: 150},'purple', context_2D, {}, {}, 0.5);
const bloque = new CollisionBlock({x: 500, y: 500}, {width: 25, height: 25},'green', context_2D, {}, {});
elements.push(player);
elements.push(cultist);
elements.push(bloque);

function updateScreen() {
    context_2D.fillStyle = "blue";
    context_2D.fillRect(0, 0, canvas.width, canvas.height);
    elements.forEach(element => {
        element.update();
        
    });
    window.requestAnimationFrame(updateScreen);

}
updateScreen();

});
