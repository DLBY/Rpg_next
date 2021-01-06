class Character {
  constructor(name, hp, dmg, mana, status="playing") {
    this.hp = hp ;
    this.dmg = dmg ;
    this.mana = mana ;
    this.name = name ;
    this.status = status ;
  };


  takeDamage(fromEnemy) {
    this.hp -= fromEnemy.dmg ;
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(this);
    }
  };

  dealDamage(victim) {
    victim.takeDamage(this)
    if (victim.status === "loser") {
      this.mana += 20 ;
    }
  }
}