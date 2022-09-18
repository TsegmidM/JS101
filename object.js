/*const person = {};

person.firstName = "Ziggy";

console.log(person);
console.log(person.firstName);
console.log(typeof person);
person['lastName'] = "A";

delete person.lastName;
*/

const person = {};

person.firstName = "Ziggy";
person.lastName = "Mid";
person['occupation'] = "Student";

console.log(person);

person.hobby = "Movie";
console.log(person);

delete person.occupation;
console.log(person);