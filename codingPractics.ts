console.log("Hello, World!");

export function message(): void {
  console.log("This is a function with a name");
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

message();


console.log(primeNumber(8));

export function primeNumber(a: number): void {
  const b = a;
  let rev = 0,
    i = 2,
    tem = a;
  for (i = 2; i < b; i++) {
    if (tem % i == 0) {
      break;
    }
  }
  if (i == b) console.log("Prime Number");
  else console.log("Not a Prime Number");
};
