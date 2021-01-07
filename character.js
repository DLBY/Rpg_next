class Character {
  constructor(name, hp, dmg, mana) {
    this.hp = hp ;
    this.dmg = dmg ;
    this.mana = mana ;
    this.name = name ;
    this.status = status ;
  };


  takeDamage = (enemy) => {
    console.log(`${this.name} is attacking ${enemy.name} ! -${this.dmg}HP ! (${enemy.hp}HP left) :( `);
    this.hp -= enemy.dmg ;
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(`${enemy.name} is dead ! RIP`);
    }
  };

  dealDamage = (victim) => {
    victim.takeDamage(this);
    if (victim.status === "loser") {
      this.mana += 20 ;
    }
  }
}