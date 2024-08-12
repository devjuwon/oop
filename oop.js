// classes

class Car{
    constructor (make,model,year){
        this.make = make,
        this.model = model,
        this.year = year
    }

    displayInfo (){
        return(`this is a ${this.make}  ${this.model} and was developed in ${this.year}`)
    }
}

class User{
    constructor(fullName, email, phone, password){
        this.fullName = fullName,
        this.email = email,
        this.phone = phone,
        this.password = password
    }

    login(){
        return(`${this.email} has logged in successfully`)
    }

    logout(){
        return(`${this.email} has logged out successfully`)
    }
}

//abstraction

const myCar = new Car("Tesla", "x-6", 2024);
console.log(myCar);

const hisCar = new Car("Toyota", "Highlander", 2020)
console.log(hisCar);

const user = new User("DevJuwon", "dev@gmail.com", 9034567778, "8khgvggc")
console.log(user);

console.log(myCar.displayInfo());
console.log(user.login());


//encapsulation

class BankAcc{

    #balance
    constructor(name, email, phone, initialBal){
        this.name = name,
        this.email =email,
        this.phone = phone,        
        this.accNumber = phone
        this.#balance = initialBal
    }

    deposit(amount){
        if(amount > 50){
            this.#balance += amount
        }
    }

    withdraw(amount){
       if (amount >= 50 && amount <= this.#balance){
        this.#balance -= amount
       } else {
        console.log("insufficient funds");
        
       }
    }

    getBalance(){
        return this.#balance;
    }
}

const myAcc = new BankAcc("Juwon Oni", "jay@gmail.com", 906565788, 0);
console.log(myAcc);


myAcc.deposit(700000)
console.log(myAcc.getBalance());

myAcc.withdraw(25000)
console.log(myAcc.getBalance());


//inheritance

class SavingsAcc extends BankAcc{
  constructor(name, email, phone, initialBal, interestRate) {
    super(name, email, phone, initialBal);
    this.interestRate = interestRate
  } 

  applyInterest(){
    const interest = this.getBalance() * this.interestRate/100
    this.deposit(interest);
    console.log(`interest of ${interest} added successfully`);
  }
}

const mySavingsAcc = new SavingsAcc ("Juwon Oni", "jay@gmail.com", 906565788, 20, 3.5);
console.log(mySavingsAcc);

mySavingsAcc.deposit(29000);
console.log(mySavingsAcc.getBalance());


mySavingsAcc.withdraw(9000);
console.log(mySavingsAcc.getBalance());

mySavingsAcc.applyInterest();
console.log(mySavingsAcc.getBalance());

//polymorphism

class FixedDepositeAcc extends BankAcc {
    constructor(name, email, phone, initialBal, interestRate, lockPeriod){
        super(name, email, phone, initialBal);
        this.interestRate = interestRate,
        this.lockPeriod = lockPeriod
    }

    applyInterest(){
        const interest = this.getBalance() * this.interestRate/100
        this.deposit(interest);
        console.log(`interest of ${interest} will be added after ${this.lockPeriod} months`);
      }

    withdraw(amount){
        console.log(`withdrawals are not allowed during the lock period of ${this.lockPeriod} months`);
        
    }  
}

const myFixedDepositeAcc = new FixedDepositeAcc("Juwon Oni", "jay@gmail.com", 906565788, 20, 3.5, 12)
console.log(myFixedDepositeAcc);

myFixedDepositeAcc.deposit(10000000);
console.log(myFixedDepositeAcc.getBalance());

myFixedDepositeAcc.withdraw(500000);
console.log(myFixedDepositeAcc.getBalance());

myFixedDepositeAcc.applyInterest();
console.log(myFixedDepositeAcc.getBalance());







