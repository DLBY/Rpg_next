class Berzerker extends Character {
  constructor(name="Draven", hp = 1, dmg = 4, mana = 0, status="playing") { //hp8
    super(name, hp, dmg, mana, status) ;
  }

  rage = () => {
    this.dmg += 1 ;
    this.hp -= 1 ; 
  }








}