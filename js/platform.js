class Platform {
    constructor(context, x, y, width, height, transparency) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height
        this.transparency = transparency

        this.img = new Image();
        this.img.src = './js/images/platform.jpg';
    }

    draw() {
        this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
        // this.context.fillStyle = "rgba(255, 255, 255, 0.5)";
        // this.context.fillRect(this.x, this.y, this.width, this.height, this.transparency)
    }
}