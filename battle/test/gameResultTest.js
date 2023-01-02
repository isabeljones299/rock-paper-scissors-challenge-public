const Battle = require("../src/battle");
const { assert } = require('chai');


describe("testing result class", () => {

    it("sets type of game", () => {
        //arrange
        testBattle = new Battle();
        testBattle.setup(["izzie"], 5)
        assert.equal(testBattle.result.gameType, 5)
    });

    it("returns result for singleplayer three weapons", () => {
        //arrange
        testBattle = new Battle();
        testBattle.setup(["izzie"], 3)
        //act
        testBattle.currentPlayer().setWeaponChoice("rock")
        testBattle.computerPlayer().weapon = "paper"
        //assert
        assert.equal(testBattle.getResult(), "computer wins!")
    });
    it("returns result for singleplayer five weapons", () => {
        //arrange
        testBattle = new Battle();
        testBattle.setup(["izzie"], 5)
        //act
        testBattle.currentPlayer().setWeaponChoice("lizard")
        testBattle.computerPlayer().weapon = "paper"
        //assert
        assert.equal(testBattle.getResult(), "izzie wins!")
    });
    it("returns result for multiplayer five weapons", () => {
        //arrange
        testBattle = new Battle();
        testBattle.setup(["izzie", "player2"], 5)
        //act
        testBattle.currentPlayer().setWeaponChoice("spock")
        testBattle.otherPlayer().setWeaponChoice("lizard")
        //assert
        assert.equal(testBattle.getResult(), "player2 wins!")
    });

});