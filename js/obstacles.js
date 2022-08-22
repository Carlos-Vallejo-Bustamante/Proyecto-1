class Obstacles {
    constructor(context, x, y) {
        this.context = context
        this.x = x
        this.y = y
    }

    draw() {
        this.context.fillStyle = 'green'
        this.context.fillRect(this.x, this.y, 80, 30)
    }
}