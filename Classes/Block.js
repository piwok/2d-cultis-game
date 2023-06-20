export class Block {
    constructor(position, size, color) {
        this.position = position
        this.size = size
        this.color = color
    }

    update () {}

    draw (context_2D) {
        context_2D.fillStyle = 'red'
        context_2D.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)

    }
}