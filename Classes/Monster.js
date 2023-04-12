class Monster extends (Player) {
    constructor (position, size, context, image_scr, hurtbox, attackbox, gravitatory_pull, map) {
        super(position, size, context, image_scr, hurtbox, attackbox, gravitatory_pull, map);}
    
    update () {
        this.applyVelocityX();
        if (this.velocity.x > 0) {
            this.detectRightCollision();
            }
        else if (this.velocity.x < 0) {
            this.detectLeftCollision();
            
        }
        this.applyVelocityY();
        this.detectTopCollision();
        this.detectBottonCollision();
        
        this.draw();}
    

}