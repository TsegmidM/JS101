/*
const func = (a) => {
    if(a % 2 == 0)
    console.log("even");
    else console.log("odd");
}
func(11);
*/
/*const timeConverter = (x,y,z) => {
    return x * 3600000 +  y * 60000 + z * 1000;
}
console.log(timeConverter(1,20,30));
*/
/*const century = (a) => {
    console.log(Math.ceil(a/100));
}
century(101);
century(4);
century(2022);
*/
/*
const func = (a) => {
    let sum = 0;
    if(a < 0)
    return 0;
    for(let i = 1; i < a; i++){
        if(i % 4 === 0 || i % 5 === 0)
        sum += i;
    }   
    return sum;
}
console.log(func(11));
console.log(func(-1));
*/
/*const squareChecker = (a) => {
    for(let i=1; i < a; i++){
        if(i*i === a)
        return true;
    }
        return false;
}
console.log(squareChecker(25));
console.log(squareChecker(20));
*/
/*const xoCOunter = (str) => {
    count1 = 0;
    count2 = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "x" || str[i] === "X")
        count1++;
        else count2++;
    }
    if(count1 === count2)
    return true
    else return false
}
console.log(xoCOunter("xoXo"));
console.log(xoCOunter("xoXooxoo"));
console.log(xoCOunter("oxOxXoXo"));
*/
/*const sumofPos = (str) => {
    let sum=0;
    for(let i = 0; i < str.length;i++){
        if(str[i] > 0)
        sum +=str[i];
    }
    return sum;
}
console.log(sumofPos([1,2,3.1,4,5]));
console.log(sumofPos([-2,3.2,4,1,-5,-2,83]));
*/

/*
const reversedStr = (str) => {
    let str2 = [];
    for(let i=str.length-1; i >= 0; i--){
        str2 += str[i];
    }
    console.log(str2);
}
reversedStr("Hello");
*/