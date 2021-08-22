"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let a = prompt("Enter a  :");
let b = prompt("Enter b  :");
let c = prompt("Enter c  :");

let operation1 = a+b*c;
let operation2 = c+a/b;
let operation3 = a%b+c;
let operation4 = a*b+c;

if (operation1>operation2)
{
    console.log("Maximum " +operation1);
    console.log("Minimum  :" +operation2);
}
else if (operation1>operation3)
{
    console.log("Maximum " +operation1);
    console.log("Minimum  :" +operation3);
}
else if (operation1>operation4)
{
    console.log("Maximum " +operation1);
    console.log("Minimum  :" +operation4);
}
else if (operation2>operation1)
{
    console.log("Maximum " +operation2);
    console.log("Minimum  :" +operation1);
}
else if (operation2>operation3)
{
    console.log("Maximum " +operation2);
    console.log("Minimum  :" +operation3);
}
else if (operation2>operation4)
{
    console.log("Maximum " +operation2);
    console.log("Minimum  :" +operation4);
}
else if (operation3>operation1)
{
    console.log("Maximum " +operation3);
    console.log("Minimum  :" +operation1);
}
else if (operation3>operation2)
{
    console.log("Maximum " +operation3);
    console.log("Minimum  :" +operation2);
}
else if (operation3>operation4)
{
    console.log("Maximum " +operation3);
    console.log("Minimum  :" +operation4);
}
else if (operation4>operation1)
{
    console.log("Maximum " +operation4);
    console.log("Minimum  :" +operation1);
}
else if (operation4>operation2)
{
    console.log("Maximum " +operation4);
    console.log("Minimum  :" +operation2);
}
else if (operation4>operation3)
{
    console.log("Maximum " +operation4);
    console.log("Minimum  :" +operation3);
}