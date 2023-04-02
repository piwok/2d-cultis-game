class Player extends(CollisionBlock) {
    constructor (position, size, context, image, hurtbox, attackbox, gravitatory_pull) {
        super(position, size, context, image, hurtbox, attackbox);
        this.velocity = {x: 0, y: 0};
        this.gravity = true;
        this.gravitatory_pull = gravitatory_pull;
        this.collision_blocks = [];}
    
    draw () {
        this.context.fillStyle = this.size.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        if (this.attackbox.attack === true) {
            console.log(this.velocity.x)
            this.context.fillStyle = this.attackbox.color;
            if (this.velocity.x >= 0) {
            this.context.fillRect(this.position.x + this.size.width, this.position.y + this.attackbox.rel_pos_y, this.attackbox.width, this.attackbox.height)
            }
            else if (this.velocity.x < 0) {this.context.fillRect(this.position.x - this.attackbox.width, this.position.y + this.attackbox.rel_pos_y, this.attackbox.width, this.attackbox.height)}
        }
    }
        
    update () {
        this.applyVelocityX();
        if (this.velocity.x > 0) {this.detectRightCollision();}
        else if (this.velocity.x < 0) {this.detectLeftCollision();}
        this.applyVelocityY();
        this.detectTopCollision();
        this.detectBottonCollision();
        this.draw();}

    applyVelocityY () {
        this.position.x += this.velocity.x;}

    applyVelocityX () {
        if (this.gravity === true) {
            this.velocity.y += this.gravitatory_pull}
        this.position.y += this.velocity.y;}

    getCollisionBlocks (collision_blocks) {
        this.collision_blocks = collision_blocks;}

    detectRightCollision() {}

    detectLeftCollision() {}

    detectBottonCollision () {}
        
    detectTopCollision () {
        this.collision_blocks.forEach ((block) => {
            if (this.position.y + this.size.height >= block.position.y &&
                this.position.y + this.size.height <= block.position.y + block.size.height &&
                this.position.x + this.size.width >= block.position.x &&
                this.position.x <= block.position.x + block.size.width) {
                    this.velocity.y = 0;
                    this.position.y = block.position.y - this.size.height - 0.01;
            }
        })
    }

    setGravity (new_mode) {
        this.gravity = new_mode;}

}
