
const { assert } = require('chai');
const Computer = require('../src/computer');


describe(`Computer has desired functionality`, () => {
    it(`computer weapon has an initial value of none `, () => {
        //arrange
        const testComputer = new Computer;
        //act
        //assert
        assert.equal(testComputer.weapon, "none")
    })
    it(`set weapon can set any of rock paper or scissors`, () => {
        //arrange
        const testComputer = new Computer;
        //act
        testComputer.setWeaponChoice()
        //assert
        assert.notEqual(testComputer.weapon, "none")
    })
    it(`set weapon can set any of rock paper scissors lizard or spock`, () => {
        //arrange
        const testComputer = new Computer;
        //act
        testComputer.setWeaponChoice(5)
        //assert
        assert.notEqual(testComputer.weapon, "none")
    })

})