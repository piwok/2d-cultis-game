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
        
        this.context.drawImage(this.img, this.position.x, this.position.y)
        this.context.restore()
    }
}
