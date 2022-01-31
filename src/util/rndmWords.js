///This script uses WORDSAPI to get definitions for all of the 5 letter words pulled from the Random Word API.
//Only saves word if there is a definition in their lib. This removes most of the obscure ones.


var axios = require("axios").default;
const fs = require("fs");

let rawWords = fs.readFileSync("lists/fiveLetterWords.json");
let words = JSON.parse(rawWords);


let currentWord = 0
let wordsAndDefs = [];

const postWords = () =>{
    console.log(`${currentWord} out of ${words.length}`)
    if(currentWord == words.length){
        console.log("complete");
        fs.writeFile(
            "lists/wordsWithDefs.json",
            JSON.stringify(wordsAndDefs),
            (err) => {
                if (err) throw err;
                console.log("The file has been saved!");
            }
        );
    } else {
        currentWord +=1
        getDefs(currentWord)
    }
    
}


function getDefs(num){

var options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${words[num]}/definitions`,
    headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "220d5b54e7mshbfb806407f2aa7fp1432d4jsnc5157c15dc6c",
    },
};

axios
    .request(options)
    .then(function (response) {


        if(response.status===404){
            postWords()
       }else {
            wordsAndDefs.push(response.data)
            postWords() 
        }

    })
    .catch(function (error) {
        console.error(error);
        postWords() 
    });
}


getDefs(0)
