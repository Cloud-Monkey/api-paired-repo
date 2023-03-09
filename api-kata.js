const https = require('node:https');
const fs = require('fs');

const options = {

    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/confidential',
    method: 'GET',

};

const req = https.request(options, (response) => {

    let body = "";
    response.on('data', (data) => {

        body += data.toString();
        console.log(data)
    });

    response.on('end', () => {

        const parsedData = JSON.parse(body);
        // const instructions = parsedData["instructions"]
        fs.writeFile('instructions.md', parsedData["instructions"], (err) =>{
            if (err) throw err;
        })
        // console.log(typeof parsedData)
    });


});



req.end();