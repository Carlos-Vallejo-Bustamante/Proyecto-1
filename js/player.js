class Player {
    constructor(context, x, y, width, height) {
        this.context = context
        this.x = x
        this.y = y
        this.hp = 3
        // this.score = score
        this.width = width
        this.height = height
        this.posY0 = 600

        this.velY = 1;
        this.gravity = 0.3;

        this.image = new Image();
        this.image.src = "./js/images/sonic-prueba.png";
        this.image.frames = 3;
        this.image.framesIndex = 0;

        this.sonic = new Image()
        this.sonic.src = './js/images/sonic1.png'

        this.audio = new Audio()
        this.audio.src = "./js/images/sonic-gumball.mp3"

        this.audioGameOver = new Audio()
        this.audioGameOver.src = "./js/images/sonic-game-over.mp3"

        this.audioJump = new Audio()
        this.audioJump.src = "./js/images/jump.mp3"
    }

    draw(framesCounter) {
        this.context.drawImage(
            this.image,
            this.image.framesIndex * (this.image.width / this.image.frames),
            0,
            this.image.width / this.image.frames,
            this.image.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
        this.animate(framesCounter);
        this.gravedad();

        // this.context.fillRect(this.x, this.y, this.width, this.height);
        // this.gravedad();
    }

    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.image.framesIndex++;
        }
        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0;
        }
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


