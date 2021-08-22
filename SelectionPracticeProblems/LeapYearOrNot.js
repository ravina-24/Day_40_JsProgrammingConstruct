
"use strict";

const ps = require("prompt-sync");
const prompt = ps();


let year =prompt("Enter Year  :");

if (( year % 100 == 0 ) && ( year % 400 == 0) && ( year % 4 == 0 ))
{
    console.log("Entered year is a LEAP YEAR");
}
else 
{
     console.log("Entered year is not a LEAP YEAR");
}