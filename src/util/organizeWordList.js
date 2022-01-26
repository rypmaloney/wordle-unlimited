const fs = require("fs");
const https = require("https");


let fiveLetterWords = [];
let sixLetterWords = [];
let sevenLetterWords = [];

const organizeWordList = () => {
    let rawData = fs.readFileSync("lists/allWords.json");
    let data = JSON.parse(rawData)

    for (let i = 0; i < data.length; i++) {
        if (
            data[i].length !== 7 &&
            data[i].length !== 5 &&
            data[i].length !== 6
        ) {
        } else if (data[i].length == 5) {
            fiveLetterWords.push(data[i]);
            
        } else if (data[i].length == 6) {
            sixLetterWords.push(data[i]);
  
        } else if (data[i].length == 7) {
            sevenLetterWords.push(data[i]);
  
        }
    }
    console.log("complete");
    fs.writeFile(
        "lists/fiveLetterWords.json",
        JSON.stringify(fiveLetterWords),
        (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        }
    );
    fs.writeFile(
        "lists/sixLetterWords.json",
        JSON.stringify(sixLetterWords),
        (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        }
    );
    fs.writeFile(
        "lists/sevenLetterWords.json",
        JSON.stringify(sevenLetterWords),
        (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        }
    );
};
organizeWordList()
