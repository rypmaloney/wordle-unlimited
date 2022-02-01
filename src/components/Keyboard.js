const Keyboard = (props) => {
    const { letters, handleLetterClick, handleSubmitGuess } = props;

    let keyRowOne = letters.slice(0, 10);
    let keyRowTwo = letters.slice(10, 19);
    let keyRowThree = letters.slice(19, 27);

    return (
        <div className="py-4 ">
            <div className="grid grid-cols-10 gap-1 px-6 md:px-12">
                {keyRowOne.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={`cursor-pointer hover:bg-gray-300 rounded text-sm text-center border-2 dark:border-gray-600 h-8 w-6 py-1 ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-9 gap-1 px-8 md:px-14">
                {keyRowTwo.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={`  dark:border-gray-600 cursor-pointer hover:bg-gray-300 rounded text-sm text-center border-2 h-8 w-6 py-1 ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-7 gap-1 px-14 md:px-20 ">
                {keyRowThree.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={` dark:border-gray-600 cursor-pointer hover:bg-gray-300 rounded text-sm text-center border-2 h-8 w-6 py-1  ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <button className="hover:bg-gray-700 text-white font-bold py-1 my-1 px-4 w rounded text-xs focus:outline-none focus:shadow-outline float-left bg-red-700">
                delete
            </button>
            <button
                onClick={handleSubmitGuess}
                className="hover:bg-gray-700 text-white font-bold py-1 my-1 px-4 w rounded text-xs focus:outline-none focus:shadow-outline float-right bg-lime-700"
            >
                Submit
            </button>
        </div>
    );
};

export default Keyboard;
