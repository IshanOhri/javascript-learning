document.write("<h1> Arrays in javascript </h1>");

var cars = ["Audi", "BMW", "Volvo"]; // Recommended Way and easiest of all.

// Another ways of creating array

var arr1 = new Array("Mango", "Apple", "Pear");

var arr2;
arr2 = new Array("Mango", "Apple", "Pear");
// Above two ways are not recommended in Javascript

for(var i=0; i<3; i++)
{
    document.write("<h3>" + cars[i] + "</h3>");
}

// Arrays in javascript are dynamic in nature. We can expand and shrink at run time. Also can add differnet data types.

// Arrays are objects in JS. There are predefined methods/properties already created in JS.

cars.push(2);

document.write("<h3>" + cars.length + "</h3>");

for(var i=0; i<cars.length; i++)
{
    document.write("<h3>" + cars[i] + "</h3>");
}