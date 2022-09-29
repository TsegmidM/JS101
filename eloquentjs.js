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