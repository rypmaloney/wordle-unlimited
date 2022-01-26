const fs = require("fs");
const https = require("https");

let fiveLetterWords = [];
let sixLetterWords = [];
let sevenLetterWords = [];

const getWords = () => {
    https
        .get("https://random-word-api.herokuapp.com/word?", (resp) => {
            let data = "";
            // A chunk of data has been received.
            resp.on("data", (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on("end", () => {
                let response = JSON.parse(data);
                if (fiveLetterWords.length >= 3) {
                    console.log("complete");
                    fs.writeFile(
                        "fiveLetterWords.json",
                        JSON.stringify(fiveLetterWords),
                        (err) => {
                            if (err) throw err;
                            console.log("The file has been saved!");
                        }
                    );
                    fs.writeFile(
                        "sixLetterWords.json",
                        JSON.stringify(sixLetterWords),
                        (err) => {
                            if (err) throw err;
                            console.log("The file has been saved!");
                        }
                    );
                    fs.writeFile(
                        "sevenLetterWords.json",
                        JSON.stringify(sevenLetterWords),
                        (err) => {
                            if (err) throw err;
                            console.log("The file has been saved!");
                        }
                    );
                } else {
                    if (
                        response[0].length !== 7 &&
                        response[0].length !== 5 &&
                        response[0].length !== 6
                    ) {
                        getWords();
                    } else if (response[0].length == 5) {
                        fiveLetterWords.push(response[0]);
                        getWords();
                    } else if (response[0].length == 6) {
                        sixLetterWords.push(response[0]);
                        getWords();
                    } else if (response[0].length == 7) {
                        sevenLetterWords.push(response[0]);
                        getWords();
                    }
                }
                console.log(JSON.parse(data));
            });
        })
        .on("error", (err) => {
            console.log("Error: " + err.message);
        });
};
