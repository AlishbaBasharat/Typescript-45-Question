"use strict";
function carsInfo(manufacturer, model, ...optional) {
    const carsInfo = Object.assign({ manufacturer,
        model }, Object.assign({}, ...optional));
    return carsInfo;
}
;
let CarsnewInfo = carsInfo(`Honda`, `civic`, { colour: "black" }, { features: ["navigation", "power window"] });
console.log(CarsnewInfo);
