var fruit = ['apple', 'banana', 'cherry'];
var udatefruit = fruit.push("kiwy");
console.log(udatefruit); // Output: 4 updatefruit give length of udated fruit array
console.log(fruit); // Output: ['apple', 'banana', 'cherry', 'kiwy']
// const removedFruit = fruit.pop();
// console.log(removedFruit); // Output: 'kiwy' removedFruit give the last element of fruit array
var index = fruit.indexOf('banana');
fruit.splice(index, 1);
console.log(fruit); // Output: ['apple', 'cherry']
var newFruit = ['orange', 'grape'];
newFruit.reverse();
console.log(newFruit); // Output: ['grape', 'orange']
var combinedFruits = fruit.concat(newFruit);
console.log(combinedFruits); //
// Output: ['apple', 'cherry', 'grape', 'orange'] 
combinedFruits.splice(1, 2, 'grape', 'mango');
console.log(combinedFruits); // Output: ['apple', 'orange']
