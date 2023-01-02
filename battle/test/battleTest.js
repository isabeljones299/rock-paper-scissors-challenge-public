const Battle = require('../src/battle');
const { expect, assert } = require('chai');
const Computer = require('../src/computer');
const Player = require('../src/player');

describe(`Battle has desired functionality`, () => {
    it(`player 1 has the name at the zeroth index on a names array`, () => {
        //arrange
        const testBattle = new Battle();
        //act
        testBattle.setup(["p1", "p2"])
        //assert
        assert.equal(testBattle.currentPlayer().name, "p1")
    })
    it(`can switch current player to other player`, () => {
        //arrange
        const testBattle = new Battle();
        //act
        testBattle.setup(["p1", "p2"])
        testBattle.switch()
        //assert
        assert.equal(testBattle.currentPlayer().name, "p2")
    })
    it(`can set player weapon`, () => {
        //arrange
        const testBattle = new Battle();
        //act
        testBattle.setup(["p1", "p2"])
        testBattle.playerTurn("rock")
        //assert
        assert.equal(testBattle.currentPlayer().weapon, "rock")
    })


})

describe(`result function supports win lose or draw scenarios`, () => {
    it(` rock beats scissors`, () => {
        //arrange
        const testBattle = new Battle();
        testBattle.setup(["testPlayer"])

        //act
        testBattle.computerPlayer().weapon = "rock"
        testBattle.currentPlayer().weapon = "scissors"

        //assert
        assert.equal(testBattle.getResult(), "computer wins!")
    })
    it(`draw is awarded when weapons are the same`, () => {
        //arrange
        const testBattle = new Battle();
        testBattle.setup(["testPlayer"])

        //act
        testBattle.computerPlayer().weapon = "rock"
        testBattle.currentPlayer().weapon = "rock"

        //assert
        assert.equal(testBattle.getResult(), "Draw!")
    })
    it(`player can win`, () => {
        //arrange
        const testBattle = new Battle();
        testBattle.setup(["testPlayer"])

        //act
        testBattle.computerPlayer().weapon = "paper"
        testBattle.currentPlayer().weapon = "scissors"

        //assert
        assert.equal(testBattle.getResult(), "testPlayer wins!")
    })
})

describe(`Battle works for multiplayer`, () => {
    it(`sets name of player 2 in the battle`, () => {
        const testBattle1 = new Battle()
        testBattle1.setup(["izzie", "rando"])
        assert.equal(testBattle1.otherPlayer().name, "rando")
    })
    it(`recognises a singleplayer game`, () => {
        const testBattle = new Battle();
        testBattle.setup(["izzie"])
        assert.equal(testBattle.computerPlayer().name, "computer")
        assert.equal(testBattle.otherPlayer().name, undefined)
    })
    it(`player 1 can lose`, () => {
        //arrange
        const testBattle = new Battle();
        testBattle.setup(["testPlayer1", "testPlayer2"])

        //act
        testBattle.otherPlayer().weapon = "paper"
        testBattle.currentPlayer().weapon = "rock"

        //assert
        assert.equal(testBattle.getResult(), "testPlayer2 wins!")
    })
});