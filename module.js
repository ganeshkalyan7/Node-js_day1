const os = require('os');
const fs = require('fs');


console.log("this is my project");

                 //creating a file
fs.writeFile('current_date_time.txt' ,"current time stamp", function(err,data){
    if (err){
        
        console.log(err)
    }
   
      else{
        
        var date=Date()
          console.log(date);
       }

})  

    
     
   
  

  fs.readFile('current_date_time.txt','utf8',(err,data)=>{
      if(err){
          console.log(err)
      }
      else{
          console.log(data)
      }

  })
