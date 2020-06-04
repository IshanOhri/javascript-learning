document.write("<h1> Functions in javascript </h1>");

// A function is a set of statement that performs some task.
// A Javascript function is a block of code designed to perform a particular task.
// A Javascript function is executed when someone invokes(calls) it.
// functions in javascript are created using keyword "function"

// function declaration
function addTwoNumber(a, b)
{
    var total = a+b;
    document.write("<h3>" + total + "</h3>");
}
// function calling
addTwoNumber(3,4);
addTwoNumber("My"," Name");
addTwoNumber(3, " Name");



function multiplyNumbers(a, b)
{
    var total = a * b;
    return total;
}
var result = multiplyNumbers(6, 7);
document.write("<h3> Result is " + result + "</h3>");