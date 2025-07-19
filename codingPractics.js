"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = message;
console.log("Hello, World!");
function message() {
    console.log("This is a function with a name");
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
message();
console.log(primeNumber(8));
function primeNumber(a) {
    var b = a;
    var rev = 0, i = 2, tem = a;
    for (i = 2; i < b; i++) {
        if (tem % i == 0) {
            break;
        }
    }
    if (i == b)
        console.log("Prime Number");
    else
        console.log("Not a Prime Number");
}
;
