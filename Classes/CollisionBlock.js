class CollisionBlock extends (Sprite) {
    constructor (position, size, color, context, hitbox_size, hurtbox_size) {
        super(position, size, color, context);
        this.hitbox_size = hitbox_size;
        this.hurtbox_size = hurtbox_size;
    }
}