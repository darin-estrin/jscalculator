$(document).ready(function() {
  // Create new instance of Calculator on page load
  var calculator = new Calculator();
  calculator.clear();

  $('.clear').on('click', calculator.clear);

  $('.number').on('click', function(e) {
    calculator.numberClicked(e.target.innerText);
  });

  $('.operator').on('click', function(e) {
    calculator.operatorClicked(e.target.innerText);
  });

  $('.invert').on('click', calculator.invertClicked);

});

// Calculator Object
function Calculator() {
  var numbers = [];

  /**
   * @method 
   * Clears calculator screen and removes all stored numbers and operators
   */
  this.clear = function() {
    numbers = [];
    $('.current-number').text('0');
    $('.staged-calculation').text('');
  }

  /**
   * 
   * @param {string} number 
   * number clicked on calculator in string format
   * @method 
   * adds the last number clicked to the end of the current number
   */
  this.numberClicked = function(number) {
    var currentIndex;
    numbers.length > 0 ? currentIndex = numbers.length : currentIndex = 0;
    if (numbers[currentIndex] === undefined && +number === 0) {
      return;
    } else if (!isNaN(numbers[currentIndex-1])) {
      numbers[currentIndex-1] += number;
      $('.current-number').text(numbers[currentIndex-1]);
    } else {
      numbers[currentIndex] = number;
      $('.current-number').text(numbers[currentIndex]);
    }
  }

  /**
   * 
   * @param {string} operator 
   * operator clicked on calculator
   * @method
   * creates a new number and adds the operator the end of the calculation
   */
  this.operatorClicked = function(operator) {
    var calculation = '';
    if (numbers.length === 0) {
      return;
    }

    switch (operator) {
      case '+':
      case '-':
      case '/':
      case '*':
        if (!isNaN(numbers[numbers.length-1])) {
          numbers.push(operator);
        } else {
          numbers[numbers.length-1] = operator;
        }
        break;
      default:
        return;
    }

    numbers.forEach(function(number) {
      calculation += (number + ' ');
    });
    $('.staged-calculation').text(calculation);
    $('.current-number').text('0');
  }

  /**
   * Turns a positive number into a negative number, and a negative number into a positive number
   */
  this.invertClicked = function() {
    if (isNaN(numbers[numbers.length-1])) {
      return;
    } else {
      var number = (+numbers[numbers.length-1] * -1).toString();
      numbers[numbers.length-1] = number;
      $('.current-number').text(number);
    }
  }

  /**
   * Calculates all current numbers and operators and then returns the square root of the number.
   */
  this.squareRootNumber = function() {

  }

  /**
   * Calculates all current numbers and operators and then returns the number.
   */
  this.calculate = function() {

  }

  /**
   * Exits function is the current number already has a decimal point. If number does have a decimal point, function will add a decimal point to the number.
   */
  this.decimalClicked = function() {

  }

}