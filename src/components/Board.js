import "../index.css";
import Keyboard from "./Keyboard";
import Guess from "./Guess";
//import React, { useState, useEffect } from "react";

function Board(props) {
    const {
        handleGuessChange,
        guesses,
        handleSubmitGuess,
        inputValue,
        warning,
        letters,
        handleLetterClick,
        handleDeleteLetter,
    } = props;

    return (
        <div>
            <div className="max-w-md  ">
            <div className="px-10 md:px-14 ">
                {guesses.map((guess) => {
                    return (
                        <Guess
                            guess={guess.guessSplit}
                            letterColor={guess.letterColor}
                            key={guess.id}
                        />
                    );
                })}
                </div>

                <p className="text-sm pt-2 mb-0 ml-10 h-2 text-red-500">
                    {warning}
                </p>

                <form
                    onSubmit={handleSubmitGuess}
                    className="form-inline mt-6 "
                >
                    <div className="flex justify-center ">
                        <input
                            inputMode='none'
                            onChange={handleGuessChange}
                            className="form-control border border-solid border-slate-600 text-slate-700 dark:bg-slate-700  text-lg text-center dark:text-slate-50 rounded-ms h-10 w-4/5 mx-auto"
                            type="text"
                            placeholder="type your guess"
                            maxLength={5}
                            value={inputValue}
                            autoFocus
                        />
                    </div>
                </form>
                <Keyboard
                    handleDeleteLetter={handleDeleteLetter}
                    letters={letters}
                    handleLetterClick={handleLetterClick}
                    handleSubmitGuess={handleSubmitGuess}
                />


            </div>
        </div>
    );
}

export default Board;
