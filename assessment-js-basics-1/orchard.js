///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0; // Define a totalAcres variable and assign 0

for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
// all 3 arrays have the same length (7 days a week) so, we use one array of length to iteration those loops

console.log(totalAcres) // print the total Acres in console

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

const averageDailyAcres = totalAcres/fujiAcres.length; 

// the total acres divided by the length of array or 7 days.


console.log(averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE




while (acresLeft > 0){

    acresLeft = acresLeft-averageDailyAcres; // averageDailyAcres value is 9
    days++;
    
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.
     
    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// ======= let's do the first array (fujiTons)============

// frist let as copy from fujiAcres array to fujiTons array by using slice method 

 let fujiTons = fujiAcres.slice(0, fujiAcres.length) 
 
 // at this time we have a copy of orginal array (fujiAcres)
// we can use a for loop to iteration  each element or value of new array

 for( i = 0; i < fujiTons.length; i++){
    fujiTons[i] *= 6.5; // Each acre yields 6.5 tons of apples.
 }
 console.log(fujiTons) // Log fujiTons array to the console.

 // ======= let's do the second array (galaTons)============

 // frist let as copy from galaAcres array to galaTons array by using slice method 
 //  we can use a for loop to iteration  each element or value of new array

 let galaTons = galaAcres.slice(0, galaAcres.length)
 for( i = 0; i < galaTons.length; i++){

    galaTons[i] *= 6.5; // Each acre yields 6.5 tons of apples.
 }
 console.log(galaTons)

 // ======= let's do the last array (pinkTons)============

  // frist let as copy from pinkAcres array to pinkTons array by using slice method 
 //  we can use a for loop to iteration  each element or value of new array

 let pinkTons = pinkAcres.slice(0, pinkAcres.length)

 for( i = 0; i < pinkTons.length; i++){

    pinkTons[i] *= 6.5; // Each acre yields 6.5 tons of apples. 
 }
 console.log(pinkTons) // print the value to the console.




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// ===================Solution 5 first variety=======================

// first let's create a for loop to add tons in each variety 

let fujiTonsSum = 0; // create a varible to store the sum of fujiTons 

for (let i = 0; i < fujiTons.length;  i++){
    fujiTonsSum += fujiTons[i]; // add each fujiTons array value to a variable fujiTonsSum 
}
//console.log(fujiTonsSum)

 let fujiPounds = fujiTonsSum * 2000; // calculate the total number of fujiTons tons multiply by 2000 (1 ton = 2000 pounds)

 console.log(fujiPounds); // print the total number of pounds fujiapples picked in the console.

 // ===================Solution 5 second variety========================

 let galaTonsSum = 0; // create a varible to store the sum of galaTons 

for (let i = 0; i < galaTons.length; i++){
    galaTonsSum += galaTons[i]; // add each galaTons array value to a variable galaTonsSum 
}
//console.log(galaTonsSum)

let galaPounds= galaTonsSum * 2000; // calculate the total number of galaTons tons multiply by 2000 (1 ton = 2000 pounds)

 console.log(galaPounds); // print the total number of pounds galaapples picked in the console

 // ===================Solution 5 last variety================================
 
 let pinkTonsSum = 0; // create a varible to store the sum of pinkTons 

for (let i = 0; i < pinkTons.length; i++){
    pinkTonsSum += pinkTons[i]; // add each pinkTons value to a variable pinkTonsSum 
}
//console.log(pinkTonsSum)

let pinkPounds= pinkTonsSum * 2000; // calculate the total number of pinkTons tons multiply by 2000 (1 ton = 2000 pounds)

 console.log(pinkPounds); // print the total number of pounds pinkapples picked in the console




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55


// =================== fujiApple profits===================================

// To Caculate the fujiApple profits fujiPounds multiply by fujiPrice and divede to 100 (1$ === 100 cents) 

let fujiProfit = (fujiPounds * fujiPrice)/100; 

console.log(`The Profits Of FujiApple is: $${fujiProfit}`)

// =================== galaApple profits======================================
// To Caculate the galaApple profits galaPounds multiply by galaPrice and divede to 100 (1$ === 100 cents) 

 let galaProfit = (galaPounds * galaPrice)/100;

 console.log(`The Profits Of GalaApple is: $${galaProfit}`)


 // =================== pinkApple profits======================================

// To Caculate the pinkApple profits (pinkPounds multiply by pinkPrice and divede to 100) (1$ === 100 cents) 

let pinkProfit = (pinkPounds * pinkPrice)/100;

console.log(`The Profits Of PinkApple is: $${pinkProfit}`)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`The Total Profits Of All Apple is: $${totalProfit} in USA Dollar`)

// The Total Profits of all Apples will be $5471.7

