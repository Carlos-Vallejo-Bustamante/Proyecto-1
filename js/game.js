class Game {
    constructor(player, moles) {
        this.player = player;
        this.moles = moles;
    }

}

function play() {
    const moles = []; //Tamaño 9
    const m = new Mole();
    moles.push(m);
    const player = new Player(1, 1, 4);
    const game = new Game(player, moles);
}

function randomize(moles) {
    moles.forEach(m => {
    });
}
play();