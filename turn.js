class Turn {

  constructor(characters) {
      this.characters = characters;
      this.startTurn();
  };

  startTurn = () => {
    this.characters.forEach(player => {
      if (player.status !== "loser" || player.hp >= 0) {
        console.log(`---------------------------------------`);
        console.log(`%c%s`, `color: dark; background: lightblue; style: bold`, `It's time for ${player.name} to play !`);
        console.log(``);
        console.log(`What will ${player.name} do ?`);
        console.log(``);
        let actionFight = true;
      do {
        actionFight = true;
        console.log(`1 > Fight! \u2694\uFE0F`); 
        console.log(`2 > Use special attack !  \u2B50 ("not working yet")` ); //mettre les sorts dans specialAttack pour faire specialAttack.name ?
        console.log(`3 > Watch player status \u2B50`);
        console.log(``);
        const playerAction = prompt("Enter you choice here");
        
        switch (playerAction) {
          case "1":
            this.oneTurn(player, this.characters);
            break;
          case "2":
            console.log("Nothing here, try again");
            actionFight = false;
            break
          case "3":
            console.log("Here are the enemies status :");
            this.enemyStatus(player, this.characters)
            actionFight = false;
            break;

          default:
            console.log(``);
            console.log("Wrong choice, try again");
            actionFight = false;
        }
      }
      while (!actionFight);
    }
    })  
      console.clear();
  };

    enemyStatus = (player, characters) => {
    const victims = characters.filter(char => char !== player)
    console.log(``);
    victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1} > ${victim.name} ( ${victim.constructor.name} - ${victim.hp}HP - ${victim.mana}MANA - ${victim.dmg}DMG )`));
    console.log(``);
  }

    oneTurn = (player, characters) => {

      console.log(`---------------------------------------`);
      console.log(`Choose your target below`);
      console.log(``);
      const victims = characters.filter(char => char !== player && char.status !== "loser");
      victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1} > ${victim.name}`));
      let isValid = true;

      do {
        isValid = true;
        let target = prompt("Who is your victim ?");
        let victim =victims[parseInt(target) - 1];
        if (!victim) {
          console.log("Invalid choice, try again");
          isValid = false
          console.log(`---------------------------------------`);
        } 
        else if (victim.status === "loser") {
          console.log("Invalid choice, try again");
          isValid = false
          console.log(`---------------------------------------`);
        }
        else {
          player.dealDamage(victim)

          prompt(`End of ${player.name}'s turn, press Enter to continue`);
          console.clear();
        };
    }
    while (!isValid)
  };
          
}

