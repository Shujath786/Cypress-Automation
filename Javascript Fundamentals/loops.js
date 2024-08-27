/*const flag = true
//if
if(!flag)
 {
    console.log("condition satisfied")
}
else
{   
    console.log(flag)
    console.log("condition not satisfied")
}*/

//while
/*let i = 0
while(i>10)
{
    i++
    console.log(i)
}*/

//do..while
/*do
{
i++
}while(i>10);
{
    console.log(i)
}*/
//for
/* let k =0
for(k=0;k<10;k++)
{
    console.log(k)
} */
// from 1 to 100, give me common multiples values of 2 and 5
let n =0
for(let k=1; k<=100; k++)
    // how to print the first 3 matching values in the set from above
{
    if(k%2 == 0 && k%5 == 0) // number in <k> wholly divisible by two with remainder as 0/&& is AND operator, || is OR operator
    {
        n++
        console.log(k)
        if(n == 3)
            break
        
    }
}