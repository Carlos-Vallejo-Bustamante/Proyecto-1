class gameObject {
    constructor({ position = { x: 0, y: 0 }, size = { width: 0, height: 0 }, hp, img, frequency }) {
        this.position = position;
        this.size = size;
        this.img = img;
        this.frequency = frequency;
    }

    isAlive() {
        return hp > 0;
    }

    recieveHit(damage) {
        this.hp -= damage;
    }

    //TODO
    draw(src) {
        this.img.addEventListener('load', () => {
            context.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
        })
        this.img.src = src;
    }
}