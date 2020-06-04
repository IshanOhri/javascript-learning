
// JS is dynamically typed which means we can change the data type of variable.
//JS is loosely typed which means we don't have to define data types like int, string while declaring variables.

var num = 16; // Number 
var name = "Ishan"; // String
var flag = false; // bollean


// Scope of variable: Global or Local
// Above 3 are global variables and variables defined inside functions are called local variables.
// Scope of variable is limited to that function only.

// We can also define variable without "var" keyword. For example:
num1 = 10;
name1 = "John"
// If we define variable inside the function without "var" keyword, scope of that variable will be Global.
function add(){
    num2 = 10; // Global variable but they are not directly accessible.
}

//alert(num);
document.write(num);