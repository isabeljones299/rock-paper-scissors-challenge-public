const Player = require('./player.js');
const Computer = require('./computer')
const GameResult = require('./gameResult')

class Battle {

  setup(names, gameType, playerClass = Player, computerClass = Computer, gameResultClass = GameResult) {
    this.players = [new playerClass(names[0]), new computerClass("computer"), new playerClass(names[1])]
    this.result = new gameResultClass(gameType)
    this.gameType = gameType

  }

  currentPlayer() {
    return this.players[0];
  }

  otherPlayer() {
    return this.players[2];
  }

  computerPlayer() {
    return this.players[1];
  }

  switch() {
    this.players.reverse();
  }

  playerTurn(weapon) {
    this.currentPlayer().setWeaponChoice(weapon)
  }

  computerTurn() {
    this.computerPlayer().setWeaponChoice(this.gameType);
  }

  getResult() {
    return this.otherPlayer().name ? this.result.getResult(this.currentPlayer(), this.otherPlayer()) : this.result.getResult(this.currentPlayer(), this.computerPlayer())
  }

}

module.exports = Battle;