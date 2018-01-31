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







var xTable = require('./console.table');
var keypress = require('./keypress');


var x = [[0,0,0,2],
         [0,0,0,0],
         [0,0,0,0],
         [2,2,4,2]];
var xNew = [[]];     






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
console.table(xNew);
var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
    
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  
   if(key.name == 'left'){
       process.stdout.write('\033c');
       left();
       console.table(xNew);
   }


   if(key.name == 'up'){
    process.stdout.write('\033c');
    up();
    console.table(xNew);
    
}


if(key.name == 'down'){
    process.stdout.write('\033c');
    down();
    console.table(xNew);
    
}

if(key.name == 'right'){
    process.stdout.write('\033c');
    right();
    console.table(xNew);
    
}   
    
  
  
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
process.stdin.setRawMode(true);
process.stdin.resume();



var left = function(){

xNew=x;
    for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x.length; j++) {
        
            if(x[i][j] === 0 ){
                continue;
            }
        
            if(x[i][j-1] === 0 || x[i][j-1] === x[i][j]){
            xNew[i][j-1] = x[i][j-1] + x[i][j];
            xNew[i][j] = 0;
            
            }
        
        }
    
    }
    
    
    
}



var right = function(){

    xNew=x;
        for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x.length; j++) {
            
                if(x[i][j] === 0 ){
                    continue;
                }
            
                if(x[i][j+1] === 0 || x[i][j+1] === x[i][j]){
                xNew[i][j+1] = x[i][j+1] + x[i][j];
                xNew[i][j] = 0;
                
                }
            
            }
        
        }
        
        
        //display(xNew);
    }


    var up = function(){

        xNew=x;
            for (var i = 1; i < x.length; i++) {
            for (var j = 0; j < x.length; j++) {
                
                    if(x[i][j] === 0 ){
                        continue;
                    }
                
                    if(x[i-1][j] === 0 || x[i-1][j] === x[i][j]){
                    xNew[i-1][j] = x[i-1][j] + x[i][j];
                    xNew[i][j] = 0;
                    
                    }
                
                }
            
            }
            
            
            
        }


        var down = function(){

            xNew=x;
                for (var i = 0; i < x.length-1; i++) {
                for (var j = 0; j < x.length; j++) {
                    
                        if(x[i][j] === 0 ){
                            continue;
                        }
                    
                        if(x[i+1][j] === 0 || x[i+1][j] === x[i][j]){
                        xNew[i+1][j] = x[i+1][j] + x[i][j];
                        xNew[i][j] = 0;
                        
                        }
                    
                    }
                
                }
                
                
                
            }        



        
                       

//display(x);


console.table(xNew);

