"use strict";
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.
let magicians = ["Harry", "Hermione", "Ron"];
function copyArray(array) {
    return [...array];
}
function greatMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log('The Great ' + magicians[i]);
    }
}
const newMagicians = copyArray(magicians);
console.log(`The Great ${newMagicians}`);
console.log("This is my orignal array");
greatMagicians(magicians);
