const fs = require("fs");
const https = require("https");


const getWords = () => {
    https.get("https://random-word-api.herokuapp.com/all", (resp) => {
        let data = "";
        // A chunk of data has been received.
        resp.on("data", (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on("end", () => {
            let allWords = JSON.parse(data);

            console.log("complete");
            fs.writeFile(
                "allWords.json",
                JSON.stringify(allWords),
                (err) => {
                    if (err) throw err;
                    console.log("The file has been saved!");
                }
            );
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    });
};
getWords()