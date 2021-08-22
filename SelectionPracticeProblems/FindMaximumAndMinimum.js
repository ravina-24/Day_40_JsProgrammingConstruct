
let num1 = Math.floor(Math.random()*900)+99;
let num2 = Math.floor(Math.random()*900)+99;
let num3 = Math.floor(Math.random()*900)+99;
let num4 = Math.floor(Math.random()*900)+99;
let num5 = Math.floor(Math.random()*900)+99;


//finding maximum
if (num1>num2 && num1 >num3 && num1>num4 && num1>num5)
{
    console.log("Maximum =" +num1);
}
else if (num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log("Maximum =" +num2);
}
else if (num3>num1 && num3 >num2 && num3 >num4 && num3>num5)
{
    console.log("Maximum ="  +num3);
}
else if (num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log("Maximum ="  +num4);
}
else 
{
    console.log("Maximum ="  +num5);
}


//finding minimum
if (num1<num2 && num1<num3 && num1<num4 && num1<num5)
{
    console.log("Minimum =" +num1);
}
else if (num2<num1 && num2<num3 && num2<num4 && num2<num5)
{
    console.log("Minimum =" +num2);
}
else if (num3<num1 && num3<num2 && num3<num3 && num3<num5)
{
    console.log("Minimum =" +num3);
}
else if (num4<num1 && num4<num2 && num4<num3 && num4<num4)
{
    console.log("Minimum =" +num4);
}
else 
{
    console.log("Minimum =" +num5);
}
