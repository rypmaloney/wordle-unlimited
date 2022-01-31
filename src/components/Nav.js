import ModeToggle from "./ModeToggle";


const Nav = (props) => {
    const {darkEnabled, setDarkEnabled} = props


    return (
        <div>
            <div className="bg-slate-600 w-full h-8">
                <ModeToggle darkEnabled={darkEnabled} setDarkEnabled={setDarkEnabled} />
                <div className="text-xl text-white w-6 h-6 rounded border-2 border-white p-2">
                    ?
                </div>
            </div>
        </div>
    );
};

export default Nav;
