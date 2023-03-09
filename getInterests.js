const https = require("node:https");
const fs = require("fs");

function getInterests() {
  fs.readFile("./northcoders.json", (err, northcoders) => {
    if (err) throw err;

    const northString = northcoders.toString();
    const northJson = JSON.parse(northString);
    const northNamesArr = northJson["people"].map((item) => {
      return item["username"];
    });

    for (let i = 0; i < northNamesArr.length; i++) {
      let options = {
        hostname: "nc-leaks.herokuapp.com",
        path: `api/people/${northNamesArr[i]}/interests`,
        method: "GET",
      };

      const request = https.request(options, (personObj) => {
        console.log(personObj);
      });

      request.end();
    }
  });
}

getInterests();
