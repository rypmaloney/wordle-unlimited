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
                            letterColor={guess.letterColor}
                            key={guess.id}
                        />
                    );
                })}

                <Keyboard letters={letters} />

                <p className="text-sm pt-2 mb-0 h-2 text-red-500">
                    {warning}
                </p>

                <form onSubmit={handleSubmitGuess} className="form-inline mt-0 col-span-2">
                    <input
                        onChange={handleGuessChange}
                        className="form-control border border-solid border-slate-600 text-slate-700 text-lg text-center rounded-ms h-10 w-full"
                        type="text"
                        placeholder="type your guess"
                        maxLength={5}
                        value={inputValue}
                    />
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 my-1 px-4 w rounded text-sm focus:outline-none focus:shadow-outline float-right"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Board;
