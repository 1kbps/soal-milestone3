
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

var keypress = require('keypress');
 
// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  
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
            for (var i = 0; i < x.length; i++) {
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
                for (var i = 0; i < x.length; i++) {
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

