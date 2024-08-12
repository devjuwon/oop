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