/*const numbers = [10, -1, -4, 8, -29, 21]
const sortedAscending = numbers.sort((num1, num2) => {
    console.log(num1, num2);
    if(num1 > num2) return 1;
    else {return -1;}
   // console.log(sortedAscending);
})
console.log(sortedAscending);

// -1 10 -4 8 -29 21
*/
/*
const person = {name:"John", occupation: "Radio host" }
//console.log(person);
let j = JSON.stringify(person);
console.log(j, typeof j);
console.log(JSON.parse(j), typeof JSON.parse(j));
*/
/*
const unionArray = (a1, a2) => {
    const unionArr = [];
    a1.forEach((n) => !unionArr.includes(n) && unionArr.push(n));
    a2.forEach((n) => !unionArr.includes(n) && unionArr.push(n));
    
    return unionArr;
}
console.log(unionArray([1,2,3,1], [2,1,4,3]));
*/
/*const unionArray = (a1, a2) => {
    const unionArr = [];
    const union2 = [];
    console.log(a1,a2)
    a1.forEach((n) => !unionArr.includes(n) && unionArr.push(n));
    a2.forEach((n) => !unionArr.includes(n) && union2.push(n));
    
    return union2;
}
console.log(unionArray([1,2,3,4], [2,3,5]));
*/
/*const alphabets = [
    {letter: 'a', index: 1},
    {letter: 'm', index: 13},
    {letter: 'e', index: 5},
    {letter: 's', index: 19},
    {letter: 'z', index: 26},
    {letter: 't', index: 20},
    {letter: 'o', index: 15},
    {letter: 'h', index: 8},
]   
const sortedAlphabets = (arr) => {
   // console.log(arr);
    const sorted = arr.sort((obj1,obj2) => {
        if(obj1.index > obj2.index)
        return 1;
        else return -1;
    })
    console.log(sorted);
}
sortedAlphabets(alphabets);
*/
const strings = ['hey','hi','test','testing'];
/*const removingValue = (value1) => {
//const fiteredArray = strings.filter()
console.log(value1);

const filterr = strings.filter(v => v !== value1);
console.log(filterr);
}
removingValue("test");
*/
const removingValue = (value1) => {
    
    const filtered = strings.filter((v => v !== value1))
        
        console.log(filtered);
    }
removingValue("test");
