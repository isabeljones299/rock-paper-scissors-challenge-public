const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');
const result = require('./routes/result.js');
const gameMulti = require('./routes/gameMulti.js');
const turnMulti = require('./routes/turnMulti.js')

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);
app.use('/result', result);
app.use('/gameMulti', gameMulti);
app.use('/turnMulti', turnMulti);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
