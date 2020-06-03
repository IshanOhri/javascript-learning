document.write("<h1> If-else example </h1>");
var num = 7;
// document.write("<h2> Number = </h2>", num);


document.write("<h2> 1. Find whether number is ODD or EVEN. </h2>");
if(num%2 == 0)
{
    document.write("<h3> Number is EVEN </h3>");
}
else
{
    document.write("<h3> Number is ODD </h3>");
}


document.write("<h2> 2. Find if a number is positive, negative or zero. </h2>");
if(num<0)
{
    document.write("<h3> Number is negative </h3>");
}
else if(num>0)
{
    document.write("<h3> Number is positive </h3>");
}
else
{
    document.write("<h3> Number is zero </h3>");
}

document.write("<h2> 3. Find if a number is positive and EVEN. </h2>");

if(num>0 && num%2== 0)
{
    document.write("<h3> Number is positive and EVEN </h3>");
}
else
{
    document.write("<h3> Doesn't meet the criteria </h3>");
}