class Person{
    // Constructor
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Methods
    greeting(){
      return `Hello There ${this.firstName} ${this.lastName}`;
    }
  
  }
  
  // Inheriting Person
  class Customer extends Person{
    constructor(firstName, lastName, phone, membershipType){
      super(firstName, lastName);
      this.phone = phone;
      this.membershipType = membershipType;
    }
  }
  
  const john = new Customer('John','Wick','555-555-555', 'Premium');
  console.log(john);
  john.greeting();