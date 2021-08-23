"use strict";

 const ps = require("prompt-sync");
 const prompt = ps();

 let Read = prompt("Enter number :");

 for (let i = 2; i<=Read/2 ; i++)
 {
     
    let output = (Read%i)
    if (output == 0)
    {
        console.log("Prime Number");
        break;
    }
    else 
    {
        console.log("Not prime number");
        break;
    }

 }