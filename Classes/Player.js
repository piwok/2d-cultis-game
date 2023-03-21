class Player extends(CollisionBlock) {
    constructor (position, size, color, context, hitbox_size, hurtbox_size, gravitatory_pull) {
        super(position, size, color, context, hitbox_size, hurtbox_size);
        this.velocity = {x: 0, y: 0};
        this.gravity = true;
        this.gravitatory_pull = gravitatory_pull;
        this.collision_blocks = [];
    }
    update () {
        this.applyGravity();
        this.applyVelocity();
        this.detectCollision();
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
    getCollisionBlocks (collision_blocks) {
        this.collision_blocks = collision_blocks;
    }
    detectCollision () {
        for (let i = 0; i < this.collision_blocks.length; i++) {
            if (this.position.y + this.size.height >= this.collision_blocks[i].position.y && this.position.y + this.size.height < this.collision_blocks[i].position.y + this.collision_blocks[i].size.height && this.position.x >= this.collision_blocks[i].position.x && this.position.x < this.collision_blocks[i].position.x+this.collision_blocks[i].size.width) {
                this.velocity.y = 0;
                this.position.y = this.collision_blocks[i].position.y-this.size.height-1;
                
                return;
            }
        }

    }
    setGravity (new_mode) {
        this.gravity = new_mode;
    }
}