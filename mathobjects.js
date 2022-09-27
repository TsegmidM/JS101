/*const pickingStudent = () => {
    const students = ["Mandahaa","Anar","Huluguu","Dee","Ziggy","Tsatsa","Jaagii","Muugii","Zoe",
    "MEG","Jamia"];
    let i = Math.floor(Math.random() * 11);

    //console.log(i);
    console.log(students[i]);

}
pickingStudent();
*/

/*const binToDec = (binNum = []) => {
    let power=0;
    let sum=0;
    let total=0;
    for(let i = binNum.length-1; i >= 0; i--){
       sum = binNum[i] * (2 ** power);
   //    console.log(sum);
       power++;
       total += sum;
       //console.log(sum);
    }
    
    console.log(total);
}
binToDec((11011011).toString());
*/

/*
const nearestdivFive = (num) => {
    console.log(Math.round(num/5)*5);
}
nearestdivFive(11);
nearestdivFive(14);
nearestdivFive(27.5);
*/

/*const greatestCommonDivisor = (num1,num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0){
        num1 = Math.abs(parseInt(num1));
        num2 = Math.abs(parseInt(num2));
    }
    let rmdr;
    while( num2 > 0){
        rmdr = num1 % num2; 
        num1 = num2;
        num2 = rmdr;
    }
    console.log(num1);
}
greatestCommonDivisor(-15,12);
greatestCommonDivisor(20,"19");
greatestCommonDivisor(15,20);
//greatestCommonDivisor(555,888);
*/

/*const gcd = (n1,n2) => {
    if(n1 == 0)
    return n2;
    return gcd(n2 % n1, n1);
}

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
*/
/*const gcd = (n1,n2) => {
    if(n1 == 0)
    return n2;
    return gcd(n2 % n1, n1);
}
const lcm = (a,b) => {
    console.log( (a * b) / gcd(a,b));
}
lcm(20,30);
lcm(6,4);
*/