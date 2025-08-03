var array = [1, 2, 3, 3, 4,];
var skdd = 2228;
function hello() {
    console.log("Hello, World!");
}
function addNumbers(a, b) {
    return a + b;
}
function findMax(arr) {
    return Math.max.apply(Math, arr);
}
function findMin(arr) {
    return Math.min.apply(Math, arr);
}
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
function sortArray(arr) {
    return arr.slice().sort(function (a, b) { return a - b; });
}
function sumArray(arr) {
    return arr.reduce(function (acc, curr) { return acc + curr; }, 0);
}
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
function reverseArray(arr) {
    return arr.slice().reverse();
}
function isArrayEmpty(arr) {
    return arr.length === 0;
}
function arrayContains(arr, value) {
    return arr.includes(value);
}
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
function mapArray(arr, callback) {
    return arr.map(callback);
}
console.log("function string" + " " + hello());
