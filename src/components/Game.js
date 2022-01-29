import { useEffect, useState } from "react";

import Board from "./Board";

const Game = () => {
    const [wordList, setWordList] = useState([
        "abris",
        "abuse",
        "abuts",
        "abuzz",
        "abyes",
        "abysm",
        "abyss",
        "acari",
        "acerb",
        "aceta",
        "ached",
    ]);
    const [word, setWord] = useState(wordList[1]);
    const [guesses, setGuess] = useState();
    const [guessesSplit, setGuessSplit] = useState([
        ["A", "P", "P", "L", "E"],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]);

    useEffect(() => {}, []);

    return (
        <div className="h-screen bg-gray-50">
            <div className="max-w-md mx-auto ">
                <h1 className="text-3xl font-bold text-slate-600 text-center mx-auto p-3">
                    Wordle Unlimited
                </h1>

                <Board guessesSplit={guessesSplit} />
            </div>
        </div>
    );
};

//Calls random words until it receives one of the appropriate length

//Checks if word IS word, updates isWord
let isWord;
function checkIfWord(word) {
    const key = "ed92f719-9976-426c-a34f-1fb9d6ceb547";

    fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`,
        {
            mode: "cors",
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            return response;
        });
    // .then((response) => {
    //     if (response[0].meta) {
    //         isWord = true;
    //     } else {
    //         isWord = false;
    //     }
    // });
}

//same but async function
async function checkWordle(word) {
    const key = "ed92f719-9976-426c-a34f-1fb9d6ceb547";
    const res = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`
    );
    const response = await res.json();
    return response;
}

export default Game;
