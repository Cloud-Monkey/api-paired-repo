const https = require('node:https');
const fs = require('fs');

const options = {

    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/people',
    method: 'GET',

};

function getPeople () {

    const request = https.request(options, (people) => {

        let body = "";
        people.on('data', (data) => {

            body += data.toString();
        
        });

        people.on('end', () => {

            fs.writeFile('northcoders.json', body, (err) => {
                if (err) throw err;

            });


        });

    });



    request.end();

};

getPeople();