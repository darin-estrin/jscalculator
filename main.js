$(document).ready(function() {
  // Create new instance of Calculator on page load
  var calculator = new Calculator();
  calculator.clear();

  $('.clear').on('click', calculator.clear);

  $('.number').on('click', function(e) {
    calculator.storeNumber(e.target.innerText);
  });

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
  this.storeNumber = function(number) {
    var currentIndex;
    numbers.length > 0 ? currentIndex = numbers.length-1 : 0;
    if (numbers[currentIndex] === undefined && +number === 0) {
      return;
    } else if (numbers[currentIndex] === undefined) {
      numbers[currentIndex] = number;
    } else {
      numbers[currentIndex] += number;
    }

    $('.current-number').text(numbers[currentIndex]);
  }

}