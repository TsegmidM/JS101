/*const students = ["A", "B"];

console.log(typeof students);

students[0] = "C";

console.log(students);
console.log(students[students.length - 1]);
//console.log(students[0].length);
console.log(students.indexOf("B"));
*/

const randomArray = ["A", 20, "B", 23, "C"];

console.log(randomArray);
randomArray.pop();
console.log(randomArray);
randomArray.shift();
console.log(randomArray);
randomArray.unshift(["A1", "A2"]);
console.log(randomArray);

randomArray.push(true);
console.log(randomArray);

randomArray[3] = "U";
console.log(randomArray);   