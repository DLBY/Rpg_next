class Paladin extends Character {
  constructor(name="Ulder", hp = 1, dmg = 3, mana = 160,status="playing") {//hp16
    super(name, hp, dmg, mana, status)
  }

  healingLighting = victim => {
    victim.hp -= 4 ;
    this.mana -= 40 ; //à condition d'avoir 40 mana
    this.hp += 5 //avec un max de 16 hp
  }








}