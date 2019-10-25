var myForm = document.getElementById('form');
var input = document.getElementById('inp');
var result = document.getElementById('result');

myForm.addEventListener('submit', function(e){
  e.preventDefault();
  var userInput = input.value;
  (palindrome(userInput) == true) ? result.innerHTML = '<h2 style="color: green">Yes, it is a palindrome!</h2>': result.innerHTML = '<h2 style="color: red">No, it is not a palindrome!</h2>';
});

function palindrome(input) {
  if (input.replace(/[\W_]/g, '').toLowerCase() ===
             input.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')) {
    return true; 
  }
  return false;
} 
