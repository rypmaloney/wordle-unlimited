const Keyboard = (props) => {
    const { letters, handleLetterClick } = props;

    let keyRowOne = letters.slice(0, 10);
    let keyRowTwo = letters.slice(10, 19);
    let keyRowThree = letters.slice(19, 27);

    return (
        <div className="py-4 w-full">
            <div className="flex justify-center  px-4 md:px-2 flex-row content-center ">
                {keyRowOne.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={`cursor-pointer hover:bg-gray-300 rounded text-sm text-center border-2 dark:border-gray-600 h-9 w-8 py-1 mx-auto ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center  px-8 md:px-4 flex-row content-center">
                {keyRowTwo.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={` cursor-pointer hover:bg-gray-300 rounded text-sm text-center border-2 dark:border-gray-600 h-9 w-8 py-1 mx-auto ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center  px-12 md:px-14 flex-row content-center">
                {keyRowThree.map((letter) => {
                    return (
                        <div
                            id={letter.letter}
                            key={letter.id}
                            onClick={handleLetterClick}
                            className={`cursor-pointer hover:bg-gray-300 rounded text-sm text-center border-2 dark:border-gray-600 h-9 w-8 py-1 mx-auto ${letter.color}`}
                        >
                            {letter.letter}
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Keyboard;
