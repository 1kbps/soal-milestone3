
var xTable = require('./console.table');
var keypress = require('./keypress');

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
var initArray= [];
while(zeroArray.length) initArray.push(zeroArray.splice(0,4));
// console.table (initArray);

var display = function(array){
    var arrDsp = '';
        for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            arrDsp+=array[i][j]+'       ';
    }
        console.log(arrDsp);
        arrDsp='';
    }
}

var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
    
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  
   if(key.name == 'left'){
       process.stdout.write('\033c');
       left();
       console.table(newArray);
   }


   if(key.name == 'up'){
    process.stdout.write('\033c');
    up();
    console.table(newArray);
    
}


if(key.name == 'down'){
    process.stdout.write('\033c');
    down();
    console.table(newArray);
    
}

if(key.name == 'right'){
    process.stdout.write('\033c');
    right();
    console.table(newArray);
    
}   
    
  
  
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
process.stdin.setRawMode(true);
process.stdin.resume();


var left = function(){

newArray=initArray;
    for (var i = 0; i < initArray.length; i++) {
    for (var j = 0; j < initArray.length; j++) {
        
            if(initArray[i][j] === 0 ){
                continue;
            }
        
            if(initArray[i][j-1] === 0 || initArray[i][j-1] === initArray[i][j]){
            newArray[i][j-1] = initArray[i][j-1] + initArray[i][j];
            newArray[i][j] = 0;
            
            }
        
        }
    
    }
    
    
    
}



var right = function(){

    newArray=initArray;
        for (var i = 0; i < initArray.length; i++) {
        for (var j = 0; j < initArray.length; j++) {
            
                if(initArray[i][j] === 0 ){
                    continue;
                }
            
                if(initArray[i][j+1] === 0 || initArray[i][j+1] === initArray[i][j]){
                newArray[i][j+1] = initArray[i][j+1] + initArray[i][j];
                newArray[i][j] = 0;
                
                }
            
            }
        
        }
        
        
        //display(newArray);
    }


    var up = function(){

        newArray=initArray;
            for (var i = 1; i < initArray.length; i++) {
            for (var j = 0; j < initArray.length; j++) {
                
                    if(initArray[i][j] === 0 ){
                        continue;
                    }
                
                    if(initArray[i-1][j] === 0 || initArray[i-1][j] === initArray[i][j]){
                    newArray[i-1][j] = initArray[i-1][j] + initArray[i][j];
                    newArray[i][j] = 0;
                    
                    }
                
                }
            
            }
            
            
            
        }


        var down = function(){

            newArray=initArray;
                for (var i = 0; i < initArray.length - 1; i++) {
                for (var j = 0; j < initArray.length; j++) {
                    
                        if(initArray[i][j] === 0 ){
                            continue;
                        }
                    
                        if(initArray[i+1][j] === 0 || initArray[i+1][j] === initArray[i][j]){
                        newArray[i+1][j] = initArray[i+1][j] + initArray[i][j];
                        newArray[i][j] = 0;
                        
                        }
                    
                    }
                
                }
                
                
                
            }        



        
                       

//display(initArray);

up();
console.table(newArray);
down();
console.table(newArray);
left();
console.table(newArray);
