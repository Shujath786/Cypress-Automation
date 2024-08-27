//object is a collection of properties

let person ={

    firstName: "John",
    lastName:  "Cena",
    age:24,
    fullName: function()
    {
        console.log(this.firstName+this.lastName)
    }


}
console.log(person.fullName())
console.log(person.lastName)
person.gender = "Male"
console.log(person)
person.lastName = "Travolta"
console.log(person)
//check if a property exists or not
console.log('gender' in person)

//to print the values of the object(person) - 'key' is the keyword to use
for(key in person){
    console.log(person[key])
}