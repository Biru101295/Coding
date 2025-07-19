console.log("Hello, World!");

const add=(a, b) => {
    return a + b;
};

console.log(add(2, 3));

// create a function that takes input from user and print natural between 1 to n

const printNaturalNumbers = (a, b) => {
    for(let i=a; i<=b; i++)
    {
        console.log(i);
    }
};

printNaturalNumbers(1, 17);

function message() {
  console.log("This is a function with a name");
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

message();