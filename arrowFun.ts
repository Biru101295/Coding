
export const palindrome = (str: number): boolean => {
    const orgiNum= str;
    const num= str.toString();
    console.log(num);
    const rev=num.split('').reverse().join('');
    console.log(rev);
    console.log(typeof rev);
    const revnum = parseInt(rev);
    console.log(revnum);
    console.log(typeof revnum);
    if (orgiNum === revnum) {
        console.log(`${orgiNum} is a Palindrome Number`);
        return true;
    } else {
        console.log(`${orgiNum} is not a Palindrome Number`);
        return false;
    }
}

console.log(palindrome(121));
