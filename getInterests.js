const https = require('node:https');
const fs = require('fs');




function getInterests() {


    // const readNorthcoders = 
    fs.readFile('./northcoders.json', (err, northcoders) => {
        
        if (err) throw err;

        const northString = northcoders.toString();
        const northJson = JSON.parse(northString);
        const northNamesArr = northJson["people"].map((item) => {

            return item["username"]
            
        });

        
        // console.log(northNamesArr);


       
     
        // northcoders.on('data', (data) => {
        
        //     console.log(data);


        // });


    });


};


getInterests();