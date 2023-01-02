const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');



router.post('/', (req, res) => {
    const battle = new Battle();
    // console.log(req.body)
    let gametype = req.body.gametype ? req.body.gametype : 3
    battle.setup([req.body.player1, req.body.player2], gametype);
    req.app.locals.battle = battle;
    res.redirect('/gameMulti');
})

router.get('/', (req, res) => {

    res.render('gameMulti', {
        currentPlayer: req.app.locals.battle.currentPlayer().name
    });
})

module.exports = router;