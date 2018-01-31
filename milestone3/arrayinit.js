//initiatilize a 2D array 16 values long with null values
// var zeroArray= Array(4).fill().map(() => Array(4).fill(0));
//initiatilize an array 16 values long with null values
var zeroArray = Array.from({ length: 16 }, () => 0);
// console.log (zeroArray); 
// test case would be to check the length of array eq to 16 and sum equal to zero

// generate two random index values between 0 and 15
var indx1 = Math.floor(Math.random() * 15);
var indx2 = Math.floor(Math.random() * 15);
// console.log (indx1, indx2); 

// change the value of those index values from null to 2
zeroArray.splice(indx1,1,2);
zeroArray.splice(indx2,1,2);
// console.log (zeroArray);
// test case would be to check the length of array eq to 16 and sum equal to four

// convert array into 2D array
// console.table (zeroArray);
