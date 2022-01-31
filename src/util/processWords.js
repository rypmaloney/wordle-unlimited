//This script runs after the rndmWords script. It removes all non-5 letter words that slipped through (plurals) and words without definitions

const fs = require("fs");

let rawWords = fs.readFileSync("lists/wordsWithDefs.json");
let wordsWithDefs = JSON.parse(rawWords);

let goodWords =[]


for (let i=0; i< wordsWithDefs.length; i++){

    if(wordsWithDefs[i].definitions.length > 0 && wordsWithDefs[i].word.length ===5){
        goodWords.push(wordsWithDefs[i])
    }

}

console.log(goodWords.length)

fs.writeFile(
    "lists/goodWords.json",
    JSON.stringify(goodWords),
    (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    }
);