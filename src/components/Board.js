import "../index.css";
import Keyboard from "./Keyboard";
import Guess from "./Guess";
//import React, { useState, useEffect } from "react";

function Board(props) {
    const guessesSplit = props;

    return (
        <div>
            <div className="px-16">
                {
                    guessesSplit.guessesSplit.map((guess) => {
                    return <Guess guess={guess} />;
                })} 

                <Keyboard />

                <form className="form-inline my-4">
                    <input
                        className="form-control border border-solid border-black text-slate-700 text-xlg text-center rounded-lg h-12 w-full"
                        type="text"
                        placeholder="type your guess"
                    />
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Submit Guess
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Board;
