require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  let result = 0;
  let value1 = Number(req.body.a);
  let value2 = Number(req.body.c);
  let operand = String(req.body.b);

  if (operand === 'add') {
    result = value1 + value2;
  } else if (operand === 'sub') {
    result = value1 - value2;
  } else if (operand === 'mul') {
    result = value1 * value2;
  } else if (operand === 'div') {
    result = value1 / value2;
  }

  res.render('index', { value1: value1, operand: operand, value2: value2, result: result });
});

// Error Handler
app.get('*', (req, res) => {
  res.status(404).send('<b>404.</b> Error: Page Not Found!');
});

// Listener
app.listen(port, (err) => {
  if (err) console['log'](err);
  console['log'](`Server is running on port: ${port}`);
});
