
const array =[1,2,3,3,4,];

const skdd = 2228;

function hello() {
    console.log("Hello, World!");
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

function findMax(arr: number[]): number {
    return Math.max(...arr);
}

function findMin(arr: number[]): number {
    return Math.min(...arr);
}

function removeDuplicates(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

function sortArray(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}

function sumArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}



function averageArray(arr: number[]): number {
    return sumArray(arr) / arr.length;
}

function reverseArray(arr: number[]): number[] {
    return arr.slice().reverse();
}

function isArrayEmpty(arr: any[]): boolean {
    return arr.length === 0;
}

function arrayContains(arr: any[], value: any): boolean {
    return arr.includes(value);
}

function filterArray(arr: any[], predicate: (value: any) => boolean): any[] {
    return arr.filter(predicate);
}


function mapArray<T, U>(arr: T[], callback: (value: T) => U): U[] {
    return arr.map(callback);
}


console.log("function string" + " " + hello());