const { assert } = require('chai');
const Player = require('../src/player');


describe(`Player class has desired functionality`, () => {
    it(`player weapon has an initial value of none `, () => {
        //arrange
        const testPlayer = new Player;
        //act
        //assert
        assert.equal(testPlayer.weapon, "none")
    })

    it(`set weapon can set any of rock paper or scissors`, () => {
        //arrange
        const testPlayer = new Player;
        //act
        testPlayer.setWeaponChoice("rock")
        //assert
        assert.equal(testPlayer.weapon, "rock")
    })

})