var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  it("can add two numbers", function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(5, calculator.runningTotal);
  });

  it("can subtract one number from another", function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(3, calculator.runningTotal);
  });

  it("can multiply two numbers", function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(15, calculator.runningTotal);
  });

  it("can divide one number by another", function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal);
  });

  it("can concatenate multiple number clicks", function(){
    calculator.numberClick(1);
    calculator.numberClick(1);
    assert.strictEqual(11, calculator.runningTotal);
  });

  it("can chain operations together", function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.strictEqual(3, calculator.previousTotal);
  });

  it("can clear running total", function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.strictEqual(2, calculator.previousTotal);
  });

});
