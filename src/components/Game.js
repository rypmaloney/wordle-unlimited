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

    // 0 === correct letter & locaiton
    // 2 === correct letter, wrong location
    // 3 === wrong letter, wrong location
    const [guesses, setGuesses] = useState([
        {
            guessMade: false,
            isWord: true,
            guess: "",
            guessSplit: ["", "", "", "", ""],
            letterCheck: ["", "", "", "", ""],
            letterColor: [
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
            ],
        },
        {
            guessMade: false,
            isWord: true,
            guess: "",
            guessSplit: ["", "", "", "", ""],
            letterCheck: ["", "", "", "", ""],
            letterColor: [
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
            ],
        },
        {
            guessMade: false,
            isWord: true,
            guess: "",
            guessSplit: ["", "", "", "", ""],
            letterCheck: ["", "", "", "", ""],
            letterColor: [
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
            ],
        },
        {
            guessMade: false,
            isWord: true,
            guess: "",
            guessSplit: ["", "", "", "", ""],
            letterCheck: ["", "", "", "", ""],
            letterColor: [
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
            ],
        },
        {
            guessMade: false,
            isWord: true,
            guess: "",
            guessSplit: ["", "", "", "", ""],
            letterCheck: ["", "", "", "", ""],
            letterColor: [
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
                "bg-slate-100",
            ],
        },
    ]);
    const [letters, setLetters] = useState([
        {
            letter: "Q",
            color: "bg-slate-100",
        },
        {
            letter: "W",
            color: "bg-slate-100",
        },
        {
            letter: "E",
            color: "bg-slate-100",
        },
        {
            letter: "R",
            color: "bg-slate-100",
        },
        {
            letter: "T",
            color: "bg-slate-100",
        },
        {
            letter: "Y",
            color: "bg-slate-100",
        },
        {
            letter: "U",
            color: "bg-slate-100",
        },
        {
            letter: "I",
            color: "bg-slate-100",
        },
        {
            letter: "O",
            color: "bg-slate-100",
        },
        {
            letter: "P",
            color: "bg-slate-100",
        },

        {
            letter: "A",
            color: "bg-slate-100",
        },
        {
            letter: "S",
            color: "bg-slate-100",
        },
        {
            letter: "D",
            color: "bg-slate-100",
        },
        {
            letter: "F",
            color: "bg-slate-100",
        },
        {
            letter: "G",
            color: "bg-slate-100",
        },
        {
            letter: "H",
            color: "bg-slate-100",
        },
        {
            letter: "J",
            color: "bg-slate-100",
        },
        {
            letter: "K",
            color: "bg-slate-100",
        },
        {
            letter: "L",
            color: "bg-slate-100",
        },

        {
            letter: "Z",
            color: "bg-slate-100",
        },
        {
            letter: "X",
            color: "bg-slate-100",
        },
        {
            letter: "C",
            color: "bg-slate-100",
        },
        {
            letter: "V",
            color: "bg-slate-100",
        },
        {
            letter: "B",
            color: "bg-slate-100",
        },
        {
            letter: "N",
            color: "bg-slate-100",
        },
        {
            letter: "M",
            color: "bg-slate-100",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [warning, setWarning] = useState("");

    const handleGuessChange = (e) => {
        setInputValue(e.target.value.toUpperCase());
        let currentGuessIndex = findCurrentGuess();
        let guessesCopy = guesses.slice();

        if (guessesCopy[currentGuessIndex].guess.length <= 5) {
            guessesCopy[currentGuessIndex].guess = e.target.value.toLowerCase();
            for (let i = 0; i <= 4; i++) {
                guessesCopy[currentGuessIndex].guessSplit[i] = guessesCopy[
                    currentGuessIndex
                ].guess.slice(i, i + 1);
            }
        }
        setGuesses(guessesCopy);
    };

    const handleSubmitGuess = (e) => {
        e.preventDefault();
        let currentGuessIndex = findCurrentGuess();
        let guessesCopy = guesses.slice();
        if (guessesCopy[currentGuessIndex].guess.length === 5) {
            checkWordle(guessesCopy[currentGuessIndex].guess);
        }
    };

    const updateKeyboard = (letter, checkResult) => {
        let lettersCopy = letters.slice();
        let letterIndex = lettersCopy.findIndex(
            (x) => x.letter === letter.toUpperCase()
        );

        if (checkResult === 0) {
            lettersCopy[letterIndex].color = "bg-lime-500";
        } else if (checkResult === 1) {
            lettersCopy[letterIndex].color = "bg-yellow-500";
        } else {
            lettersCopy[letterIndex].color = "bg-slate-500";
        }

        setLetters(lettersCopy);
    };

    const checkLetters = (index) => {
        let guessesCopy = guesses.slice();

        let guessSplit = guessesCopy[index].guessSplit;
        let wordSplit = word.split("");

        for (let i = 0; i < wordSplit.length; i++) {
            if (guessSplit[i] === wordSplit[i]) {
                guessesCopy[index].letterCheck[i] = 0;
                guessesCopy[index].letterColor[i] = "bg-lime-500";
                updateKeyboard(guessSplit[i], 0);
            }
            for (let j = 0; j < wordSplit.length; j++) {
                if (
                    guessSplit[i] === wordSplit[j] &&
                    guessSplit[i] !== wordSplit[i]
                ) {
                    guessesCopy[index].letterCheck[i] = 1;
                    guessesCopy[index].letterColor[i] = "bg-yellow-500";

                    updateKeyboard(guessSplit[i], 1);
                } else if (
                    guessSplit[i] !== wordSplit[i] &&
                    guessSplit[i] !== wordSplit[j] &&
                    guessesCopy[index].letterCheck[i] === ""
                ) {
                    guessesCopy[index].letterColor[i] = "bg-slate-500"
                    updateKeyboard(guessSplit[i], 3);
                }
            }
        }
        setGuesses(guessesCopy);
    };

    const findCurrentGuess = () => {
        let currentGuess = null;
        for (let i = 0; i < guesses.length; i++) {
            if (guesses[i].guessMade === false && currentGuess === null) {
                return i;
            }
        }
    };

    async function checkWordle(word) {
        let currentGuessIndex = findCurrentGuess();
        let guessesCopy = guesses.slice();
        const key = "ed92f719-9976-426c-a34f-1fb9d6ceb547";
        const res = await fetch(
            `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`
        );
        const response = await res.json();

        //Update either input or warning depending on if it is a word
        if (response[0].meta !== undefined) {
            guessesCopy[currentGuessIndex].isWord = true;
            guessesCopy[currentGuessIndex].guessMade = true;
            setInputValue("");
            setWarning(response[0].shortdef[0]);
            checkLetters(currentGuessIndex);
        } else {
            guessesCopy[currentGuessIndex].isWord = false;
            setWarning("I don't think that is a word...");
        }

        setGuesses(guessesCopy);
    }

    useEffect(() => {}, []);

    return (
        <div className="h-screen bg-gray-50">
            <div className="max-w-md mx-auto ">
                <h1 className="text-3xl font-bold text-slate-600 text-center mx-auto p-3">
                    Wordle Unlimited
                </h1>

                <Board
                    guesses={guesses}
                    handleGuessChange={handleGuessChange}
                    handleSubmitGuess={handleSubmitGuess}
                    inputValue={inputValue}
                    warning={warning}
                    letters={letters}
                />
            </div>
        </div>
    );
};

export default Game;
