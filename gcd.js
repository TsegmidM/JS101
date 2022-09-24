//finding Greatestt Common Divisor
const gcd = (num1,num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0){
        num1 = Math.abs(parseInt(num1));
        num2 = Math.abs(parseInt(num2));
    }
    if(num1 == 0)
    return num2;
    return gcd(num2 % num1, num1);
}
console.log(gcd(-15,12));
console.log(gcd(20,"19"));
console.log(gcd(15,20));
console.log(gcd(555,888));
console.log("^^^ finding the GCD of 2 integers");
// Extra 1: finding the GCD of more than 2 ingeters
const findGCD = (arr) => {
    let result = arr[0];
    for(let i = 1; i < n; i++){
        result = gcd(arr[i], result);
        if(result == 1)
        {
            return 1;
        }
    }
    return result;   
}
let arr = [10,20,5,20];
let n = arr.length;
console.log(findGCD([10,20,5,10],n));
console.log(findGCD([6,2,4,8],n));
console.log("^^^ finding the GCD of MORE than 2 integers");
//Extra 2 : finding the Least Common Divisor
const lcm = (a,b) => {
    console.log( (a * b) / gcd(a,b));
}
lcm(20,30);
lcm(6,4);
console.log("^^^ finding the LCD");