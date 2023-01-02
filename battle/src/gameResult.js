class GameResult {
    constructor(gameType) {
        this.gameType = gameType
        this.gameResult;
    }

    type5Result(currentPlayer, otherPlayerOrComputer) {
        const rules = {
            rock: ['scissors', "lizard"],
            paper: ['rock', "spock"],
            scissors: ['paper', "lizard"],
            spock: ['rock', "scissors"],
            lizard: ['paper', "spock"],
        };
        if (otherPlayerOrComputer.weapon === currentPlayer.weapon) {
            return `Draw!`;
        }
        return (rules[otherPlayerOrComputer.weapon].indexOf(currentPlayer.weapon) > -1) ? `${otherPlayerOrComputer.name} wins!` : `${currentPlayer.name} wins!`
    }


    type3Result(currentPlayer, otherPlayerOrComputer) {
        const rules = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };
        if (otherPlayerOrComputer.weapon === currentPlayer.weapon) {
            return `Draw!`;
        }
        return (rules[otherPlayerOrComputer.weapon] === currentPlayer.weapon) ? `${otherPlayerOrComputer.name} wins!` : `${currentPlayer.name} wins!`
    }




    getResult(currentPlayer, otherPlayerOrComputer) {
        return this.gameType == 5 ? this.type5Result(currentPlayer, otherPlayerOrComputer) : this.type3Result(currentPlayer, otherPlayerOrComputer);
    }

}
module.exports = GameResult