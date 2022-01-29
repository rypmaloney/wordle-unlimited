import "../index.css";
import Keyboard from "./Keyboard";
import Guess from "./Guess";
//import React, { useState, useEffect } from "react";

function Board(props) {
    const {
        guessesSplit,
        handleGuessChange,
        guesses,
        handleSubmitGuess,
        inputValue,
        warning,
        letters,

    } = props;

    return (
        <div>
            <div className="px-16">
                {guesses.map((guess) => {
                    return (
                        <Guess
                            guess={guess.guessSplit}
                            letterCheck={guess.letterCheck}
                            letterColor={guess.letterColor}
                        />
                    );
                })}

                <Keyboard />

                <p className="text-sm text-slate-500 pt-10 min-h-14">
                    {warning}
                </p>

                <form onSubmit={handleSubmitGuess} className="form-inline">
                    <input
                        onChange={handleGuessChange}
                        className="form-control border border-solid border-slate-600 text-slate-700 text-xlg text-center rounded-ms h-12 w-full"
                        type="text"
                        placeholder="type your guess"
                        maxLength={5}
                        value={inputValue}
                    />
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit Guess
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Board;
