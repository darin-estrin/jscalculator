$(document).ready(function() {
  // Create new instance of Calculator on page load
  var calculator = new Calculator();
  calculator.clear();

  $('.clear').on('click', calculator.clear);

});

function Calculator() {
  var numbers = ['0'];

  /**
   * @method 
   * Clears calculator screen and removes all stored numbers and operators
   */
  this.clear = function() {
    numbers = ['0'];
    $('.current-number').text('0');
    $('.staged-calculation').text('');
  }

}