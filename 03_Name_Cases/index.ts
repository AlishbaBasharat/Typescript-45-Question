let personName = "Alishba Basharat";
//printing a person name in lowercase
console.log("Lowercase:", personName.toLowerCase());
//Storing a person name in uppercase
console.log("Uppercase:", personName.toUpperCase());
//printing a person name in titlecase
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
