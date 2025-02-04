// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time.

function sandwich(items: string[]){
    console.log ("\nMaking your sandwich with:")
    items.forEach(element => console.log("-" + element));

        console.log(`Enjoy Your Sandwiche!\n`)
    
}

sandwich(['Bread','Cheese','Meat']);

sandwich(['Bread','Cheese','Tomatoes']);

sandwich(['Bread','Cheese','Tomatoes','Lettuce']);