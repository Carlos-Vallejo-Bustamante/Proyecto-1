const Game = {
    canvas: undefined,
    context: undefined,
    width: undefined,
    height: undefined,
    intervaId: undefined,
    fps: 60,

    audio: undefined,

    time: undefined,
    counter: 0,
    secs: 0,

    lifes: undefined,
    life: undefined,

    finalScreen: undefined,

    framesCounter: 0,
    numberFrames: 60,
    paralax: 15,

    background: undefined,
    player: undefined,
    obstacles: [],
    platforms: [],
    platform: undefined,
    platform2: undefined,
    canJump: false,
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
        this.lifes = document.querySelector('.lifes');

        for (let i = 1; i < 4; i++) {
            this.life = document.createElement("img")
            this.life.src = './js/images/life-sonic.png'
            this.life.setAttribute('class', 'life' + i)

            this.lifes.appendChild(this.life)
        }

        this.intervaId = setInterval(() => {

            console.log(this.player.velY)

            this.time = document.querySelector(".score").innerHTML = `Score : ${this.secs}`
            this.counter++
            if (this.counter % 60 === 0) this.secs++

            if (this.keys.keyLeftPressed) this.player.moveLeft()
            if (this.keys.keyRightPressed) this.player.moveRigth()
            if (this.keys.keyJumpPressed && this.canJump) {
                this.player.jump()
                if (this.keys.keyJumpPressed) {
                    //     this.keys.keyJumpPressed = false
                    // }
                    this.player.jump();
                    this.canJump = true;
                }
            }

            this.obstacles.forEach(obstacle => this.checkCollisionObstacles(obstacle));
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()

            this.generateObstacles()
            this.generatePlatforms()
            this.platforms.forEach((platform) =>
                this.checkCollisionPlatform(platform)
            );
            // this.checkCollisionPlatform(this.platform);
            this.checkCollisionPlatform(this.platform2);

            this.gameOver();

            // chocado = false;
            // if (!chocado && collision) quitarVida y chocaado = true

        }, 1000 / this.fps);

    },

    generateAll() {
        this.background = new Background(this.context, this.width, this.height);
        this.player = new Player(this.context, 10, 0, 100, 100)
        this.platform2 = new Platform(this.context, 0, 525 + this.player.width, this.width, 100, 0.3);
        // this.player = new Player(this.context, 10, 500, 100, 100);
        // this.obstacles = new Obstacles(this.context, this.width - 1, 500, 250, 250)
        this.platform = new Platform(this.context, 200, 400, 200, 20);
    },

    drawAll() {

        this.player.audio.play()
        if (this.keys.keyRightPressed) {
            this.background.posX -= this.paralax;
        }
        this.background.draw();
        this.player.draw(this.framesCounter);
        // this.platform.draw();
        this.context.globalAlpha = 0;
        this.platform2.draw();
        this.context.globalAlpha = 1;
        this.platforms.forEach((platform) => {
            if (this.keys.keyRightPressed) platform.x -= this.paralax;
            platform.draw();
        });
        this.obstacles.forEach(obstacle => {
            if (this.keys.keyRightPressed) obstacle.x -= this.paralax;
            obstacle.draw()
        });

    },

    generateObstacles() {

        if (this.secs === 20) this.numberFrames = 30
        if (this.secs === 40) this.numberFrames = 20
        if (this.secs === 60) this.numberFrames = 10

        if (this.framesCounter % this.numberFrames === 0) {
            this.obstacles.push(new Obstacle(this.context, this.width, this.getRandomIntInclusive(550, 150), 70, 70))
        }
    },
    generatePlatforms() {
        if (this.framesCounter % 80 === 0) {
            this.platforms.push(
                new Platform(
                    this.context,
                    this.width,
                    this.getRandomIntInclusive(500, 150),
                    200,
                    20
                )
            );
        }
    },
    movePlayer() {
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.keys.keyLeftPressed = true
                    break
                case 'ArrowRight':
                    this.keys.keyRightPressed = true
                    break
                case 's':
                    this.keys.keyJumpPressed = true
                    this.canJump = false;
                    this.player.audioJump.play()
                    break
            }
        });

        document.addEventListener('keyup', e => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.keys.keyLeftPressed = false
                    break
                case 'ArrowRight':
                    this.keys.keyRightPressed = false
                    break
                case 's':
                    this.keys.keyJumpPressed = false
                    this.canJump = false;
                    this.player.audioJump.pause()
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

    checkCollisionPlatform(platform) {
        if (this.player.y + this.player.height <= platform.y
            && this.player.y + this.player.height + this.player.velY >= platform.y
            && this.player.x + this.player.width > platform.x
            && this.player.x < platform.x + platform.width) {
            this.canJump = true;
            this.player.velY = 0
        }
    },

    checkCollisionObstacles(obstacle) {
        if (this.player.x < obstacle.x + obstacle.width &&
            this.player.x + this.player.width > obstacle.x &&
            this.player.y < obstacle.y + obstacle.height &&
            this.player.y + this.player.height > obstacle.y &&
            !obstacle.chocado) {
            const life1 = document.querySelector(`.life${this.player.hp}`)
            this.player.hp--;
            this.lifes.removeChild(life1)
            obstacle.chocado = true;
            this.player.punch.play()
        }
    },

    gameOver() {

        this.finalScreen = new Image()
        this.finalScreen.src = './js/images/game-over.webp'

        if (this.player.hp === 0) {
            clearInterval(this.intervaId)
            this.clearAll()
            this.context.drawImage(this.finalScreen, 0, 0, this.width, this.height)
            this.player.audio.pause()
            this.player.audioGameOver.play()
        }

    }
}