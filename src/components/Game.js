import { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";
import shuffle from "lodash/shuffle";
import { cloneDeep } from "lodash";
import uniqid from "uniqid";
import Modal from "./endModal";
import Board from "./Board";
import Nav from "./Nav";
import StatsModal from "./StatsModal";

const list = require("../util/lists/processedWords.json");

const shuffledList = shuffle(list);

const generateInitialGuessList = (wordLength) => {
    let list = [];
    for (let i = 0; i < 6; i++) {
        list.push({
            guessMade: false,
            isWord: true,
            guess: "",
            guessSplit: Array(wordLength).fill(""),
            letterCheck: Array(wordLength).fill(""),
            letterColor: Array(wordLength).fill(
                "bg-slate-100 dark:bg-gray-800 "
            ),
            id: uniqid(),
        });
    }
    return list;
};
const generateInitialLettersList = (wordLength) => {
    const keyboardArray = [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
    ];
    let list = [];

    keyboardArray.forEach((letter) => {
        list.push({
            letter: letter,
            color: "bg-slate-100",
            id: uniqid(),
        });
    });
    return list;
};

const Game = () => {
    const [darkEnabled, setDarkEnabled] = useState("dark");
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
        return initialValue || generateInitialGuessList(5);
    });
    const [letters, setLetters] = useState(() => {
        const saved = localStorage.getItem("letters");
        const initialValue = JSON.parse(saved);
        return initialValue || generateInitialLettersList();
    });

    const [gameHistory, setGameHistory] = useState([
        {
            word: word,
            guesses: guesses,
            won: Boolean,
            id: uniqid(),
        },
    ]);
    const [stats, setStats] = useState(() => {
        const saved = localStorage.getItem("stats");
        const initialValue = JSON.parse(saved);
        return (
            initialValue || {
                wins: 0,
                gamesPlayed: 0,
                guessOneWins: 0,
                guessTwoWins: 0,
                guessThreeWins: 0,
                guessFourWins: 0,
                guessFiveWins: 0,
                guessSixWins: 0,
                loss: 0,
            }
        );
    });
    const [gameResult, setGameResult] = useState("lost");
    const [inputValue, setInputValue] = useState("");
    const [warning, setWarning] = useState("");

    //modals
    const [endModalIsOpen, setEndModalIsOpen] = useState(false);
    const [statsModalIsOpen, setStatsModalIsOpen] = useState(false);

    const newGame = () => {
        let newGameNum = gameNumber + 1;
        //makes a new game
        setGameNumber(newGameNum);
        setWord(wordList[newGameNum]);
        setGuessIndex(0);

        setGuesses(() => generateInitialGuessList(5));
        setLetters(() => generateInitialLettersList());
    };

    const tabulateStats = (result) => {
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

        //Make Stats
        //check this
        let statsCopy = Object.assign({}, stats);
        statsCopy.gamesPlayed += 1;
        statsCopy.wins += result;
        if (result === 1) {
            switch (guessIndex) {
                case 0:
                    statsCopy.guessOneWins += 1;
                    break;
                case 1:
                    statsCopy.guessTwoWins += 1;
                    break;
                case 2:
                    statsCopy.guessThreeWins += 1;
                    break;
                case 3:
                    statsCopy.guessFourWins += 1;
                    break;
                case 4:
                    statsCopy.guessFiveWins += 1;
                    break;
                case 5:
                    statsCopy.guessSixWins += 1;
                    break;

                default:
                    console.log("stats is broken");
            }
        } else {
            statsCopy.loss += 1;
        }
        setStats(statsCopy);
    };

    const handleGuessChange = (e) => {
        setWarning("");
        setInputValue(e.target.value.toUpperCase());
        let deepGuessesCopy = cloneDeep(guesses);

        if (deepGuessesCopy[guessIndex].guess.length < 6) {
            //updates the guess
            deepGuessesCopy[guessIndex].guess = e.target.value.toLowerCase();
            setGuesses((prevState) => {
                const guessObjects = Array.from(prevState);
                guessObjects[guessIndex].guess =
                    deepGuessesCopy[guessIndex].guess;
                return guessObjects;
            });
            //holds the new split word
            let newGuessSplit = Array(5);
            for (let i = 0; i <= 4; i++) {
                newGuessSplit[i] = deepGuessesCopy[guessIndex].guess.slice(
                    i,
                    i + 1
                );
            }
            setGuesses((prevState) => {
                const guessObjects = Array.from(prevState);
                guessObjects[guessIndex].guessSplit = newGuessSplit;
                return guessObjects;
            });
        }
    };

    const handleSubmitGuess = (e) => {
        e.preventDefault();
        //cloneDeep to keep me honest
        let newGuess = cloneDeep(guesses[guessIndex].guess);
        if (newGuess.length === 5) {
            checkWordle(newGuess, guessIndex);
        }
    };

    const updateKeyboard = (letter, checkResult) => {
        //cloneDeep to keep me honest
        let lettersCopy = cloneDeep(letters);
        //function to update an individual letter
        const updateKey = (index, color) => {
            setLetters((prevState) => {
                const letterObject = Array.from(prevState);
                letterObject[index].color = color;
                return letterObject;
            });
        };
        //find the letter in question
        let letterIndex = lettersCopy.findIndex(
            (x) => x.letter === letter.toUpperCase()
        );
        //setTimeout so it doesn't display until after the board updates
        setTimeout(() => {
            if (
                lettersCopy[letterIndex].color !==
                "bg-lime-500"
            ) {
                if (checkResult === 0) {
                    updateKey(letterIndex, "bg-lime-500");
                } else if (checkResult === 1) {
                    updateKey(letterIndex, "bg-yellow-500");
                } else {
                    updateKey(letterIndex, "bg-slate-500 ");
                }
            }
        }, 1500);
    };

    const checkLetters = (guess, index) => {
        const guessSplit = guess.split("");
        const wordSplit = word.word.split("");
        //measure guess against this. Remove greens so you don't get duplicate yellow/green combinations
        let wordTracker = cloneDeep(wordSplit);
        //push colors for board to this. Does not mutate state directly
        let guessColor = ["", "", "", "", ""];
        //check for green
        for (let i = 0; i < 5; i++) {
            if (guessSplit[i] === wordSplit[i]) {
                guessColor[i] = "bg-lime-500 dark:bg-lime-500";
                updateKeyboard(guessSplit[i], 0);
                wordTracker[i] = 0;
            }
        }
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (
                    guessSplit[i] === wordTracker[j] &&
                    guessSplit[i] !== wordSplit[i]
                ) {
                    guessColor[i] = "bg-yellow-500 dark:bg-yellow-500";
                    updateKeyboard(guessSplit[i], 1);
                } else if (
                    guessSplit[i] !== wordTracker[i] &&
                    guessSplit[i] !== wordTracker[j] &&
                    guessColor[i] === ""
                ) {
                    guessColor[i] = "bg-slate-500";
                    updateKeyboard(guessSplit[i], 3);
                }
            }
        }
        //update each letter one at a time
        for (let i = 0; i < 5; i++) {
            setTimeout(function timer() {
                setGuesses((prevState) => {
                    const guessObjects = Array.from(prevState);
                    guessObjects[index].letterColor[i] = guessColor[i];
                    return guessObjects;
                });
            }, i * 300);
        }
    };

    async function checkWordle(guess, index) {
        const res = await fetch(
            `https://wordsapiv1.p.rapidapi.com/words/${guess}/definitions`,
            {
                method: "get",
                headers: {
                    Accept: "application/json",
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key":
                        "220d5b54e7mshbfb806407f2aa7fp1432d4jsnc5157c15dc6c",
                },
            }
        );

        const response = await res.json();

        //Update either input or warning depending on if it is a word
        if (response.success !== false) {
            setGuesses((prevState) => {
                let guessObjects = Array.from(prevState);
                guessObjects[index].isWord = true;
                guessObjects[index].guesMade = true;
                return guessObjects;
            });
            if (guessIndex < 5) {
                let nextGuessIndex = guessIndex + 1;
                setGuessIndex(nextGuessIndex);
            }
            setInputValue("");
            // setWarning(response[0].shortdef[0]);
            checkLetters(guess, index);
            checkIfWon();
        } else {
            setGuesses((prevState) => {
                let guessObjects = Array.from(prevState);
                guessObjects[index].isWord = false;
                return guessObjects;
            });
            setWarning("I don't think that is a word...");
        }
    }

    const checkIfWon = () => {
        let submittedGuess = guesses[guessIndex].guessSplit;

        if (isEqual(submittedGuess, word.word.split(""))) {
            setTimeout(() => {
                setEndModalIsOpen(true);
            }, 1500);
            setGameResult("won");
            tabulateStats(1);
        } else if (
            !isEqual(submittedGuess, word.word.split("")) &&
            guessIndex === 5
        ) {
            setTimeout(() => {
                setEndModalIsOpen(true);
            }, 1500);
            setGameResult("lost");
            tabulateStats(0);
        }
    };
    //rewrite
    const handleLetterClick = (e) => {
        if (inputValue.length < 5) {
            setWarning("");
            let call = inputValue + e.target.id;
            setInputValue(call);
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

    const handleDeleteLetter = () => {
        if (inputValue.length > 0) {
            setWarning("");
            let call = inputValue.slice(0, -1);
            setInputValue(call);
            let guessesCopy = cloneDeep(guesses);
            if (guessesCopy[guessIndex].guess.length <= 5) {
                guessesCopy[guessIndex].guess = call.toLowerCase();
                for (let i = 0; i < 5; i++) {
                    setGuesses((prevState) => {
                        let guessObjects = Array.from(prevState);
                        guessObjects[guessIndex].guessSplit[i] = guessesCopy[
                            guessIndex
                        ].guess.slice(i, i + 1);
                        return guessObjects;
                    });
                }
            }
        }
    };

    useEffect(() => {
        localStorage.setItem("letters", JSON.stringify(letters));
        localStorage.setItem("stats", JSON.stringify(stats));
        localStorage.setItem("guesses", JSON.stringify(guesses));
        localStorage.setItem("wordList", JSON.stringify(wordList));
        localStorage.setItem("word", JSON.stringify(word));
        localStorage.setItem("gameNumber", JSON.stringify(gameNumber));
        localStorage.setItem("guessIndex", JSON.stringify(guessIndex));
    }, [guesses, wordList, word, gameNumber, guessIndex, stats, letters]);

    return (
        <div className={`min-h-screen  ${darkEnabled}`}>
            <div className={`bg-gray-50  dark:bg-gray-800 pb-20 min-h-screen `}>
                <Nav
                    darkEnabled={darkEnabled}
                    setDarkEnabled={setDarkEnabled}
                    newGame={newGame}
                    setStatsModalIsOpen={setStatsModalIsOpen}
                />

                <div className="max-w-md min-w-md mx-auto flex flex-col justify-center min-h-screen">
                    <h1 className="text-3xl font-bold text-slate-600 dark:text-slate-200 text-center mx-auto p-3">
                        W<span className="text-yellow-500">o</span>rd
                        <span className="text-lime-500">l</span>e Unli
                        <span className="text-yellow-500">m</span>ited
                    </h1>

                    <Board
                        handleLetterClick={handleLetterClick}
                        handleDeleteLetter={handleDeleteLetter}
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
                <StatsModal
                    setIsOpen={setStatsModalIsOpen}
                    isOpen={statsModalIsOpen}
                    stats={stats}
                    wordlistLength={wordList.length}
                    gameNum={gameNumber}
                />
            </div>
        </div>
    );
};

export default Game;
