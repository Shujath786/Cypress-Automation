var marks = Array(6)
var marks = new Array(20,30,40,50,60,100) //one way of initialising an array

var marks = [20,30,40,50,60,100] // another way of initialising an array
console.log(marks[2]) // to retrieve a value in an array

console.log(marks.length) // to find the length of the array
marks.push(140) // to add an element to the end of an array
console.log(marks)
marks.pop(140) // to remove the last element in the array
console.log(marks)
marks.unshift(10) // to add an element at the beginning of the array
console.log(marks) 
console.log(marks.indexOf(50)) // to locate a value in the array
console.log(marks.includes(120)) // to search for an element, if present or not
var sum =0
for(let i =0; i< marks.length; i++)
{
    //console.log(marks[i])
    sum = sum + marks[i]
    
}
console.log(sum)
//reduce function
console.log(marks.reduce((sum,mark)=>sum+mark,0))
//filter
// to find the even numbers in an array
var scores = [12,13,14,16]
var emptar=[] //create a new array and assign even numbers to the array
for(let i =0; i<scores.length; i++)
{
    if(scores[i]%2==0)
        emptar.push(scores[i])
}
console.log(emptar)
// All the above code can be substituted with a filter function
 let even = scores.filter(scores=>scores%2==0)
 console.log(even)
 //map - say you have to multiply the new array values after filter by 3 to get the output even[12,14,16]=36,42,48
 let newArray = even.map(even=>even*3)
 console.log(newArray)
//Now sum up the new values in the new array
let newsum = (newArray.reduce((sum,newArray)=>sum+newArray,0))
console.log(newsum)
// sort function

let fruits = ["banana","apple","pomegrenate","guava","strawberry"]
fruits.sort()
console.log(fruits)
//Bubble sort, recursive sort function
var scores1 = [12,0o3,0o4,14,16,18]
console.log(scores1.sort((a,b)=> a-b))

