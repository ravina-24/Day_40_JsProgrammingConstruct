"use strict";

 const ps = require("prompt-sync");
 const prompt = ps();

 let day = prompt("Enter day  :");
 let month = prompt("Enter month  :");

 if ((day<=20 && month<=6) && (day>=20 && month>=3) && (day<=31))
{
    console.log("True");
}
else
{
    console.log("False");
}


 