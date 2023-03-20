class Sprite {
    //position = {x: int_value, y: int_value}//
    //size = {width: int_value, y: int_value}//
    //hitbox_size = {width: int_value, height: int_value}
    //velocity = {x: int_value, y: int_value}
    constructor (position, size, color, hitbox_size, hurtbox_size, context, gravitatory_pull) {
        this.context = context;
        this.position = position;
        this.size = size;
        this.color = color;
        this.hitbox_size = hitbox_size;
        this.hurtbox_size = hurtbox_size;
        this.velocity = {x: 0, y: 0};
        this.gravity = true;
        this.gravitatory_pull = gravitatory_pull;
    }
    draw () {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);

    }
    setGravity (new_mode) {
        this.gravity = new_mode;
    }
    applyGravity () {
        
        console.log(this.velocity.y);
        if (this.gravity === true) {
            this.velocity.y += this.gravitatory_pull
        }
    }
    applyVelocity () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }


    }