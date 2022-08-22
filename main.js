window.onload = () => {
    start();
}

function start() {
    const moles = []; //Tamaño 9
    const m = new Mole();
    moles.push(m);
    const player = new Player(1, 1, 4);
    const game = new Game(player, moles);

    // Canvas cosas
    const canvas = document.querySelector('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const context = canvas.getContext('2d');
    context.fillStyle = 'blue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    console.log('hola');
    canvas.addEventListener('click', (event) => {
        console.log(event);
    });

    const mole = new Mole();

}

