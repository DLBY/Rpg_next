class Fighter extends Character {
  constructor(name="Grace", hp = 12, dmg = 4, mana = 40,) {
    super(name, hp, dmg, mana, status)
  }

  darkVision = () => {
    this.dmg = 7 ;
    this.mana -= 20 ;
    //aucun dmg pour le prochain tour
    //inflige 7 dmg à l'assassing si la cible a  hp > 0
  }








}