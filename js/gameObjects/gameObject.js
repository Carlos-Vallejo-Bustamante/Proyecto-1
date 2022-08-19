class gameObject {
    constructor(x, y, hp) {
        this.x = x;
        this.y = y;
        this.hp = hp;
    }

    isAlive() {
        return hp > 0;
    }

    recieveHit(damage) {
        this.hp -= damage;
    }

    //TODO
}