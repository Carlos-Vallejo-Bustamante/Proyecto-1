const Game = {
    canvas: undefined,
    context: undefined,
    width: undefined,
    height: undefined,
    intervaId: undefined,
    fps: 60,
    time: document.querySelector('.score'),
    // counter: 0,
    // secs: 0, 
    framesCounter: 0,
    paralax: 10,

    background: undefined,
    player: undefined,
    obstacles: [],
    platform: undefined,

    keys: {
        keyLeftPressed: false,
        keyRightPressed: false,
        keyJumpPressed: false
    },

    init() {
        this.canvas = document.querySelector("#canvas");
        this.context = this.canvas.getContext('2d');
        this.setDimensions();
        this.start();
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    start() {


        this.generateAll()
        this.movePlayer()

        this.intervaId = setInterval(() => {
            // this.counter++
            // if (this.counter % 60 === 0) this.secs++
            if (this.keys.keyLeftPressed) this.player.moveLeft()
            if (this.keys.keyRightPressed) this.player.moveRigth()
            if (this.keys.keyJumpPressed) {
                this.player.jump()
                if (this.keys.keyJumpPressed) {
                    this.keys.keyJumpPressed = false
                }
            }

            this.obstacles.forEach(o => {
                this.checkCollisionObstacles(o);
            });
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()

            this.generateObstacles()
            this.checkCollision()

            // chocado = false;
            // if (!chocado && collision) quitarVida y chocaado = true

        }, 1000 / this.fps);

    },

    generateAll() {
        this.background = new Background(this.context, this.width, this.height, this.paralax);
        this.player = new Player(this.context, 10, 500, 100, 100)
        // this.player = new Player(this.context, 10, 500, 100, 100);
        // this.obstacles = new Obstacles(this.context, this.width - 1, 500, 250, 250)
        this.platform = new Platform(this.context, 200, 400, 200, 50);
    },

    drawAll() {
        if (this.keys.keyRightPressed) {
            this.background.posX -= 40;
        }
        this.background.draw();
        this.player.draw();
        this.platform.draw();
        this.obstacles.forEach(el => {
            if (this.keys.keyRightPressed) {
                el.x -= 40;
            }
            el.draw()
        });
    },

    generateObstacles() {
        if (this.framesCounter % 90 === 0) {
            this.obstacles.push(new Obstacle(this.context, this.width, this.getRandomIntInclusive(500, 250), 60, 60))
        }
    },

    movePlayer() {
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowLeft': // left arrow
                    this.keys.keyLeftPressed = true
                    break
                case 'ArrowRight': // right arrow
                    this.keys.keyRightPressed = true
                    break
                case 's':
                    this.keys.keyJumpPressed = true
                    break
            }
        });

        document.addEventListener('keyup', e => {
            switch (e.key) {
                case 'ArrowLeft': // left arrow
                    this.keys.keyLeftPressed = false
                    break
                case 'ArrowRight': // right arrow
                    this.keys.keyRightPressed = false
                    break
                case 's':
                    this.keys.keyJumpPressed = false
                    break
            }
        });
    },

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    checkCollision() {
        if (this.player.y + this.player.height <= this.platform.y
            && this.player.y + this.player.height + this.player.velY >= this.platform.y
            && this.player.x + this.player.width > this.platform.x
            && this.player.x < this.platform.x + this.platform.width) {
            this.player.velY = 0
        }

    },

    checkCollisionObstacles(obstacle) {
        if (this.player.x < obstacle.x + obstacle.width &&
            this.player.x + this.player.width > obstacle.x &&
            this.player.y < obstacle.y + obstacle.height &&
            this.player.y + this.player.height > obstacle.y) {
            console.log("Choque");
        }
    }

}