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
const chessBoard = (size) => {
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