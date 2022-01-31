
const Keyboard = (props) => {
    const {letters} = props

    let keyRowOne = letters.slice(0,10)
    let keyRowTwo = letters.slice(10,19)
    let keyRowThree = letters.slice(19,27)


    return (
        <div  className="pt-4">
            <div className="grid grid-cols-10 gap-1  px-12">
                {keyRowOne.map(letter =>{
                    return <div key={letter.id} className={`rounded text-sm text-center border-2 h-8 w-6 py-1 ${letter.color}`}>{letter.letter}</div>
                })}

            </div>
            <div className="grid grid-cols-9 gap-1 px-14">
            {keyRowTwo.map(letter =>{
                    return <div key={letter.id} className={`rounded text-sm text-center border-2 h-8 w-6 py-1 ${letter.color}`}>{letter.letter}</div>
                })}



            </div>
            <div className="grid grid-cols-7 gap-1 px-20 ">
            {keyRowThree.map(letter =>{
                    return <div key={letter.id} className={`rounded text-sm text-center border-2 h-8 w-6 py-1 ${letter.color}`}>{letter.letter}</div>
                })}

            </div>

        </div>
    );
};

export default Keyboard;
