class Platform {
    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height

        this.img = new Image();
        this.img.src = './js/images/platform.png';
    }

    draw() {
        // this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
}