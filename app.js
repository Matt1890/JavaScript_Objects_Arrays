console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        }

    return sum;
}

let total = arraySum(numbers);
console.log(total);



//function updateSum(num1) {
    
//    sum1 += num1;

//}

//let total1 = numbers.forEach(updateSum);
//console.log(total1);


function updateSum2(num2) {
   // let num2 = numbers;
    let sum2 = 0;

num2.forEach((num2) => {
    sum2 += num2;
    });

    return sum2;
}

let total2 = updateSum2(numbers);

console.log(total2);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = [4];

let favBook = {
    
    title: "Sphere",
    author: "Michael Crichton",
    pages: "371",
    readCount: "8"
};

book.info = function () {
    console.log(`${title} by ${author}, ${pages}, read  ${readCount} times.`);
  }
  
  book.info(favBook);

// Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");

// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");
