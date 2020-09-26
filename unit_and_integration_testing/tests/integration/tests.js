const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');

    display = element(by.css("#running_total"));
    num0 = element(by.css("#number0"));
    num1 = element(by.css("#number1"));
    num2 = element(by.css("#number2"));
    plus = element(by.css("#operator_add"));
    minus = element(by.css("#operator_subtract"));
    times = element(by.css("#operator_multiply"));
    divided_by = element(by.css("#operator_divide"));
    equals = element(by.css("#operator_equals"));
  });

  it("should update display when number button is pressed", function(){
    num1.click();
    expect(display.getAttribute("value")).to.eventually.equal("1");
  });

  it("should update display when arithmetic operation resolves", function(){
    num1.click();
    plus.click();
    num1.click();
    equals.click();

    expect(display.getAttribute("value")).to.eventually.equal("2");
  });

  it("should be able to chain operations together", function(){
    num1.click();
    plus.click();
    num1.click();
    plus.click();
    num1.click();
    equals.click();

    expect(display.getAttribute("value")).to.eventually.equal("3");
  });

  it("should be able to output negative numbers", function(){
    num1.click();
    minus.click();
    num2.click();;
    equals.click();

    expect(display.getAttribute("value")).to.eventually.equal("-1");
  });

  it("should be able to output decimal numbers", function(){
    num1.click();
    divided_by.click();
    num2.click();;
    equals.click();

    expect(display.getAttribute("value")).to.eventually.equal("0.5");
  });

  it("should be able to output large numbers", function(){
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    num1.click();
    times.click();
    num2.click();;
    equals.click();

    expect(display.getAttribute("value")).to.eventually.equal("2222222222");
  });

  it("should output NaN when dividing by zero", function(){
    num1.click();
    divided_by.click();
    num0.click();
    equals.click();

    expect(display.getAttribute("value")).to.eventually.equal("NaN");
  });

});
