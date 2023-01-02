const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');


router.post('/', (req, res) => {
  const battle = new Battle();

  let gametype = req.body.gametype ? req.body.gametype : 3

  battle.setup([req.body.player1], gametype);
  req.app.locals.battle = battle;
  res.redirect('/game');
})

router.get('/', (req, res) => {

  res.render('game', {
    name: req.app.locals.battle.currentPlayer().name,
  });
})

module.exports = router;
