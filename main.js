document.addEventListener('DOMContentLoaded', () => {

const elements = [];
let canvas = document.getElementById('root');
let context_2D = canvas.getContext('2d');
const player = new Sprite({x: 350, y: 0}, {width: 50, height: 150},'red', {}, {}, context_2D, 1);
const cultist = new Sprite({x: 1000, y: 0}, {width: 50, height: 150},'purple', {}, {}, context_2D, 0.5);
elements.push(player);
elements.push(cultist);
const keys = {
            o: {pressed: false},
            p: {pressed: false},
            q: {pressed: false},
            a: {pressed: false}
        };
document.addEventListener('keydown', (event) => {
    if (event.key === 'o' && keys.o.pressed === false) {
        keys.o.pressed = true
        console.log(keys);
    }
    else if (event.key === 'p' && keys.p.pressed === false) {
        keys.p.pressed = true
        console.log(keys);
    }
    else if (event.key === 'q' && keys.q.pressed === false) {
        keys.q.pressed = true
        console.log(keys);
    }
    else if (event.key === 'a' && keys.a.pressed === false) {
        keys.a.pressed = true
        console.log(keys);
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key === 'o') {
        keys.o.pressed = false
        
    }
    else if (event.key === 'p') {
        keys.p.pressed = false
        
    }
    else if (event.key === 'q') {
        keys.q.pressed = false
        
    }
    else if (event.key === 'a') {
        keys.a.pressed = false
        
    }
})

function updateScreen() {
    context_2D.fillStyle = "blue";
    context_2D.fillRect(0, 0, canvas.width, canvas.height);
    elements.forEach(element => {
        
        element.applyGravity();
        element.applyVelocity();
        element.draw();
    });
    window.requestAnimationFrame(updateScreen);

}
updateScreen();

});
