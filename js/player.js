class Player {
    constructor(context, x, y, hp, score) {
        this.context = context
        this.x = x
        this.y = y
        this.hp = hp
        this.score = score

        this.sonic = new Image();
        this.sonic.src = './js/images/mole.png';
    }

    draw() {

        // this.sonic.addEventListener("load", () => {
        this.context.drawImage(this.sonic, this.x, this.y, 20, 100)
        // });


    }

    moveLeft() {
        this.x -= 10
    }

    moveRigth() {
        this.x += 10
    }

    jump() {

    }
}


