class Fighter extends Character {
  constructor(name="Grace", hp = 1, dmg = 4, mana = 40, status="playing") {//hp12
    super(name, hp, dmg, mana, status)
  }

  darkVision = victim => {
    victim.hp -= 5 ;
    this.mana -= 20 ;
    //aucun dmg pour le prochain tour
    //inflige 7 dmg à l'assassing si la cible a  hp > 0
  }








}