class Player extends gameObject {
    constructor({ position = { x: 0, y: 0 }, size = { width: 0, height: 0 }, hp, img, frequency }) {
        super({ position, size, hp, img, frequency });
        this.score = 0;
    }

}
