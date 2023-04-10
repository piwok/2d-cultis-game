class Player extends(CollisionBlock) {
    constructor (position, size, context, image_scr, hurtbox, attackbox, gravitatory_pull, map) {
        super(position, size, context, image_scr, hurtbox, attackbox);
        this.velocity = {x: 0, y: 0};
        this.camerabox = {width:400, height: 400}
        this.gravity = true;
        this.gravitatory_pull = gravitatory_pull;
        this.collision_blocks = [];
        this.right_attack_lock = false;
        this.left_attack_lock = false;
        this.weapon = 'start value';
        this.map = map;
    }
    
    draw () {
        this.context.fillStyle = this.size.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.context.fillRect(this.position.x - this.camerabox.width/2 + this.size.width/2, this.position.y - this.camerabox.height/2 + this.size.height/2, this.camerabox.width, this.camerabox.height)
        if (this.attackbox.attack === true) {
            this.context.fillStyle = this.attackbox.color;
            if (this.velocity.x >= 0 && this.left_attack_lock === false) {
                this.context.fillRect(this.position.x + this.size.width, this.position.y + this.attackbox.rel_pos_y, this.attackbox.width, this.attackbox.height)
                this.right_attack_lock = true;
            }
            else if (this.velocity.x < 0 && this.right_attack_lock === false) {this.context.fillRect(this.position.x - this.attackbox.width, this.position.y + this.attackbox.rel_pos_y, this.attackbox.width, this.attackbox.height)
                                                                                this.left_attack_lock = true;}
        }
    }
        
    update () {
        this.applyVelocityX();
        if (this.velocity.x > 0) {this.detectRightCollision();}
        else if (this.velocity.x < 0) {this.detectLeftCollision();}
        // this.detectCanvasBorderHorizontalCollision();
        this.applyVelocityY();
        this.detectTopCollision();
        this.detectBottonCollision();
        
        this.draw();}

    applyVelocityX () {
        this.position.x += this.velocity.x;}

    applyVelocityY () {
        if (this.gravity === true) {
            this.velocity.y += this.gravitatory_pull}
        this.position.y += this.velocity.y;}

    getCollisionBlocks (collision_blocks) {
        this.collision_blocks = collision_blocks;}
    
    // detectCanvasBorderHorizontalCollision () {
    //     if (this.position.x + this.camerabox.widt/2 - this.size.width/2 >= 1600) {
    //         this.position.x = 

    //     }
    

    detectRightCollision() {}

    detectLeftCollision() {}

    detectBottonCollision () {}
        
    detectTopCollision () {
        for (const [key, value] of Object.entries(this.map)) {
            if (value != 0) {
                
                if (this.position.y + this.size.height >= value.position.y &&
                    this.position.y + this.size.height <= value.position.y + value.size.height &&
                    this.position.x + this.size.width >= value.position.x &&
                    this.position.x <= value.position.x + value.size.width) {
                    this.velocity.y = 0;
                    this.position.y = value.position.y - this.size.height - 0.01;
                }
            }
        }
    }

    setGravity (new_mode) {
        this.gravity = new_mode;}

}
