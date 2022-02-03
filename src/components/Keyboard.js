const Keyboard = (props) => {
    const { letters, handleLetterClick, handleSubmitGuess, handleDeleteLetter } = props;

    let keyRowOne = letters.slice(0, 10);
    let keyRowTwo = letters.slice(10, 19);
    let keyRowThree = letters.slice(19, 27);

    return (
        <div className="py-4 w-full px-1">
            <div className="flex justify-center px-4 md:px-8 flex-row content-center ">
                {keyRowOne.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={`cursor-pointer md:hover:bg-gray-300 active:bg-gray-500 rounded text-lg text-center border-2 dark:border-gray-600 h-12 w-10 pt-2 md:h-10 md:w-8 md:pt-1  mx-auto ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center  px-8 md:px-12 flex-row content-center">
                {keyRowTwo.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={` cursor-pointer md:hover:bg-gray-300  active:bg-gray-500 rounded text-lg text-center border-2 dark:border-gray-600 w-10 h-12 md:h-10 md:w-8 md:pt-1 mt-1 pt-2 mx-auto ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center   md:px-4 flex-row content-center">
            <button
                    onClick={handleSubmitGuess}
                    className="md:hover:bg-gray-700 active:bg-gray-500 text-white py-1 m-1 px-2 text-lg md:text-sm rounded focus:outline-none focus:shadow-outline float-right bg-lime-700"
                >
                    Submit
                </button>
                {keyRowThree.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={`cursor-pointer md:shover:bg-gray-300 active:bg-gray-500 rounded text-lg text-center border-2 dark:border-gray-600  md:h-10 md:w-8 md:pt-1  h-12 w-10 mt-1 pt-2 mx-auto ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
                <button
                    onClick={handleDeleteLetter}
                    className="md:hover:bg-gray-700 active:bg-gray-500 text-white py-1 m-1 px-2 rounded text-lg md:text-sm  focus:outline-none focus:shadow-outline float-left bg-red-700"
                >
                    Delete
                </button>
            </div>

        </div>
    );
};

export default Keyboard;
