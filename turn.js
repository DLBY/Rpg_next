class Turn {

  constructor(characters) {
      this.characters = characters;
      this.startTurn();
  }

  startTurn = () => {
    this.characters.forEach(player => {
      if (player.status !== "loser") {
      console.log(`---------------------------------------`);
      console.log(`%cIt's time for ${player.name} to play !`, `color: darkseagreen`);
      console.log(``);
      console.log(`What will ${player.name} do ?`);
      console.log(``);
      let actionFight = true;
      do {
        actionFight = true;
        console.log(`1 > Fight! \u2694\uFE0F`); 
        console.log(`2 > Use special attack !  \u2B50`); //mettre les sorts dans specialAttack pour faire specialAttack.name ?
        console.log(`3 > Watch player status \u2B50`);
        const playerAction = prompt("Enter you choice here");
        
        switch (playerAction) {
          case "1":
            this.oneTurn(player, this.characters);
            break;
          case "2":
            console.log("Nothing here");
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
      console.clear()
  };

    enemyStatus = (player, allCharacters) => {
    const victims = allCharacters.filter(char => char !== player)
    victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1 } - ${victim.name} : ${victim.constructor.name} - ${victim.hp}HP - ${victim.mana}MANA - ${victim.dmg}DMG`));
  }

    oneTurn = (player, characters) => {
      let isValid = true
      do {
        isValid = true
        console.log(`---------------------------------------`);
        console.log(`Choose your target below`);
        console.log(``);
        console.log(`1 > Fight with Ulder ! \u2694\uFE0F`); 
        console.log(`2 > Fight with Grace ! \u2B50`); //mettre les sorts dans specialAttack pour faire specialAttack.name ?
        console.log(`3 > Fight with Moana ! \u2B50`);
        console.log(`4 > Fight with Draven ! \u2694\uFE0F`);
        console.log(`5 > Fight with Carl ! \u2694\uFE0F`);
        console.log(`---------------------------------------`);
        const target = prompt("Who is your victim ?");
        if (target === "") { return;}
      switch (target.toString().toLowerCase()) {
        case "1":
          let paladin = characters.filter(char => char.name === "Ulder")[0];
          player.dealDamage(paladin)
          console.log(`---------------------------------------`);
          
        break;
        case "2":
          let fighter = characters.filter(char => char.name === "Grace")[0];
          player.dealDamage(fighter)
          console.log(`---------------------------------------`);
        break;
        case "3":
          let monk = characters.filter(char => char.name === "Moana")[0];
          player.dealDamage(monk)
          console.log(`---------------------------------------`);
        break;
        case "4":
          let berzerker = characters.filter(char => char.name === "Draven")[0];
          player.dealDamage(berzerker)
          console.log(`---------------------------------------`);
        break;
        case "5":
          let assassin = characters.filter(char => char.name === "Carl")[0];
          player.dealDamage(assassin)
          console.log(`---------------------------------------`);
        break;
        default:
          console.log("Invalid choice, try again");
          isValid = false
          console.log(`---------------------------------------`);

      };
    }
    while (!isValid)
  };
          
}

