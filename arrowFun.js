"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
var palindrome = function (str) {
    var orgiNum = str;
    var num = str.toString();
    console.log(num);
    var rev = num.split('').reverse().join('');
    console.log(rev);
    console.log(typeof rev);
    var revnum = parseInt(rev);
    console.log(revnum);
    console.log(typeof revnum);
    if (orgiNum === revnum) {
        console.log("".concat(orgiNum, " is a Palindrome Number"));
        return true;
    }
    else {
        console.log("".concat(orgiNum, " is not a Palindrome Number"));
        return false;
    }
};
exports.palindrome = palindrome;
console.log((0, exports.palindrome)(121));
