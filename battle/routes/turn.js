const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
  const battle = req.app.locals.battle;
  let weapon = req.body.choice
  battle.playerTurn(weapon);
  battle.computerTurn();

  res.render('turn', {
    currentPlayer: battle.currentPlayer(),
    weapon: weapon,
    computerWeapon: battle.computerPlayer().weapon,

  });
})


module.exports = router;
