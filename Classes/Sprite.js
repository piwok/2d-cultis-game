class Sprite {
    //position = {x: int_value, y: int_value}//
    //size = {width: int_value, height: int_value}//
    //hitbox_size = {width: int_value, height: int_value}
    //velocity = {x: int_value, y: int_value}
    //anchor: middle point of the hit box {x + width/2, y + height/2}, try to solve detect collision problems 
    constructor (position, size, color, context) {
        this.context = context;
        this.position = position;
        this.size = size;
        this.color = color;}
    getAnchor () {
        return {x: this.position.x + Math.floor(this.size.width/2), y: this.position.y + Math.floor(this.size.height)}
    }
    update () {
        this.draw();}
    draw () {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);}
}