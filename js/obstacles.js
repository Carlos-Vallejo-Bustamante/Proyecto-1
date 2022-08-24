class Obstacle {
    constructor(context, x, y, width, height) {
        this.context = context
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.enemy = new Image()
        this.enemy.src = './js/images/enemy1.png'

        this.velX = 5
        this.chocado = false;

    }

    draw() {
        this.context.drawImage(this.enemy, this.x, this.y, this.width, this.height)
        this.move()
    }

    move() {
        this.x -= this.velX
    }
}