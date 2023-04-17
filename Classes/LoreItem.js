class LoreItem extends (Sprite) {
    constructor(position, size, context, image_src, text_window, text) {
        super(position, size, context, image_src);
        this.text_window = text_window;
        this.text = text;
        this.display_text = false;
    }
    draw () {
        this.context.fillStyle = this.size.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        if (this.display_text = true) {
            
        }
        };
}