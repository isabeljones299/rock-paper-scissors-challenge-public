const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const battle = req.app.locals.battle;
    res.render('result', {
        result: req.app.locals.battle.getResult(),
    });
})

module.exports = router;

