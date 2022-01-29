
import { useEffect, useState } from "react";

const Keyboard = () => {
    const [game, setGame] = useState({
        word: "",
    });

    useEffect(() => {}, [game.length]);

    return (
        <div className="pt-4">
            <div className="grid grid-cols-10 gap-1 px-12 ">
                <div className="rounded text-sm text-center bg-neutral-400 text-slate-200 border-2 h-8 w-6 py-1">Q</div>
                <div className="rounded text-sm text-center bg-lime-500 border-2 h-8 w-6 py-1">W</div>
                <div className="rounded text-sm text-center bg-yellow-500 border-2 h-8 w-6 py-1">E</div>
                <div className="rounded text-sm text-center text-slate-700 border-2 h-8 w-6 py-1">R</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">T</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">Y</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">U</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">I</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">O</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">P</div>
            </div>
            <div className="grid grid-cols-9 gap-1 px-14 ">
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">A</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">S</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">D</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">F</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">G</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">H</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">J</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">K</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">L</div>


            </div>
            <div className="grid grid-cols-7 gap-1 px-20 ">
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">Z</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">X</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">C</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">V</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">B</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">N</div>
                <div className="rounded text-sm text-center border-2 h-8 w-6 py-1">M</div>
            </div>

        </div>
    );
};

export default Keyboard;
