const fs = require("fs");
const https = require("https");


let rawWords = fs.readFileSync("lists/fiveLetterWords.json");
let words = JSON.parse(rawWords);


let numberOfWords = words.length
let currentWord = 0

let wordsAndDefs = [];


const postWords = () =>{
    if(currentWord === 100){
        console.log("complete");
        fs.writeFile(
            "lists/firstK.json",
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


const getDefs = (num) => {
        https
            .get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${words[num]}`,
                // `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[num]}?key=${key}`,
                (resp) => {
                    let data = "";

                    // A chunk of data has been received.
                    resp.on("data", (chunk) => {
                        data += chunk;
                    });

                    // The whole response has been received. Print out the result.
                    resp.on("end", () => {
                        let response = JSON.parse(data);
                        console.log(words[num])
                        
                        if (response.title) {
                            postWords()
                        }
                        else{
                            console.log(response[0].meanings[0].definitions[0].definition)
                            wordsAndDefs.push({
                                word: words[num],
                                def: response[0].meanings[0].definitions[0].definition,
                            })
                            postWords()
                        }
                    });
                }
            )
            .on("error", (err) => {
                console.log("Error: " + err.message);
            });

};



function testAPI(){
    https
            .get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/asfdasf`,
                // `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[num]}?key=${key}`,
                (resp) => {
                    let data = "";

                    // A chunk of data has been received.
                    resp.on("data", (chunk) => {
                        data += chunk;
                    });

                    // The whole response has been received. Print out the result.
                    resp.on("end", () => {
                        let response = JSON.parse(data);
                        console.log(response);
                        console.log(response[0].title)
                    });
                }
            )
            .on("error", (err) => {
                console.log("Error: " + err.message);
            });
                        
}

getDefs(0)
