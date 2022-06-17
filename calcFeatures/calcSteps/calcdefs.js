const assert = require('assert');
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const Calculator = require('../../lib/calculator');
const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');


const service = new chrome.ServiceBuilder('./chromedriver');
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

setDefaultTimeout (60000)

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

Given('I visit the homepage on {string}', {timeout: 50000}, async (url) => {
  await driver.get(url);
});

When('I include value1 of {int}', {timeout: 30000}, async (value1) => {
  await driver.findElement(By.name('a')).sendKeys(value1);
});

When('I include value2 of {int}', {timeout: 30000}, async (value2) => {
  await driver.findElement(By.name('c')).sendKeys(value2);
});

When('my operand is {string}', {timeout: 30000}, async (operand) => {
  await driver.findElement(By.name('b')).sendKeys(operand);
});

When('I submit', async () => {
  await driver.findElement(By.name('equals')).sendKeys('webdriver', Key.ENTER)
});

Then('the display should show {int}', async (answer) => {
  let result = await driver.findElement(By.name('display')).getAttribute('value')
  assert.equal(result, answer)
});