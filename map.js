// Learn By Implementation
// JS map Implementation
// Author: Devv_Li
// Twitter: @Devv_Li
// Date: feb/3/2020

// Create array method Map that takes in a callback
Array.prototype.Map = function (callback) {
  // Create an empty array to hold modified value
  arr = [];

  // Create a for loop that iterates through the array
  for (var i = 0; i < this.length; i++)
    // Calls the callback function with the following value as parameter
    // 1: The array
    // 2: The array index
    // 3: The whole array
    // After which it waits for what the callback returns and then pushes it to the emty array we created earlier
    arr.push(callback(this[i], i, this));

  // @ the end of the loop the map functiion returns the array
  return arr;
};

// Foe the test we use the map to square all the numbers in the array (arr)
var arr = [1,2,3,4,5,6,7,8,9,10];

var sqr = arr.Map(function (n) {
        return n * n;
});

console.log(sqr);
