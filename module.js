
const fs = require('fs');
const http = require('http');

const current_time_stamp=new Date()

console.log("this is my project");

                 //creating a file
fs.writeFile('current_date_time.txt' ,`Current_Time_Stamp : ${current_time_stamp}`, function(err,result){
    if (err){
        
        console.log(err)
    }

        
        const date=result
})  

    
     
    //                   //reading a file

    // fs.readFile('current_date_time.txt','utf8',(err,result)=>{
    //   if(err){
    //     console.log(err)
    //     return err
    //   }
    //   const date=result

    //   console.log(date)

    // })
                  // reading a file with http
    const server=http.createServer((req,res)=>{
      fs.readFile('current_date_time.txt',(err,data)=>{
        if(err){
          console.log(err)
        }
        res.write(data);
        res.end()


      })
    })
    server.listen(4000)

    



 
