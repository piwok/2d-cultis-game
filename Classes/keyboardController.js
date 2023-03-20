class keyboardController {
    constructor(player) {
        this.player = player;
        this.keys = {
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
    }
}