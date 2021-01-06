class Monk extends Character {
  constructor(name="Moana", hp = 8, dmg = 2, mana = 200) {
    super(name, hp, dmg, mana, status) ;
  }

  healingLighting = () => {
    this.mana -= 25 ; //à condition d'avoir 25 mana
    this.hp += 8 ; //avec un max de 8 hp
  }








}