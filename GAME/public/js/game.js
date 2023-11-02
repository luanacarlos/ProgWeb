(function () {

    const FPS = 300;
    const HEIGHT = 300;
    const WIDTH = 1024;
    const PROB_NUVEM = 1;
    const PROB_PTERO = 1;
    const PROB_CACTO = 2;
    const PROB_CACTOP = 4;
    const PROB_CACTOG = 3;
    let gameStarted = false;
    let gameOver = false;
  
    let gameLoop;
    let deserto;
    let dino;
    let nuvens = [];
    let pteros = [];
    let cactos = [];
    let frame = 0;
    let multiplicador = 2;
    let score = 0;
    let quad = 0;
  
  
    function init() {
      if (true) {
        window.addEventListener("keydown", startGame);
      }
      deserto = new Deserto();
      dino = new Dino();
    }
  
    function startGame(e) {
      if (!gameStarted && e.code === "Space") {
        gameStarted = true;
        gameLoop = setInterval(run, 1000 / FPS);
      }
      if (gameStarted && ((e.code === "Space") || (e.code === "ArrowUp"))  ) {
        if (dino.status === 0) dino.status = 1;
      }
    }
  
  
  
    class Deserto {
      constructor() {
        this.element = document.createElement("div")
        this.element.className = "deserto";
        this.element.style.width = `${WIDTH}px`;
        this.element.style.height = `${HEIGHT}px`;
        document.getElementById("game").appendChild(this.element)
  
        this.chao = document.createElement("div")
        this.chao.className = "chao"
        this.chao.style.backgroundPositionX = 0;
        this.element.appendChild(this.chao)
      }
      mover(multiplicador) {
        this.chao.style.backgroundPositionX = `${parseInt(this.chao.style.backgroundPositionX) - multiplicador}px`
      }
      reset() {
        this.chao.style.backgroundPositionX = 0;
      }
    }
  
    class Dino {
      #status
      constructor() {
        this.backgroundPositionsX = {
          correndo1: "-1393px",
          correndo2: "-1459px",
          pulando: "-1261px", 
          morrendo: "-1525px"
        }
        this.#status = 0; // 0-correndo, 1-subindo, 2-descendo
        this.altumaMinima = 2;
        this.altumaMaxima = 185;
        this.element = document.createElement("div")
        this.element.className = "dino";
        this.element.style.backgroundPositionX = this.backgroundPositionsX.correndo1;
        this.element.style.backgroundPositionY = "-2px";
        this.element.style.bottom = `${this.altumaMinima}px`
        deserto.element.appendChild(this.element)
      }
      /**
       * @param {number} value
       */
      set status(value) {
        if (value >= 0 && value <= 2) this.#status = value;
      }
      get status() {
        return this.#status;
      }
      correr() {
        if (this.#status === 0 && frame % 30 === 0) this.element.style.backgroundPositionX = this.element.style.backgroundPositionX === this.backgroundPositionsX.correndo1 ? this.backgroundPositionsX.correndo2 : this.backgroundPositionsX.correndo1;
        else if (this.#status === 1) {
          this.element.style.backgroundPositionX = this.backgroundPositionsX.pulando;
          this.element.style.bottom = `${parseInt(this.element.style.bottom) + 2}px`;
          if (parseInt(this.element.style.bottom) >= this.altumaMaxima) this.status = 2;
        }
        else if (this.#status === 2) {
          this.element.style.bottom = `${parseInt(this.element.style.bottom) - 2}px`;
          if (parseInt(this.element.style.bottom) <= this.altumaMinima) this.status = 0;
        }
        else if (this.#status === 3) this.element.style.backgroundPositionX = this.element.backgroundPositionsX.morrendo;
      } 
    }
  
    class Nuvem {
      constructor() {
        this.element = document.createElement("div");
        this.element.className = "nuvem";
        this.element.style.right = 0;
        this.element.style.top = `${parseInt(Math.random() * 200)}px`
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + 1}px`;
      }
    }
  
    class Ptero {
      #status
      constructor() {
        this.backgroundPositionsX = {
          voando1: "-193px",
          voando2: "-263px",
        }
        this.#status = 0;
        this.element = document.createElement("div")
        this.element.className = "ptero";
        this.element.style.right = 0;
        this.element.style.backgroundPositionX = this.backgroundPositionsX.correndo1;
        this.element.style.top = `${parseInt(Math.random() * 100)+140}px`
        deserto.element.appendChild(this.element)
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + multiplicador}px`;
      }
      /**
       * @param {number} value
       */
      set status(value) {
        if (value >= 0 && value <= 2) this.#status = value;
      }
      get status() {
        return this.#status;
      }    
      voar() {
        if (this.#status === 0 && frame % 30 === 0) this.element.style.backgroundPositionX = this.element.style.backgroundPositionX === this.backgroundPositionsX.voando1 ? this.backgroundPositionsX.voando2 : this.backgroundPositionsX.voando1;
      }    
    }
  
  
    class Cacto {
      constructor(classeCSS) {
        this.element = document.createElement("div");
        this.element.className = classeCSS; // Use a classe CSS fornecida como parâmetro
        this.element.style.right = 0;
        this.element.style.bottom = 0;
        deserto.element.appendChild(this.element);
      }
    
      mover(multiplicador) {
        this.element.style.right = `${parseInt(this.element.style.right) + multiplicador}px`;
      }
    } 
  
  
    class Cactop {
      constructor() {
        this.element = document.createElement("div");
        this.element.className = "cactop";
        this.element.style.right = 0;
        this.element.style.bottom = 0;
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + 1}px`;
      }
    }
    
  
    class Cactog {
      constructor() {
        this.element = document.createElement("div");
        this.element.className = "cactog";
        this.element.style.right = 0;
        this.element.style.bottom = 0;
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + 1}px`;
      }
    }
  
  
    function checkCollision() {
      if (gameOver) return;
  
      for (const cacto of cactos) {
        const dinoRect = dino.element.getBoundingClientRect();
        const cactosRect = cacto.element.getBoundingClientRect();
        if (
          dinoRect.right > cactosRect.left &&
          dinoRect.left < cactosRect.right &&
          dinoRect.bottom > cactosRect.top &&
          dinoRect.top < cactosRect.bottom
        ) {
          // Colisão detectada, game over
          gameOver = true;
          clearInterval(gameLoop);
          dino.element.style.backgroundPositionX = dino.backgroundPositionsX.morrendo;
          alert("Game Over! Sua pontuação: " + score);
        }
      }
      for (const ptero of pteros) {
        const dinoRect = dino.element.getBoundingClientRect();
        const pterosRect = ptero.element.getBoundingClientRect();
        if (
          dinoRect.right > pterosRect.left &&
          dinoRect.left < pterosRect.right &&
          dinoRect.bottom > pterosRect.top &&
          dinoRect.top < pterosRect.bottom
        ) {
          // Colisão detectada, game over
          gameOver = true;
          clearInterval(gameLoop);
          dino.element.style.backgroundPositionX = dino.backgroundPositionsX.morrendo;
          alert("Game Over! Sua pontuação: " + score);
        }
      }
    }
  
    
    function updateScore() {
      score = parseInt(score+1+multiplicador);
      const scoreElement = document.getElementById("score");
      if (scoreElement) {
        scoreElement.textContent = "Pontuação: " + score;
      }
    }
  
  
  
    function run() {
      frame = frame + 1 ;
      if (frame === FPS){ 
        frame = 0; 
        multiplicador = multiplicador + 0.005;
        
      } 
      if (frame % 50 == 0){
        updateScore();
        
      }
  
      deserto.mover(multiplicador)
      dino.correr() 
  
      if (Math.random() * 100 <= PROB_NUVEM) nuvens.push(new Nuvem());
      if (frame % 2 === 0) nuvens.forEach(nuvem => nuvem.mover());
  
      if (Math.random() * 100 <= PROB_PTERO && frame % 175 === 0) pteros.push(new Ptero());
      if (frame % 1 === 0) pteros.forEach(ptero => ptero.mover());
      if (frame % 20 === 0) pteros.forEach(ptero => ptero.voar());
  
      if (Math.random() * 100 <= PROB_CACTO && frame % 120 === 0 ) cactos.push(new Cacto("cacto"));
      if (Math.random() * 100 <= PROB_CACTOP && frame % 60 === 0 ) cactos.push(new Cacto("cactop"));
      if (Math.random() * 100 <= PROB_CACTOG && frame % 90 === 0 ) cactos.push(new Cacto("cactog"));
      if (frame % 1 === 0) cactos.forEach(cacto => cacto.mover(multiplicador));
    
      checkCollision();   
  
      if(gameOver === true){
        //restartGame();
      }
      
  
    }
  
    init()
  
  })()