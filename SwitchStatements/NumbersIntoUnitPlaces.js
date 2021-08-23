"use strict";

 const ps = require("prompt-sync");
 const prompt = ps();

 let number = prompt("Enter Number :");

  
switch (true)
{
    case (number>=1 && number <=9) :
        console.log("Unit");
        break;
    case (number>=10 && number <=99):
        console.log("Ten");
        break;
    case (number>=100 && number <=999):
        console.log("Hundred");
        break;
    case (number>=1000 && number <=9999) :
        console.log("Thousand");
        break;
    case (number>=10000 && number <=99999):
        console.log("Ten Thousand");
        break;
    default :
        console.log("Invalid");
        break;          
}
        