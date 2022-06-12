const normalPerson = {
    firstName : 'Ibrahim',
    lastName : 'Munna',
    salary: 15500,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(520);
console.log(normalPerson.salary);