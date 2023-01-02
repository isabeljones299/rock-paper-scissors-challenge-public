class Computer {
    constructor(name) {
        this.name = name;
        this.weapon = "none";
        this.result = "none"
    }

    setWeaponChoice3() {
        let options = ['rock', 'paper', 'scissors']
        this.weapon = options[Math.floor(Math.random() * 3)];
    }
    setWeaponChoice5() {
        let options = ['rock', 'paper', 'scissors', "lizard", "spock"]
        this.weapon = options[Math.floor(Math.random() * 3)];
    }
    setWeaponChoice(gameType) {
        (gameType == "5") ? this.setWeaponChoice5() : this.setWeaponChoice3()
    }


}

module.exports = Computer;
