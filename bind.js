const normalPerson = {
    firstName: 'Jannat',
    lastName: 'Opi',
    salary: 25000,
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Kala',
    salary: 24000,
}

const friendlyPerson = {
    firstName: 'Abul',
    lastName: 'Mia',
    salary: 20000,
}
const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroPersonChargeBill(2100);
console.log(heroPerson.salary);

const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonChargeBill(1470);
console.log(friendlyPerson.salary);