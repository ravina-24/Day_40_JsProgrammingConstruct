"use strict";

 const ps = require("prompt-sync");
 const prompt = ps();

 let number = prompt("Enter number :");

 switch(number)
 {
     case '1' : 
     console.log("One");
     break;
     case '2' : 
     console.log("Two");
     break;
     case '3' : 
     console.log("Three");
     break;
     case '4':
     console.log("four");
     break;
     case '5':
     console.log("five");
     break;
     case '6':
     console.log("six");
     break;
     case '7':
     console.log("seven");
     break;
     case '8':
     console.log("eight");
     break;
     case '9':
     console.log("nine");
     break;
     case '0':
     console.log("zero");
     break;
    default :
    console.log("Invalid input");
    break;

 }