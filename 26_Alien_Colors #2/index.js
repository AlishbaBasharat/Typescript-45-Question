"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alienColor = "green";
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the 
// alien.
if (alienColor === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alienColor = "yellow";
if (alienColor === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
