const launchScript = document.querySelector("button");

const startGame = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  const game = new Game();
  const characters = game.initializingChar();
  let i = 0;
  while(i < game.turn && game.status !== "finished") {
    const aliveChar = game.isAlive(characters)
    console.log(`%c%s`, `color: green; background: yellow; font-size: 24px;`, `===== New turn =====`)
    game.newTurn();
    game.turnLeft(i)


    const charactersEndGame = game.isAlive(aliveChar)
    game.endGame(charactersEndGame);
    const orderChar = shuffleArray(characters);
    new Turn(orderChar);
    i++;
  };
};
launchScript.addEventListener("click", startGame);