class Player extends(CollisionBlock) {
    constructor (position, size, color, context, hitbox_size, hurtbox_size, gravitatory_pull) {
        super(position, size, color, context, hitbox_size, hurtbox_size);
        this.velocity = {x: 0, y: 0};
        this.gravity = true;
        this.gravitatory_pull = gravitatory_pull;
    }
    update () {
        this.applyGravity();
        this.applyVelocity();
        this.draw();

    }
    applyGravity () {
        if (this.gravity === true) {
            this.velocity.y += this.gravitatory_pull
        }
    }
    applyVelocity () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    setGravity (new_mode) {
        this.gravity = new_mode;
    }
}