class Player {
    constructor(context, x, y, width, height) {
        this.context = context
        this.x = x
        this.y = y
        // this.hp = hp
        // this.score = score
        this.width = width
        this.height = height
        this.posY0 = 500

        this.velY = 1;
        this.gravity = 0.3;

        this.sonic = new Image();
        this.sonic.src = './js/images/sonic1.png';

    }

    draw() {

        // this.sonic.addEventListener("load", () => {
        this.context.fillRect(this.x, this.y, this.width, this.height)
        // this.context.drawImage(this.sonic, this.x, this.y, this.width, this.height)
        this.gravedad()
        // });


    }

    moveLeft() {
        if (this.x > 10) {
            this.x -= 10
        }

    }

    moveRigth() {
        if (this.x < 600) {
            this.x += 10
        }

    }

    jump() {
        if (this.velY === 0) {
            this.y -= 100
            this.velY -= 10
        }

    }


    gravedad() {
        if (this.y < this.posY0) {
            this.y += this.velY;
            this.velY += this.gravity;
        }
        else {
            this.y = this.posY0;
            this.velY = 1;
        }
    }
}


