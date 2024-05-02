// Question 3: Why does the counter start at NaN?
let count = parseInt((document.getElementById('counter-value').innerText = 0));
// There was no value given to .innerText so I gave it a starting point of zero
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
incrementButton.addEventListener('click', function () {
  count++;
  document.getElementById('counter-value').innerText = count;
});
//#4 When the increment btn is clicked the counter goes up. When you are looking at it in inspect mode it will step through function and pause every time it is clicked. So I removed it.

// Question 5: Why does the decrement button not work?
decrementButton.addEventListener('click', function () {
  count--;
  document.getElementById('counter-value').innerText = count;
});
// #5 The id was spelled wrong so I added "er" to count.

// Question 6: Why does the reset function set the count to '0' as a string?
resetButton.addEventListener('click', function () {
  count = 0;
  document.getElementById('counter-value').innerText = count;
});
//#6 count is set as a string by being in quotation marks so I removed the "".

// Question 7: How can you monitor the value of count using breakpoints?
// #7 By setting breakpoints on event listeners

// Question 8: What is the scope of the count variable in DevTools?
// #8 The count variable is declared outside of a function making it a Global Scope. It can be accessed from anywhere in the JS program.

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// #9 The app.js file is loaded successfully due to the 200 displaying in the status column

// Question 10: Use the Console to track errors. Are there any errors being thrown?
// #10 No errors being thrown.
