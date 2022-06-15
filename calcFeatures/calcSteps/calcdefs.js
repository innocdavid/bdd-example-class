const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Calculator = require('../../lib/calculator');

Given('the numbers {int} and {int}', function (x, y) {
  calculator = new Calculator(x, y);
});

When('they are added together', function () {
  calculator.add();
});

When('the latter is subtracted from the former', function () {
  calculator.subtract();
});

When('the two are multiplied together', function () {
  calculator.multiply();
});

When('the latter is divided by the former', function () {
  calculator.divide();
});

Then('should the result be {int}', function (expectedAnswer) {
  assert.equal(calculator.getResult(), expectedAnswer);
});
