// after ES6 formate
class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', 'Alom', 25000);
console.log(heroPerson);

// before ES6 formate
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const friendlyPerson = new Person1('Jamal', 'Uddin', 25800);
console.log(friendlyPerson);