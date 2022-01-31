import { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";
import shuffle from "lodash/shuffle";
import uniqid from "uniqid";
import Modal from "./endModal";
import Board from "./Board";
import Nav from "./Nav";

const list = require("../util/lists/processedWords.json");
const shuffledList = shuffle(list);
const initialGuessList = [
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
        id: uniqid(),
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
        id: uniqid(),
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
        id: uniqid(),
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
        id: uniqid(),
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
        id: uniqid(),
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
        id: uniqid(),
    },
];

const Game = () => {
    const [darkEnabled, setDarkEnabled] = useState("light");
    const [gameNumber, setGameNumber] = useState(() => {
        const saved = localStorage.getItem("gameNumber");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });

    const [wordList, setWordList] = useState(() => {
        const saved = localStorage.getItem("wordList");
        const initialValue = JSON.parse(saved);
        return initialValue || shuffledList;
    });

    const [word, setWord] = useState(() => {
        const saved = localStorage.getItem("word");
        const initialValue = JSON.parse(saved);
        return initialValue || wordList[0];
    });
    // 0 === correct letter & locaiton
    // 2 === correct letter, wrong location
    // 3 === wrong letter, wrong location

    const [guessIndex, setGuessIndex] = useState(() => {
        const saved = localStorage.getItem("guessIndex");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });

    const [guesses, setGuesses] = useState(() => {
        const saved = localStorage.getItem("guesses");
        const initialValue = JSON.parse(saved);
        return (
            initialValue || [
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
                    id: uniqid(),
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
                    id: uniqid(),
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
                    id: uniqid(),
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
                    id: uniqid(),
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
                    id: uniqid(),
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
                    id: uniqid(),
                },
            ]
        );
    });
    const [letters, setLetters] = useState([
        {
            letter: "Q",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "W",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "E",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "R",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "T",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "Y",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "U",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "I",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "O",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "P",
            color: "bg-slate-100",
            id: uniqid(),
        },

        {
            letter: "A",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "S",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "D",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "F",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "G",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "H",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "J",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "K",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "L",
            color: "bg-slate-100",
            id: uniqid(),
        },

        {
            letter: "Z",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "X",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "C",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "V",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "B",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "N",
            color: "bg-slate-100",
            id: uniqid(),
        },
        {
            letter: "M",
            color: "bg-slate-100",
            id: uniqid(),
        },
    ]);
    const [gameHistory, setGameHistory] = useState([
        {
            word: word,
            guesses: guesses,
            won: Boolean,
            id: uniqid(),
        },
    ]);
    const [gameResult, setGameResult] = useState("lost");

    const [inputValue, setInputValue] = useState("");
    const [warning, setWarning] = useState("");

    //modals
    const [endModalIsOpen, setEndModalIsOpen] = useState(false);

    const newGame = () => {
        //Commits the previous game to state
        let previousGame = {
            gameNumber: gameNumber,
            word: word,
            didWin: gameResult,
            guesses: guessIndex,
        };
        let historyCopy = gameHistory;
        historyCopy.push(previousGame);
        setGameHistory(historyCopy);

        let newGameNum = gameNumber + 1;
        //makes a new game
        setGameNumber(newGameNum);
        setWord(wordList[newGameNum]);
        setGuessIndex(0);

        setGuesses([
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
                id: uniqid(),
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
                id: uniqid(),
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
                id: uniqid(),
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
                id: uniqid(),
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
                id: uniqid(),
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
                id: uniqid(),
            },
        ]);

        setLetters([
            {
                letter: "Q",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "W",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "E",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "R",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "T",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "Y",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "U",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "I",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "O",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "P",
                color: "bg-slate-100",
                id: uniqid(),
            },

            {
                letter: "A",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "S",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "D",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "F",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "G",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "H",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "J",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "K",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "L",
                color: "bg-slate-100",
                id: uniqid(),
            },

            {
                letter: "Z",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "X",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "C",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "V",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "B",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "N",
                color: "bg-slate-100",
                id: uniqid(),
            },
            {
                letter: "M",
                color: "bg-slate-100",
                id: uniqid(),
            },
        ]);
    };

    const handleGuessChange = (e) => {
        setWarning("");
        setInputValue(e.target.value.toUpperCase());
        let guessesCopy = guesses.slice();

        if (guessesCopy[guessIndex].guess.length <= 5) {
            guessesCopy[guessIndex].guess = e.target.value.toLowerCase();
            for (let i = 0; i <= 4; i++) {
                guessesCopy[guessIndex].guessSplit[i] = guessesCopy[
                    guessIndex
                ].guess.slice(i, i + 1);
            }
        }
        setGuesses(guessesCopy);
    };

    const handleSubmitGuess = (e) => {
        e.preventDefault();

        let guessesCopy = guesses.slice();
        console.log(guessesCopy[guessIndex].guess.length);
        console.log(guessesCopy[guessIndex].guess);
        if (guessesCopy[guessIndex].guess.length === 5) {
            checkWordle(guessesCopy[guessIndex].guess);
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
        let wordSplit = word.word.split("");

        for (let i = 0; i < 5; i++) {
            setTimeout(function timer() {
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
                        guessesCopy[index].letterColor[i] = "bg-slate-500";
                        updateKeyboard(guessSplit[i], 3);
                    }
                }
            }, i * 300);
            setGuesses(guessesCopy);
        }
    };

    async function checkWordle(word) {
        let guessesCopy = guesses.slice();
        const key = "ed92f719-9976-426c-a34f-1fb9d6ceb547";
        const res = await fetch(
            `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`
        );
        const response = await res.json();

        //Update either input or warning depending on if it is a word
        if (response[0].meta !== undefined) {
            guessesCopy[guessIndex].isWord = true;
            guessesCopy[guessIndex].guessMade = true;
            if (guessIndex < 5) {
                let guessIndexCopy = guessIndex + 1;
                setGuessIndex(guessIndexCopy);
            }

            setInputValue("");
            // setWarning(response[0].shortdef[0]);
            checkLetters(guessIndex);
            checkIfWon();
        } else {
            guessesCopy[guessIndex].isWord = false;
            setWarning("I don't think that is a word...");
        }

        setGuesses(guessesCopy);
    }

    const checkIfWon = () => {
        let submittedGuess = guesses[guessIndex].guessSplit;

        if (isEqual(submittedGuess, word.word.split(""))) {
            console.log("win");
            setTimeout(() => {
                setEndModalIsOpen(true);
            }, 1500);
            setGameResult("won");
        } else if (
            !isEqual(submittedGuess, word.word.split("")) &&
            guessIndex === 5
        ) {
            setTimeout(() => {
                setEndModalIsOpen(true);
            }, 1500);
            setGameResult("lost");
        }
    };

    const handleLetterClick = (e) => {
        if (inputValue.length < 5) {
            let call = inputValue + e.target.id;
            setInputValue(call);
            console.log(inputValue);

            let guessesCopy = guesses.slice();

            if (guessesCopy[guessIndex].guess.length <= 5) {
                guessesCopy[guessIndex].guess = call.toLowerCase();
                for (let i = 0; i < 5; i++) {
                    guessesCopy[guessIndex].guessSplit[i] = guessesCopy[
                        guessIndex
                    ].guess.slice(i, i + 1);
                }
            }
            setGuesses(guessesCopy);
        }
    };

    function switchToDark(darkEnabled) {}

    useEffect(() => {
        localStorage.setItem("guesses", JSON.stringify(guesses));
        localStorage.setItem("wordList", JSON.stringify(wordList));
        localStorage.setItem("word", JSON.stringify(word));
        localStorage.setItem("gameNumber", JSON.stringify(gameNumber));
        localStorage.setItem("guessIndex", JSON.stringify(guessIndex));
    }, [guesses, wordList, word, gameNumber, guessIndex]);

    return (
        <div className={darkEnabled}>
            <div className={`h-screen bg-gray-50  dark:bg-gray-800`}>
                <Nav
                    darkEnabled={darkEnabled}
                    setDarkEnabled={setDarkEnabled}
                />
                <div className="max-w-md min-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-slate-600 dark:text-slate-200 text-center mx-auto p-3">
                        Wordle Unlimited
                    </h1>

                    <Board
                        handleLetterClick={handleLetterClick}
                        guesses={guesses}
                        handleGuessChange={handleGuessChange}
                        handleSubmitGuess={handleSubmitGuess}
                        inputValue={inputValue}
                        warning={warning}
                        letters={letters}
                    />
                </div>
                <Modal
                    setIsOpen={setEndModalIsOpen}
                    isOpen={endModalIsOpen}
                    word={word}
                    gameResult={gameResult}
                    newGame={newGame}
                />
            </div>
        </div>
    );
};

export default Game;
