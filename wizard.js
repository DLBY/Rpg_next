class Wizard extends Character {
  constructor(name="Gandalf", hp = 10, dmg = 2, mana = 200, status="playing") {
    super(name, hp, dmg, mana, status) ;
  }

  fireBall = victim => {
    victim.hp -=7 ;
    this.mana -= 25 ;
    if (victim.hp > 0) {
      this.hp -=7
    };
  }








}