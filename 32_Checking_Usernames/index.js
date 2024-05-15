"use strict";
const currentUsers = ["Alishba", "AiZa", "UrroJ", "FiZa"];
const newUsers = ["ZermeeN", "AiZa", "UrroJ", "Asma"];
newUsers.forEach(newusername => {
    let lowercase = newusername.toLowerCase();
    if (currentUsers.map(cUsers => cUsers.toLowerCase()).includes(lowercase)) {
        console.log(`The ${newusername} is not available Try something different.`);
    }
    else {
        console.log(`The ${newusername} is available`);
    }
});
