class Background {
    constructor(context, w, h) {
        this.context = context
        this.width = w
        this.height = h

        this.image = new Image()
        this.image.src = "./js/images/background-sonic.jpg"


        this.posX = 0
        this.posY = 0

        this.velX = 1
    }

    draw() {
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.context.drawImage(this.image, this.posX + canvas.width, this.posY, this.width, this.height)

        // this.image.src = this.image.src;
        // this.context.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
        this.move()
    }

    move() {
        if (this.posX <= -this.width) {
            this.posX = 0;
        }
        this.posX -= 0;
    }
}