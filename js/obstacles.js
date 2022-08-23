class Obstacle {
    constructor(context, x, y) {
        this.context = context
        this.x = x
        this.y = y

        this.enemy = new Image()
        this.enemy.src = './js/images/enemy.png'

        this.velX = 5

    }

    draw() {
        this.context.drawImage(this.enemy, this.x, this.y, 100, 100)
        this.move()
    }

    move() {
        this.x -= this.velX
    }
}