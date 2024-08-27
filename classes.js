//classes in javascript
// to make a class accessible outside and visible to public, use module.export = class name
module.exports = class Person

//class Person
{
    firstName = "John" //class variables, values will not change
    lastName = "Cena"
    age =24
    //location = "USA"

   get location() // getter method instead of the property
   {
        return "USA"

   }
   //creating a constructor
   //constructor is a method which executes by default when you create an object of that class
   constructor(firstName, lastName)
   {
     this.firstName=firstName //instance variables local to the scope of the constructor and change values; 'this' property belongs to current class and the 'firstName' 
     this.lastName=lastName   //variable can be accessed across the entire class
   }
   //fullName
   fullName() // this is a method and not a property or getter method/property
   {
      console.log(this.firstName+this.lastName)
   }

}
/* let person = new Person("James", "Bond") // to access the methods or properties in the class, we need to create an object of the class
console.log(person.location)
console.log(person)
console.log(person.fullName())
 */