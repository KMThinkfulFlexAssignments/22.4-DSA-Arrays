'use strict';

let Array = require('./array');

//2. Explore the push() method
function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  //arr.push(3);
  //arr.push(5-10) from question 2
  //arr.push(5);
  //arr.push(15);
  //arr.push(19);
  //arr.push(45);
  //arr.push(10);
  //arr.pop()s from question 3
  //arr.pop();
  //arr.pop();
  //arr.pop();
  //
  arr.push('tauhida');

  console.log(arr);

  console.log(arr.get(0));
}

//main();
/*Answer: The length is 1, _capacity is 3 and ptr is 0 after
pushing the first item to the array.  After adding the new
set of items the length becomes 6, the _capacity becomes 12
and the ptr becomes 3.  The length becomes 6 as it is incrimented
once each time an item is pushed into the array.  The capacity
was set to 3 after the first item was added, however when the
array grows as more items are added to it _resize gets called
and increases the capacity.  
*/

//3. Exploring the pop() method
/*Answer: After the 3 pops are called, the length becomes 3,
the _capacity and ptr remain 12 and 3 respectively.  This
occurs because pop() is removing items from the array.
*/

//4. Understanding more about how arrays work
/*Answer: The first item in the array is 3.  When arr.push('tauhida')
is called the string is inserted into the array but when the
value at its index is called the result is NaN.  The _resize
function exists to increase the allocated memory should the
array grow beyond its initial limits.
*/