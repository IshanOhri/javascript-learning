document.write("<h1> Arrays in javascript </h1>");

// Javascript is an object oriented programming language.
// It does support inheritance, objects, classes and all OOPS features but implemented differently in JS.
// Objects bundles all properties/methods of an entity.

// How do we define objects in javascript?

var car = {
    car_brand : "Tesla", // property/attribute of car object
    car_model : "Model S", // property/attribute of car object
    price : 3500, // property/attribute of car object

    // We can also create functions inside the objects and they are called methods.
    // That's how we define function/method inside objects/classes in javascript.
    teslaAutoPilot : function(){  
        document.write("<h3> This car has Auto Pilot feature. </h3>");
    }
}

document.write("<h3>" + car.car_brand + "</h3>");
car.teslaAutoPilot();

// Better way of creating objects in javascript is using constructor function or function constructor.

function cars(cars_brand, cars_model, cars_price)
{
    this.cars_brand = cars_brand;
    this.cars_model = cars_model;
    this.cars_price = cars_price;

    this.teslaAutoPilot = function(){  
        document.write("<h3> This car has Auto Pilot feature. </h3>");
    }

}

var c1 = new cars("BMW", "X5", 95000);
c1.teslaAutoPilot();
document.write(c1.cars_brand);

var c2 = new cars("Audi", "Q5", 75000);
c2.teslaAutoPilot();
document.write(c2.cars_model);


// Booleans, Integers, Strings can be objects if defined with the new keyword.
// Dates, Maths are always objects in javascript.

var str1 = new String();
str1.length;

typeof(str1); // gives you the type of variable where it's object/data type.
var m2 = 2;
document.write(typeof(str1));
document.write(typeof(m2));

// How can we add/delete more properties/methods in objects later or outside the object defination.

cars.fuelType = "Electric"; // Will add fuelType property in cars object.

delete cars.price; // Will delete price property in cars object.

cars.price="45000"; 

document.write(typeof(cars.price))  ;