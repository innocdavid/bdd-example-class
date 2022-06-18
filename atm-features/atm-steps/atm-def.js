const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

Given('that account has UGX {int}', function (accountBalance) {
  account = accountBalance
});

Given('transaction fees of UGX {int}', function (transactionFees) {
  transactionFee = transactionFees
});

Given('maintaining minimum balance of UGX {int}', function (minimumBalance) {
  minBalance = minimumBalance
});

When('I withdraw UGX {int}', function (withdrawAmount) {
  newBalance = account - minBalance - transactionFee - withdrawAmount
  aBalance = newBalance + minBalance
  balance = newBalance >= 0 ? aBalance : account - transactionFee
});

Then('Account balance is {int}', function (accountBalance) {
  assert.equal(balance, accountBalance)
});