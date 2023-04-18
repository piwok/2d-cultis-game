class KeyboardController {
    constructor(player) {
        this.player = player;
        this.jump_lock_1 = false;
        this.jump_lock_2 = false;
        this.right_attack_lock = false;
        this.left_attack_lock = false;
        this.last_key = 'start value';
        this.timeout_control = {investigate: false, attack: false}
        this.keys = {
            o: {pressed: false},
            p: {pressed: false},
            q: {pressed: false},
            a: {pressed: false},
            space: {pressed: false},
            w: {pressed: false},
            i: {pressed: false}
        }
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
                this.keys.space.pressed = true}
            else if (event.key === 'w' && this.last_key != 'w') {
                this.last_key = 'w';
                this.keys.w.pressed = true}
            else if (event.key === 'i' && this.last_key != 'i') {
                this.last_key = 'i';
                this.keys.i.pressed = true}
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
            else if (event.key === 'w') {
                this.keys.w.pressed = false}
            else if (event.key === 'i') {
                this.keys.i.pressed = false}
            this.last_key = 'sin valor'})}
            
    applyController() {
        if (this.keys.p.pressed === true && this.keys.o.pressed ===true) {this.player.velocity.x = 0;}
        else if (this.keys.p.pressed === true) {
            this.player.facing = 'right';
            this.player.velocity.x = 5;}
        else if (this.keys.o.pressed === true) {
            this.player.facing = 'left';
            this.player.velocity.x = -5;}
        else if (this.keys.p.pressed === false && this.keys.o.pressed ===false) {
            this.player.velocity.x = 0;}

        if (this.keys.space.pressed === true) {this.keys.space.pressed = false;
            if (this.jump_lock_1 === false && this.jump_lock_2 === false) {
                this.player.velocity.y =-13;
                this.jump_lock_1 = true;}
            else if (this.jump_lock_1 === true && this.jump_lock_2 === false) {
                this.player.velocity.y = -13;
                this.jump_lock_2 = true;}}   
        if (this.player.velocity.y === 0) {
            this.jump_lock_1 = false;
            this.jump_lock_2 = false;}
        if (this.keys.w.pressed === true) {
            this.keys.w.pressed = false;
            this.player.attackbox.attack = true;
            if (this.player.right_attack_lock === false && this.player.left_attack_lock === false) {
                setTimeout (() => {this.player.attackbox.attack = false;
                                this.player.right_attack_lock = false;
                                this.player.left_attack_lock = false},this.player.attackbox.duration)}
        
        
            
            this.player.attackbox.attack = true;
            if (this.player.right_attack_lock === false && this.player.left_attack_lock === false) {
                setTimeout (() => {this.player.attackbox.attack = false;
                                this.player.right_attack_lock = false;
                                this.player.left_attack_lock = false},this.player.attackbox.duration)}
        }
        if (this.keys.i.pressed === true && this.timeout_control.investigate === false) {
            this.timeout_control.investigate = setTimeout (() => {
                this.player.lore_items.forEach(lore_item => {
                    if (Math.abs(this.player.position.x - lore_item.position.x) <= 100) {
                        
                        console.log(`Has encontrado un ${lore_item.text}`)
                    }
                
                    
                });
                console.log ('aqui finaliza la busqueda');
                this.timeout_control.investigate = false;
                
            }, 2000)
        }
    }
}
