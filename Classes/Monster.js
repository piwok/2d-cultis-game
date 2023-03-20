class Monster extends (CollisionBlock) {
    constructor (position, size, color, context, hitbox_size, hurtbox_size, gravitatory_pull) {
        super(position, size, color, context, hitbox_size, hurtbox_size);
        this.gravitatory_pull = gravitatory_pull;
    }

}