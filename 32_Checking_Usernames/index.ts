const currentUsers: string[] = ["Alishba", "AiZa", "UrroJ", "FiZa"];
const newUsers: string[] = ["ZermeeN", "AiZa", "UrroJ","Asma"];

newUsers.forEach(newusername => {
    
    let lowercase: string = newusername.toLowerCase();
    if (currentUsers.map(cUsers => cUsers.toLowerCase()).includes(lowercase)) {
        console.log(`The ${newusername} is not available Try something different.`);
    }else {
        console.log(`The ${newusername} is available`);
}
})