class Sprite {
    //position = {x: int_value, y: int_value}//
    //size = {width: int1_value, height: int_value1, color: str_value1, rel_pos_x: int_value1, rel_pos_y: int_value1},
    //{width: int2_value, height: int_value2, color: str_value2, rel_pos_x: int_value2, rel_pos_y: int_value2},...
    //the main hit box has = rel_pos_x = 0 and rel_pos_y = 0 
    constructor (position, size, context, image) {
        this.position = position;
        this.size = size;
        this.context = context;
        this.img = image;
        }
    update () {
        this.draw();}
    draw () {
        this.context.fillStyle = this.size.color;
            this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        };
}
