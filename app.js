console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        return sum;
        }
    console.log(sum);
}

arraySum(numbers);



function updateSum(num1) {
    let sum1 = 0;
    sum1 += num1;
    console.log(sum1);
}

updateSum(numbers);




//numbers.forEach(updateSum2)
//numbers.forEach((num2) => {
//    sum2 += num2;
//    return sum2;
//    });

//updateSum2(numbers);

//console.log(sum2);



//function updateSum2(num) {
//    return num.forEach((num) => {updateSum(num)});
//};


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");

// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");
