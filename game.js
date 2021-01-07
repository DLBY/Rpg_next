class Game {
  constructor(turn=10, status = "ongoing") {
    this.turn = turn ;
    this.status = status ;
  };
  initializingChar = () => {
    const players = [new Paladin(), new Assassin(),new Berzerker(), new Fighter(),new Monk()];
    return players
    // const player1 = new Paladin;
    // const player2 = new Assassin;
    // const player3 = new Berzerker;
    // const player4 = new Figter;
    // const player5 = new Monk;
  }

  turnLeft = () => {
    this.turn
    console.log(`Nombre de tours restants : ${i}`);
  };

  newTurn = () => {
    this.turn--;
    console.log(`${this.turn} rounds left`);
  };

  endGame = () => {
    this.player.isAlive();
    if (this.turn === 0) {
      this.status = "ended"
      console.log("Game Over");
    };
  };

  isAlive = checkCharacters => {
    return checkCharacters.filter(char => char.status !== "loser")
  };
}

