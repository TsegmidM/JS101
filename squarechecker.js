/*const squareChecker = (a) => {
    for(let i=1; i < a; i++){
        if(i*i === a)
        return true;
    }
        return false;
}
console.log(squareChecker(25));
console.log(squareChecker(20));
console.log(squareChecker(39));
*/
const squareChecker = (a) => {
    return Math.sqrt(a) % 1 === 0 ? true : false;
}
console.log(squareChecker(25));
console.log(squareChecker(20));
console.log(squareChecker(39));