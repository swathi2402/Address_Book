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
let contact1 = new Contact("Swath", "Hebbar", "Navunda", "Udupi", "Karnatak", 567567, 9998887766, "swath@gmail.com");
let contact2 = new Contact("Roopa", "Rao", "Abcd", "Madurai", "Tamilnadu", 543543, 8877669900, "roopa@gmail.com.co");


function addContact(contact) {
    let isContactExist = addressBookArray.filter(c => c.firstName === contact.firstName);
    if (isContactExist.length == 0) {
        addressBookArray.push(contact);
    } else {
        console.log("Contact already exists");
    }
}

try{
    addContact(contact);
    addContact(contact1);
    addContact(contact2);
    console.log("Address Book:\n" + addressBookArray);
    {
        let index = addressBookArray.findIndex(contact => contact.firstName === "Swathi");
        addressBookArray[index].phoneNumber = 8877665544;
        console.log("Edited contact:\n" + addressBookArray[index]);
    }
    
    let index = addressBookArray.findIndex(contact => contact.firstName === "Swathi");
    let deletedContact = addressBookArray.slice(index, 1);
    console.log("Deleted contact:\n" + deletedContact);

    let count = addressBookArray.reduce((totalCount, contact) => {
        return totalCount += 1;
    }, 0);
    console.log("Total contacts count: ", count)

    // UC 8
    {
        let city = 'Udupi';
        let personToSearch = 'Swath';
        addressBookArray.filter(contact => contact.city == city)
                        .filter(contact => contact.firstName == personToSearch)
                        .forEach(contact => console.log(contact));
    }

    // UC 9
    {
        let city = 'Udupi';
        console.log("Contacts in city " + city);
        addressBookArray.filter(contact => contact.city == city)
                        .forEach(contact => console.log(contact));

        let state = 'Karnataka';
        console.log("Contacts in state " + state);
        addressBookArray.filter(contact => contact.state == state)
                        .forEach(contact => console.log(contact));
    }
    // UC 10
    let city = 'Udupi';
    let personCountInCity = addressBookArray.filter(contact => contact.city == city)
                                            .reduce((totalCount, contact) => {
                                                return totalCount += 1;
                                            }, 0);
    console.log("count of contacts in city " + city + " is: " + personCountInCity);

    let state = 'Karnataka';
    let personCountInState = addressBookArray.filter(contact => contact.state == state)
                                            .reduce((totalCount, contact) => {
                                                return totalCount += 1;
                                            }, 0);
    console.log("Count of contacts in state " + state + " is: " + personCountInState);

    // UC 11
    console.log("Sorting by name");
    addressBookArray.sort((contact1, contact2) => {
                        return contact1.firstName.localeCompare(contact2.firstName);
                    })
                    .forEach(contact => console.log(contact.toString()));  
                    
    // UC 12
    console.log("Sorting by city");
    addressBookArray.sort((contact1, contact2) => {
                        return contact1.city.localeCompare(contact2.city);
                    })
                    .forEach(contact => console.log(contact)); 

    console.log("Sorting by state");
    addressBookArray.sort((contact1, contact2) => {
                        return contact1.state.localeCompare(contact2.state);
                    })
                    .forEach(contact => console.log(contact)); 
    console.log("Sorting by zip code");

    addressBookArray.sort((contact1, contact2) => {
                        return contact1.zipCode - contact2.zipCode;
                    })
                    .forEach(contact => console.log(contact)); 
} catch (e) {   
    console.error(e);
}

