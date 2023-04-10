class Background extends (Sprite) {
    constructor(position, size, context, image_src) {
        super(position, size, context, image_src);
        this.img = new Image();
        this.img.src = image_src;
    }
    draw () {
        this.context.drawImage(this.img, this.position.x, this.position.y);}
}