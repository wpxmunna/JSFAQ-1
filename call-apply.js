const normalPerson = {
    firstName: 'Jannat',
    lastName: 'Opi',
    salary: 25000,
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
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

// For call()
normalPerson.chargeBill.call(heroPerson, 900, 90, 9);
console.log(heroPerson.salary);

// For apply()
normalPerson.chargeBill.apply(friendlyPerson, [900, 90, 9]);
console.log(friendlyPerson.salary);