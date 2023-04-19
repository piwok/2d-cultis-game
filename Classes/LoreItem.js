class LoreItem extends (Sprite) {
    constructor(position, size, context, image_src, text_window, text, player) {
        super(position, size, context, image_src);
        this.text_window = text_window;
        this.text = text;
        this.display_text = false;
        this.player = player;
    }
    draw () {
        this.context.fillStyle = this.size.color;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        if (this.display_text === true) {
            this.context.fillStyle = 'black';
            this.context.fillRect(500, 25, 600, 200)
            this.context.fillStyle = 'white'
            this.context.font = "30px serif";
            this.context.fillText(this.text, 525, 65)
            setTimeout(() => {
                this.display_text = false
            }, 5000)
            
        }
        };
}