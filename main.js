// 1-masala
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
function updateLight(current) {
    if (current === "green") {
        return "yellow";
    }
    else if (current === "yellow") {
        return "red";
    }
    else {
        return "green";
    }
}
// console.log(updateLight("green"));
// console.log(updateLight("yellow"));
// console.log(updateLight("red"));
// 2-masala
// This is a question from codingbat
// Given an integer n greater than or equal to 0, create and return an array with the following pattern: squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
function squareUp(n) {
    var arr = [];
    var count = 0;
    for (var i = n; i > 0; i--) {
        for (var j = 1; j < n + 1; j++) {
            if (j <= i) {
                arr[count++] = j;
            }
            else {
                arr[count++] = 0;
            }
        }
    }
    return arr.reverse();
}
// console.log(squareUp(3));
// 3-masala
var sequenceSum = function (begin, end, step) {
    var sum = 0;
    for (var i = begin; i < end + 1; i += step) {
        sum += i;
    }
    return sum;
};
// console.log(sequenceSum(2, 6, 2));
// 4-masala
function oddOrEven(array) {
    //enter code here
    var sum = array.reduce(function (sum, i) { return sum + i; }, 0);
    return sum % 2 === 0 ? "even" : "odd";
}
// console.log(oddOrEven([2]));
// console.log(oddOrEven([1]));
// 5-masala
function findSmallestInt(args) {
    var min = args[0];
    args.forEach(function (i) {
        if (min > i) {
            min = i;
        }
    });
    return min;
}
// console.log(findSmallestInt([78, 56, 232, 12, 8]));
// 6-masala
function getDivisorsCnt(n) {
    var count = 0;
    for (var i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += i * i === n ? 1 : 2;
        }
    }
    return count;
}
// console.log(getDivisorsCnt(30));
// 7-masala
function toCamelCase(str) {
    var camel = [];
    var index = 0;
    var newCamel = "";
    var arr = str.split("");
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i - 1] === "-" || arr[i - 1] === "_") {
            camel[index++] = str[i].toUpperCase();
        }
        else {
            camel[index++] = str[i];
        }
        if (camel[i] === "-" || camel[i] === "_") {
            continue;
        }
        else {
            newCamel += camel[i];
        }
    }
    return newCamel;
}
// console.log(toCamelCase("the_stealth_warrior"));
// 8-masala
function minMax(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var newArr = [min, max];
    return newArr;
}
// console.log(minMax([1, 3, 2, 5]));
// 9-masala
function generateShape(integer) {
    var rest = "";
    for (var i = 0; i < integer; i++) {
        var plus = "";
        i !== 0 ? (plus += "\n") : plus;
        for (var j = 0; j < integer; j++) {
            plus += "+";
        }
        rest += plus;
    }
    return rest;
}
// console.log(generateShape(8));
// 10-masala
function sumDigits(number) {
    return number
        .toString()
        .split("")
        .filter(function (i) { return Number(i); })
        .reduce(function (sum, i) { return sum + Number(i); }, 0);
}
// console.log(sumDigits(12));
