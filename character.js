class Character {
  constructor(name, hp, dmg, mana) {
    this.hp = hp ;
    this.dmg = dmg ;
    this.mana = mana ;
    this.name = name ;
    this.status = status ;
  };


  takeDamage = (enemy) => {
    
    this.hp -= enemy.dmg ;
    console.log(`%c%s`, `color: white; background:red; style:bold`,`${enemy.name} is attacking ${this.name} ! -${enemy.dmg}HP ! (${this.hp}HP left) :( `);
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(`${this.name} is dead ! RIP`);
    }
  };

  dealDamage = (victim) => {
    victim.takeDamage(this);
    if (victim.status === "loser") {
      this.mana += 20 ;
    }
  }
}