"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalNumbers;
    if (num === 1) {
        ordinalNumbers = "st";
    }
    else if (num === 2) {
        ordinalNumbers = "nd";
    }
    else if (num === 3) {
        ordinalNumbers = "rd";
    }
    else {
        ordinalNumbers = "th";
    }
    ;
    console.log(`${num}${ordinalNumbers} `);
}
