// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface person {
    name: string;
    age: number;
    nationality: string;
    supportive: boolean;
}
const teacher1 = {
            name: "Isfhan",
            age: 24,
            nationality: "pakistani",
            supportive: true,
}
const teacher2 = {
            name: "Shameer",
            age: 23,
            nationality: "pakistani",
            supportive: false,
}
console.log(`${teacher1.name}, ${teacher1.supportive}`);
console.log(`${teacher2.name} , ${teacher2.supportive}`);

