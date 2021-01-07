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
  while(i < 1 || game.status !== "finished") {
    const aliveChar = game.isAlive(characters)
    game.newTurn();
    console.log("New turn");
    const orderChar = shuffleArray(characters);
    new Turn(orderChar);
    const charactersEndGame = game.isAlive(aliveChar)
    game.endGame(charactersEndGame);
    console.log(game.status);
    i++;
  };
};
launchScript.addEventListener("click", startGame);