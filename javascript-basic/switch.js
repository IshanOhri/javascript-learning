document.write("<h1> Find day of week by input number 1-7. </h1>");
var day = 1;
// We can pass int, strings, booleans, any calculations and even concatinate in case.

switch(day)
{
    case 1:
        document.write("<h3> Sunday </h3>");
        break;
    case 2:
        document.write("<h3> Monday </h3>");
        break;
    case 3:
        document.write("<h3> Tuesday </h3>");
        break;
    case 4:
        document.write("<h3> Wednesday </h3>");
        break;
    case 5:
        document.write("<h3> Thrusday </h3>");
        break;
    case 6:
        document.write("<h3> Friday </h3>");
        break;
    case 7:
        document.write("<h3> Saturday </h3>");
        break;
    default:
        document.write("<h3> Wrong Input! </h3>");
}