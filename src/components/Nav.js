import ModeToggle from "./ModeToggle";


const Nav = (props) => {
    const {darkEnabled, setDarkEnabled, newGame, setStatsModalIsOpen} = props


    return (
        <div>
            <div className="bg-slate-600 w-full h-10 flex pl-2">
                <ModeToggle darkEnabled={darkEnabled} setDarkEnabled={setDarkEnabled} />

                <button className="text-sm text-white mr-1 my-1 rounded w-24 bg-slate-500 ml-auto align-right" onClick={()=>{setStatsModalIsOpen(true)}}>Stats</button>
                <button className="text-sm text-white mx-8 my-1 rounded w-24 bg-slate-500"onClick={ ()=>newGame()}>New Game</button>

               
            </div>
        </div>
    );
};

export default Nav;
