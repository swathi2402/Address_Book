class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipCode = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    
    get firstName() {
        return this._firstName; 
    }

    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(firstName)) this._firstName = firstName;
        else throw 'First name is incorrect';
    }

    get lastName() {
        return this._lastName; 
    }

    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(lastName)) this._lastName = lastName;
        else throw 'Last name is incorrect';
    }

    get address() {
        return this._address; 
    }

    set address(address) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(regex.test(address)) this._address = address;
        else throw 'Address is incorrect';
    }

    get city() {
        return this._city; 
    }

    set city(city) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(regex.test(city)) this._city = city;
        else throw 'City is incorrect';
    }

    get state() {
        return this._state; 
    }

    set state(state) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(regex.test(state)) this._state = state;
        else throw 'State is incorrect';
    }

    get zipCode() {
        return this._zipCode; 
    }

    set zipCode(zipCode) {
        let regex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if(regex.test(zipCode)) this._zipCode = zipCode;
        else throw 'ZIP code is incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber; 
    }

    set phoneNumber(phoneNumber) {
        let regex = RegExp('[1-9][0-9]{9}')
        if(regex.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw 'Phone number is incorrect';
    }

    get email() {
        return this._email; 
    }

    set email(email) {
        let regex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+(\.[a-z]{2})?$')
        if(regex.test(email)) this._email = email;
        else throw 'Email is incorrect';
    }

    toString(){
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address + ", city = " + this.city  + 
        ", state = " + this.state + ", zipCode = " + this.zipCode + ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}
let addressBookArray = new Array();
let contact = new Contact("Swathi", "Hebbar", "Navunda", "Udupi", "Karnataka", 567567, 9988776655, "swathi@gmail.com");
addressBookArray.push(contact);
console.log(addressBookArray);