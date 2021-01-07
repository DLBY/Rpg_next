class Game {
  constructor(turn=10, status = "ongoing") {
    this.turn = turn ;
    this.status = status ;
  };
  initializingChar = () => {
    const players = [new Paladin(), new Assassin(),new Berzerker(), new Fighter(),new Monk(), new Wizard()];
    return players
  }

  turnLeft = (i) => {
    this.turn
    console.log(`${this.turn} rounds left`);
    console.log(`Round n° ${i +1}`);
  };

  newTurn = () => {
    this.turn--;
  };

  endGame = (listPlayerLeft) => {
    
    if (this.turn === 0 || listPlayerLeft.length <= 1) {
      let playerLeft = this.player.isAlive();
      this.status = "finished"
      console.log("Game Over");
      playerLeft.forEach(char => console.log(char.name));
    };
  };

  isAlive = checkCharacters => {
    return checkCharacters.filter(char => char.status !== "loser" || char.hp <= 0)
  };
}

