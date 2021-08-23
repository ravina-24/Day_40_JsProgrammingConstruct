"use strict";

 const ps = require("prompt-sync");
 const prompt = ps();

 let number = prompt("Enter Number :");


 for (let i = 1 ; i<=number ; i++)
 {
     let fact=1;
     var factorial = fact*i;
     console.log("Factorial  =" +factorial);
 }

 