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

//5. URLify a string
function URLify(str) {
  const URL = str.split(' ').join('%20');
  return URL;
}
//console.log(URLify('www.thinkful.com /tauh ida parv een'));

//6. Filtering an array
function filterArry(arry, filter) {
  let result = [];
  for(let i = 0; i < arry.length; i++) {
    if(arry[i] >= filter) result.push(arry[i]);
  }
  return result;
}
//let testArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(filterArry(testArry, 5));

//7. Max sum in the array
function maxSum(arry) {
  let result = 0;
  for(let i = 0; i < arry.length; i++) {
    result = result + arry[i];    
  }
  return result;
}
//let testArry = [4, 6, -3, 5, -2, 1];
//console.log(maxSum(testArry));

//8. Merge arrays
function mergeArrays(arry1, arry2){
  let result = arry1.concat(arry2);
  return result.sort(function(a, b){return a-b;});
}
//let testArry1 = [1, 3, 6, 8, 11];
//let testArry2 = [2, 3, 5, 8, 9, 10];
//console.log(mergeArrays(testArry1, testArry2));

//9. Remove characters
function removeCharacters(str, omit) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(!omit.includes(str[i])) result += str[i];
  }
  return result;
}
//let testStr = 'Here are some words';
//let testOmit = 'aeiou';
//console.log(removeCharacters(testStr, testOmit));

//10. Products
function multiplyArray(arry) {
  let prod = arry.reduce((prod, num) => prod *= num, 1);
  const result = arry.map(num => prod / num);
  return result;
}
//let testArry = [1, 3, 9, 4];
//console.log(multiplyArray(testArry));

//11. 2D array
function twoDArry(arry) {
  let row = [];
  let column = [];
  for(let i = 0; i < arry.length; i ++) {
    if(arry[i].includes(0)) row.push(i);
  }
  for(let num in row) {
    for(let j = 0; j < arry[num].length; j++) {
      if(arry[num][j] === 0 && !column.includes(0)) {
        column.push(j);
      }
    }
  }
  for (let y = 0; y < arry.length; y++) {
    for (let x = 0; x < arry[y].length; x++) {
      if (column.includes(x) || row.includes(y)) {
        arry[y][x] = 0;
      }
    }
  }
  return arry;
}
//let testArry = [
//  [1,0,1,1,0],
//  [0,1,1,1,0],
//  [1,1,1,1,1],
//  [1,0,1,1,1],
//  [1,1,1,1,1]
//];
//console.log(twoDArry(testArry));

//12. String rotation
function rotateString(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    str2 = str2.slice(1) + str2[0];
    if (str1 === str2) {
      return true;
    } 
  }
  return false;
}
let testStr1 = 'amazon';
let testStr2 = 'azonma';
let testStr3 = 'azonam';
console.log(rotateString(testStr1, testStr2));
console.log(rotateString(testStr1, testStr3));