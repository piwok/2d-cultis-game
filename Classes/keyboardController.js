class KeyboardController {
    constructor(player) {
        this.player = player;
        this.jump_lock_1 = false;
        this.jump_lock_2 = false;
        this.last_key = 'start value';
        this.keys = {
            o: {pressed: false},
            p: {pressed: false},
            q: {pressed: false},
            a: {pressed: false},
            space: {pressed: false}};
        document.addEventListener('keydown', (event) => {
            if (event.key === 'o' && this.last_key != 'o') {
                this.last_key = 'o';
                this.keys.o.pressed = true}
            else if (event.key === 'p' && this.last_key != 'p') {
                this.last_key = 'p';
                this.keys.p.pressed = true}
            else if (event.key === 'q' && this.keys.q.pressed === false) {
                this.keys.q.pressed = true}
            else if (event.key === 'a' && this.keys.a.pressed === false) {
                this.keys.a.pressed = true}
            else if (event.key === ' ' && this.last_key != ' ') {
                this.last_key = ' ';
                this.keys.space.pressed = true}})
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
            this.last_key = 'sin valor'})}
    applyController() {
        if (this.keys.p.pressed === true && this.keys.o.pressed ===true) {this.player.velocity.x = 0;}
        else if (this.keys.p.pressed === true) {this.player.velocity.x = 5;}
        else if (this.keys.o.pressed === true) {this.player.velocity.x = -5;}
        else if (this.keys.p.pressed === false && this.keys.o.pressed ===false) {this.player.velocity.x = 0;}
        if (this.keys.space.pressed === true) {this.keys.space.pressed = false;
            if (this.jump_lock_1 === false && this.jump_lock_2 === false) {
                this.player.velocity.y =-10;
                this.jump_lock_1 = true;}
            else if (this.jump_lock_1 === true && this.jump_lock_2 === false) {
                this.player.velocity.y = -10;
                this.jump_lock_2 = true;}}   
        if (this.player.velocity.y === 0) {
            this.jump_lock_1 = false;
            this.jump_lock_2 = false;}}}
