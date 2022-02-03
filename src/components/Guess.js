const Guess = (props) => {
    const { guess, letterColor  } = props;
    

    return (
        <div className="grid grid-cols-5 gap-1 py-1">
            {guess.map((letter, index) => {
                return (
                    <div
                        key={index}
                        className={`box-border h-14 w-14 border-2 flex flex-col justify-center dark:border-gray-400 items-center ${letterColor[index]}`}>
                        <p className="text-slate-600 text-4xl dark:text-slate-50 uppercase">
                            {letter}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Guess;
