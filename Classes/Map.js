class Map extends (Sprite) {
    constructor(position, size, context, image_src, width_blocks, height_blocks) {
        super(position, size, context, image_src);
        this.img = new Image();
        this.img.src = image_src;
        this.width_blocks = width_blocks;
        this.height_blocks = height_blocks;
        }
    
    update () {
        
        
        this.draw()
    }

    draw () {
        this.context.save()
        this.context.translate(-this.position.x, - 3*this.img.height/4)
        this.context.drawImage(this.img, 0, 0)
        this.context.restore()
    }
}
