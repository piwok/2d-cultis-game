class KeyboardController {
    constructor(player) {
        this.player = player;
        this.jump_lock = false;
        this.keys = {
            o: {pressed: false},
            p: {pressed: false},
            q: {pressed: false},
            a: {pressed: false},
            space: {pressed: false}
        };
        document.addEventListener('keydown', (event) => {
            if (event.key === 'o' && this.keys.o.pressed === false) {
                this.keys.o.pressed = true}
            else if (event.key === 'p' && this.keys.p.pressed === false) {
                this.keys.p.pressed = true}
            else if (event.key === 'q' && this.keys.q.pressed === false) {
                this.keys.q.pressed = true}
            else if (event.key === 'a' && this.keys.a.pressed === false) {
                this.keys.a.pressed = true}
            else if (event.key === ' ' && this.keys.space.pressed === false) {
                this.keys.space.pressed = true}
        })
        document.addEventListener('keyup', (event) => {
            if (event.key === 'o') {
                this.keys.o.pressed = false}
            else if (event.key === 'p') {
                this.keys.p.pressed = false}
            else if (event.key === 'q') {
                this.keys.q.pressed = false}
            else if (event.key === 'a') {
                this.keys.a.pressed = false}
            else if (event.key === ' ') {
                this.keys.space.pressed = false}
        })
    }
    applyController() {
        if (this.keys.p.pressed === true && this.keys.o.pressed ===false) {
            this.player.velocity.x = 5;
        }
        else if (this.keys.p.pressed === false && this.keys.o.pressed ===true) {
            this.player.velocity.x = -5;
        }
        else if (this.keys.p.pressed === true && this.keys.o.pressed ===true) {
            this.player.velocity.x = 0;
        }
        else if (this.keys.p.pressed === false && this.keys.o.pressed ===false) {
            this.player.velocity.x = 0;
        }
        if (this.keys.space.pressed === true) {
            if (this.jump_lock === false) {
                this.player.velocity.y =-10;
                this.jump_lock = true;
            }
            else {
                if (this.player.velocity.y === 0) {
                    this.jump_lock = false;
                }
            }
        }
    }
}