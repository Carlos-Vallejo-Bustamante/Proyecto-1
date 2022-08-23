class Obstacles {
    constructor(context, x, y) {
        this.context = context
        this.x = x
        this.y = y

        this.enemy = new Image()
        this.enemy.src = './js/images/enemy.png'

    }

    draw() {
        this.context.drawImage(this.enemy, this.x, this.y, 100, 100)
        // this.context.fillStyle = 'red'
        // this.context.fillRect(this.x, this.y, 80, 30)
    }
}