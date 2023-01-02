const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const battle = req.app.locals.battle;
    let weapon = req.body.choice;
    battle.playerTurn(weapon);

    if (battle.otherPlayer().weapon == "none") {
        battle.switch()

        res.render('gameMulti', {
            currentPlayer: battle.currentPlayer().name,
            otherPlayer: battle.otherPlayer().name
        });

    } else {
        battle.switch()

        res.render('turnMulti', {
            otherPlayerWeapon: battle.otherPlayer().weapon,
            currentPlayerWeapon: battle.currentPlayer().weapon,
            otherPlayerName: battle.otherPlayer().name,
            currentPlayerName: battle.currentPlayer().name
        });
    }
})
module.exports = router;