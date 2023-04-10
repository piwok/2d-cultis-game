//position = {x: int_value, y: int_value}//
    //size = {width: int1_value, height: int_value1, color: str_value1, rel_pos_x: int_value1, rel_pos_y: int_value1},
    //{width: int2_value, height: int_value2, color: str_value2, rel_pos_x: int_value2, rel_pos_y: int_value2},...
    //the main hit box has = rel_pos_x = 0 and rel_pos_y = 0
    //hurtbox = {width: int1_value, height: int_value1, color: str_value1, rel_pos_x: int_value1, rel_pos_y: int_value1, armor: int_value 1},
    //{width: int2_value, height: int_value2, color: str_value2, rel_pos_x: int_value2, rel_pos_y: int_value2, armor: int_value 2}
    //attackbox = {width: int1_value, height: int_value1, color: str_value1, rel_pos_x: int_value1, rel_pos_y: int_value1, attack = boolean_value, duration_ int_value1, damage: int_value1},
    //{width: int2_value, height: int_value2, color: str_value2, rel_pos_x: int_value2, rel_pos_y: int_value2, attack = boolean_value, duration: int_value 2, damage: int_value2}
class CollisionBlock extends (Sprite) {
    constructor (position, size, context, image_scr, hurtbox, attackbox) {
        super(position, size, context, image_scr);
        this.hurtbox = hurtbox;
        this.attackbox = attackbox;
    }
}