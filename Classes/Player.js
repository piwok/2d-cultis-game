class Player extends(CollisionBlock) {
    constructor (position, size, context, image_scr, hurtbox, attackbox, gravitatory_pull) {
        super(position, size, context, image_scr, hurtbox, attackbox);
        this.velocity = {x: 0, y: 0};
        this.camerabox = {width:400, height: 400}
        this.gravity = true;
        this.gravitatory_pull = gravitatory_pull;
        this.background = false;
        this.collision_blocks = [];
        this.monsters = [];
        this.lore_items = [];
        this.right_attack_lock = false;
        this.left_attack_lock = false;
        this.weapon = 'start value';
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
        this.detectHorizontalCollision();
        this.applyVelocityY();
        this.detectVerticalCollision();
        this.draw();}

    applyVelocityX () {
        this.position.x += this.velocity.x;}

    applyVelocityY () {
        if (this.gravity === true) {
            this.velocity.y += this.gravitatory_pull}
        this.position.y += this.velocity.y;}

    getBackground (backgroud) {
        this.background = backgroud;
    }
    
    getCollisionBlocks (collision_blocks) {
        this.collision_blocks = collision_blocks;}
    
    getMonsters (monsters) {
        this.monsters = monsters;
    }

    getLoreItems (lore_items) {
        this.lore_items = lore_items;
    }
    
    detectCanvasBorderHorizontalCollision () {
        
        
        if (this.velocity.x > 0) {
            if (this.position.x + this.camerabox.width/2 + this.size.width/2 + this.velocity.x >= 1600 &&
             this.background.position.x > -4800) {
                this.position.x = 1600 - this.camerabox.width/2 - this.size.width/2 - 0.01
                this.collision_blocks.forEach((block) => {
                    block.position.x -= + this.velocity.x;
                })
                this.monsters.forEach((monster) => {
                    monster.position.x -= + this.velocity.x;
                })
                this.background.position.x += - this.velocity.x;
            }
            else if (this.position.x + this.size.width + this.velocity.x >= 1600) {
                this.position.x = 1600 - this.size.width - 0.01;
                this.background.position.x = -4800;
            }
        }
        else if (this.velocity.x < 0) {
            if (this.position.x + this.velocity.x + this.size.width/2 - this.camerabox.width/2 <= 0 &&
             this.background.position.x < 0) {
                this.position.x = this.camerabox.width/2 - this.size.width/2 + 0.01;
                this.collision_blocks.forEach((block) => {
                    block.position.x += - this.velocity.x;
                })
                this.monsters.forEach((monster) => {
                    monster.position.x += - this.velocity.x;
                })
                this.background.position.x += - this.velocity.x;
            }
            else if (this.position.x <= 0) {
                this.position.x = 0.01;
                this.background.position.x = 0;
            }
        }
    }

    detectCanvasBorderVerticalCollision () {
        
        if (this.velocity.y <= 0) {
            if (this.position.y - this.camerabox.height/2 + this.size.height/2 - this.velocity.y  <= 0 &&
             this.background.position.y < 2700) {
                this.position.y = this.camerabox.height/2 - this.size.height/2 + 0.01;
                this.collision_blocks.forEach((block) => {
                    block.position.y += - this.velocity.y;
                })
                this.monsters.forEach((monster) => {
                    monster.position.y += - this.velocity.y;
                })
                this.background.position.y += - this.velocity.y;
            }
            else if (this.position.y <= 0) {
                this.position.y = 0 + 0.01;
                this.background.position.y =0
            }
        }
        else if (this.velocity.y > 0) {
            console.log(this.position.y)
            console.log(this.background.position.y)
            
            if (this.position.y + this.velocity.y + this.size.height/2 + this.camerabox.height/2 >= 900 &&
             this.background.position.y > -2700) {
                this.position.y = 900 - this.camerabox.width/2 - this.size.width/2 - 0.01;
                this.collision_blocks.forEach((block) => {
                    block.position.y += - this.velocity.y
                })
                this.monsters.forEach((monster) => {
                    monster.position.y += - this.velocity.y;
                })
                this.background.position.y += - this.velocity.y;
                if (this.background.position.y <= -2700) {this.background.position.y = -2700}
            }
            else if (false) {}
        }
    }
    

    detectVerticalCollision() {
        this.collision_blocks.forEach((block) => {
            if (detectCollision(this, block)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = block.position.y - this.size.height - 0.01
                }
                else if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = block.position.y + block.size.height + 0.01
                }
            }
        })
    }

    detectHorizontalCollision() {
        this.collision_blocks.forEach((block) => {
            if (detectCollision(this, block)) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0
                    this.position.x = block.position.x - this.size.width - 0.01
                }
                else if (this.velocity.x < 0) {
                    this.velocity.x = 0
                    this.position.x = block.position.x + block.size.width + 0.01
                }
            }
        })
        
    }

    setGravity (new_mode) {
        this.gravity = new_mode;}

}
