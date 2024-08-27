//convert a string to a number
let date = '25'
let anotherDate = '29'
let diff = parseInt(anotherDate) - parseInt(date)
console.log(diff)
//convert a number to a string
diff.toString()
// different string functions
//splice
 let day = "Tuesday"
/* console.log(day.slice(0,3))
//split
console.log(day.split("s"))
console.log(day[1].length)
console.log(day[1].trim.length) */ 
// to concatenate a string
let statement = day + " is a busy day"
console.log(statement)
//indexOf
//let find = day.indexOf("d",4)
//console.log(find)

// to find the number of times 'day' is present in the statement
let count=0
let statement1 = statement.indexOf("day")

while(statement1!== -1)
{
    count++
    statement1 = statement.indexOf("day", statement1+1)
}
console.log(count)



