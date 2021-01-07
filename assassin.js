class Assassin extends Character {
  constructor(name="Carl", hp = 1, dmg = 6, mana = 20, status="playing") {//hp6
    super(name, hp, dmg, mana, status) ;
  }

  shadowHit = victim => {
    victim.hp -=7 ;
    this.mana -= 20 ;
    if (victim.hp > 0) {
      this.hp -=7
    };
  }








}