function carsInfo(manufacturer: string, model: string, ...optional:{ [key : string] : any }[]): 
object{
    const carsInfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...optional)
    }
    return carsInfo;

};
 let CarsnewInfo = carsInfo(`Honda`, `civic`, {colour: "black"}, {features:["navigation", "power window"]});
 console.log(CarsnewInfo);