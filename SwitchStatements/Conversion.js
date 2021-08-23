"use strict";

 const ps = require("prompt-sync");
 const prompt = ps();

 let TakeLength = prompt("Enter Length :");

 let choice =prompt(1. +"Feet to inch " + 
                    2. +"Inch to feet " +
                    3. +"Feet to meter" +
                    4. +"meter to feet  =  " );

 switch (choice)
 {
    case '1' :
        console.log("Feet to inch = " +TakeLength*12);
        break;
    case '2' :
        console.log("Inch to feet = " +TakeLength/12);
        break;
    case '3' :
        console.log("Feet to meter = " +TakeLength/3.281);
        break;
    case '4':
        console.log("Meter to feet = " +TakeLength*3.281);
        break;
    default :
        console.log("Wrong choice ");
        break;           

 }