class Sprite {
    //position = {x: int_value, y: int_value}//
    //size = {width: int_value, y: int_value}//
    //hitbox_size = {width: int_value, height: int_value}
    //velocity = {x: int_value, y: int_value}
    constructor (position, size, color, context) {
        this.context = context;
        this.position = position;
        this.size = size;
        this.color = color;}
    update () {
        this.draw();}
    draw () {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);}
}