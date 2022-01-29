const Guess = (props) => {
    const guessLetters = props

    return (
        <div className="grid grid-cols-5 gap-1 py-1">
            {guessLetters.guess.map((letter)=>{
               return( <div className="box-border h-14 w-14 border-2 flex flex-col justify-center items-center ">
               <p className="text-slate-600 text-4xl ">{letter}</p>
               </div>)
            })}
        </div>
    )
}

export default Guess

