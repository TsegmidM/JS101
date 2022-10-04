/*
const loopingTriangle = () => {
    for(let i="#"; i.length < 8; i+="#"){
        console.log(i);
    }
}
loopingTriangle();
*/
/*const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0  && i % 5 == 0)
        console.log("FizzBuzz");
        else if(i % 3 == 0)
        console.log("Fizz");
        else if(i % 5 == 0)
        console.log("Buzz");
        else
        console.log(i);
    }
}
fizzBuzz();*/
/*
for(let n = 1; n <= 100; n++){
    let output = "";
    if(n % 3 == 0) output += "Fizz";
    if(n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
*/

//chessboard
/*const chessBoard = (size) => {
    let board = "";
    for(let i = 0; i < size; i++){
       for(let n = 0; n < size; n++){
        if((i + n) % 2 == 0){
            board += " ";
        }
        else {
            board += "#";
        }
       }
       board += "\n";
    }
    console.log(board);
}
chessBoard(8);
*/
//Finding minimun number using Math.min
/*const min = (a,b) => {
    return Math.min(a,b);
}
console.log(min(0,10));
console.log(min(0,-10));
*/
// Finding number if it is even using recursion!!!!
/*
const isEven = (n) => {
    if(n === 0) return true;
    else if(n === 1) return false;
    else if(n < 0) return isEven(-n);
    else return isEven(n-2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
*/

//Bean counting (write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is to be counted 
//(rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.)
/*
const countChar = (str, char) => {
    count = 0;
    for(let i= 0; i < str.length; i++){
        if(str[i] === char)
        count++;
    }
    return count;
}
const countBs = (str) => {
    return countChar(str, "B");
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));\
*/
//Rest parameter: useful for a function to accept any number of arguments
/*function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
  console.log(max(4, 1, 9, -2));
  */
/*function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
*/
//The sum of range
//2 argument avaad startaas endruu toog array bolgoj return hgd sum functionoor niilberiig n olood return hiine
//step oruulj ireed stepiin toogoor deesh doosh hevlene.
/*
const range = (start,end,step = start < end ? 1 : -1) => {
    numArr = [];
    if( step > 0){
        for(let i = start; i <= end; i += step) numArr.push(i);
    } else {
        for(let i = start; i >=end; i += step) numArr.push(i);
    }
    return numArr;
}
const sum = (numArr)=> {
  //  num = numArr;
    result = 0;
    for(let element of numArr){
        result += element;
    }
    return result;
}
console.log(range(1,10));
console.log((range(5,2,-1)));
console.log((range(1,10,2)));
console.log(sum(range(1,10)));
*/

//EXC: REVERSING ARRAY
/*
const reverseArray = (array) => {
    return array.reverse();
}
const reverseArrayInPlace = (array) => {
    for(let i=array.lenth-1; i >= 0; i--){
        array.push(i);
    }
    return array;
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1,2,3,4,5];
reverseArray(arrayValue);
console.log(arrayValue);
*/

//LIST
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20