class Player {
  constructor(name) {
    this.name = name;
    this.weapon = "none";
  }

  setWeaponChoice(weapon) {
    this.weapon = weapon;
  }
}

module.exports = Player;
