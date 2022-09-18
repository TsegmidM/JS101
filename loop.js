// printing numbers from 1 to 13
/*let i=1;
while(i<=13){
    console.log(i);
    i++;
}
//even numbers between 11 to 40
let k=11;
while(k<40){
    k++;
    console.log(k);
    k++;
}
for(int n=11; n <=40; n++){
    if(n % 2 == 0)
    console.log(n);
}
*/
//the sum of numbers from 3 to 22
/* 
let result = 0;
for(let i=3;i<=22;i++){
    result += i;
}
console.log(result);
*/
// sum of odd numbers between 10 and 20

/*let sum = 0;
for(let i=11;i<=20;i+=2){
    sum += i;  
}
console.log(sum); 
*/


// extracting out positive numbers from given array
/*const array = [2,20,4,5,-59,-2,3,-3,102];
for(let i=0;i<array.length;i++){
    if(array[i]>0)
    console.log(array[i]);
} */
/*let k=0;
while(k<array.length){   
    if(array[k]>0){
        console.log(array[k]);
    }
    k++;
} */

//function that takes string as a parameter
/*function countVowels(str = []){
    let vowelCount = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")
        vowelCount++;
    }
    console.log(`The "${str}" has ${vowelCount} vowels!`);
}
countVowels("Word");
*/
//PALINDROME
/*function palindromeChecker(str = []){
    let count = str.length;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[count-1]){
            count--;
            console.log(count);
        }
        else
        i = str.length;
    }
    if(count === 0)
    console.log(`${str} is a palindrome word!`);
    else
    console.log(`${str} is not a palindrome word!`);
}
palindromeChecker("madam");
*/
//findingTheLargest 
/*function checkNumbers(num1,num2,num3){
    if(typeof num1 !=  'number' || typeof num2 != 'number' || typeof num3 != 'number'){
        console.log("Some value is not a number type");
        return
    }
    if(num1 > num2 && num1 > num3)
    console.log(`${num1} is the largest number among ${num1}, ${num2} and ${num3}`);
    else if(num2 > num1 && num2 > num3)
    console.log(`${num2} is the largest number among ${num1}, ${num2} and ${num3}`);
    else 
    console.log(`${num3} is the largest number among ${num1}, ${num2} and ${num3}`);

}
checkNumbers(30,2,"-13");*/

/*function randomFunction(){
    randomFunction.n1 = 10;
    randomFunction.n2 = 21;
    randomFunction.n3 = 3;
    console.log(randomFunction.n1 * randomFunction.n2 * randomFunction.n3);
}
randomFunction();*/

/*let randomArray = ["A",1,false,"Baagii"];
randomArray = [];
//for(let i = randomArray.length; i >= 0; i--){
//randomArray.pop(i);
//console.log(i);
//}
console.log(randomArray);

const array = [2,20,4,5,-59,-2,3,-3,102];
for(let i=0;i<array.length;i++){
    if(array[i]>0)
    console.log(array[i]);
}*/

//let result = 1;
function firstFunction(num1){
    function secondFunction(num2){
        function thirdFunction(num3){
            result = num1 * num2 * num3;
}
    return thirdFunction;
}
return secondFunction;
}
firstFunction(10)(21)(3);
console.log(result);