class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    doSomething() {
        console.log(this.name + " is doing something");
    }
}

var emp1 = new Employee(103, 'sahana', 30000);
console.log(emp1);

emp1.doSomething();