// let marks = [97, 54, 45, 36, 27];
// console.log(marks);

// let heroes = ["spiderman", "flying jatt", "superman", "shaktiman", "balveer"];
// console.log(heroes);

// let info = ["w gupta", 47, "BCA"];
// console.log(info);

// let rollNo = [16, 32, 33, 28, 47];
// console.log(rollNo[0]);
// console.log(rollNo[1]);
// console.log(rollNo[2]);
// console.log(rollNo[3]);
// console.log(rollNo[0],rollNo[1],rollNo[2],rollNo[3]);
// console.log(rollNo[3] = 57); // change the index[3] value into 57.

// // LOOP OVER AN ARRAY 

// let heroes = ["spiderman", "flying jatt", "superman", "shaktiman", "balveer"];

// for(let ind = 0 ; ind < heroes.length ;ind++){
//     console.log(heroes[ind]);
// }

// for-of loop 

// let heroes = ["spiderman", "flying jatt", "superman", "shaktiman", "balveer"];
 
// for(let i of heroes){
//     console.log(i)
// }


//...........................................................................................

//for a given array with marks of student -> [85, 97, 44, 37, 76, 60].
//find the average marks of the entire class. 

// let marks =  [85, 97, 44, 37, 76, 60];
// let sum =(85 + 97+ 44+ 37+ 76+ 60);
// let average = sum / marks.length; 
// console.log("Average :", average);

//..............................................................................................................

// for a given array with prices of 5 items [250 , 645, 300, 900, 50]
// all items have an offer of 10% off on them. change the array to store 
// final price after applying offer.


// let prices = [250, 645, 300, 900, 50];

// for (let i = 0; i < prices.length; i++) {
//     prices[i] = prices[i] - (prices[i] * 10 / 100); // Applying 10% discount
// }

// console.log("Final Prices after 10% off:", prices);

//..............................................................................................

// ARRAY METHODS 
//.push()
// let foodItems = ["apple", "guava", "tomato", "banana", "chili"];

// foodItems.push("chips", "maggie");

// console.log(foodItems);

//.to String()

// let foodItems = ["apple", "guava", "tomato", "banana", "chili"];
// console.log(foodItems);
 
// console.log(foodItems.toString());


// let marks = [45, 47 , 98, 78, 56, 56];
// console.log(marks);
// console.log(marks.toString());

//concat()

// let foodItems = ["apple", "guava", "banana"];
// let vegetables = ["tomato", "chili"]

// let mixes  = foodItems.concat(vegetables);
// console.log(mixes);

// unshift()





//..........................................................................................

// Q. create a array to store compaies -> "bloomberg", "microsoft", "uber", "google", "ibm", "netflix".
//    a.remove the first company from the array.
//    b.remove uber and add old in its place.      
//    c.add Amazon at the end. 

/*
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
console.log(companies);
companies.shift();
 console.log(companies);
 */

 /*
 let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
 console.log(companies);
 companies.splice(2, 1, "ola");
 console.log(companies);
*/

/*
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
 console.log(companies);
 companies.push("amazon");
 console.log(companies);
*/

//...........................................end.....................................................
//...........................................end....................................................

