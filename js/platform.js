class Platform {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;

        this.img = new Image();
        this.img.src = './js/images/platform.png';
        this.width = this.img.width * 0.2;
        this.height = this.img.height * 0.2;
    }

    draw() {
        this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    isCollision(player) {
        return player.y + player.height <= this.y
            && player.y + player.height >= platform.y
            && player.x + player.width > this.x
            && player.x < platform.x + platform.width
    }
}