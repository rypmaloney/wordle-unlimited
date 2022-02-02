import { Dialog } from "@headlessui/react";

const StatsModal = ({ isOpen, setIsOpen, stats }) => {

    function percentWin(roundWins){
        return Math.round(roundWins/stats.gamesPlayed * 100)
    }


    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed z-10 inset-0 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen ">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className="relative bg-white rounded max-w-sm mx-auto p-8">
                    <Dialog.Title className="text-2xl w-44 text-center text-lime-700">
                        Wordle Stats
                    </Dialog.Title>

                    <p className="text-sm mt-4"><strong>Games Played: </strong> {stats.gamesPlayed}</p>
                    <p className="text-sm"><strong>Wins: </strong> {stats.wins} ( {percentWin(stats.wins) ? percentWin(stats.wins) : 0 }) %</p>
                    <p className="text-lg mt-4 bolder">Win Distribution:</p>
                    <p className="text-sm"><strong>Guess 1:</strong>  {percentWin(stats.guessOneWins) ? percentWin(stats.guessOneWins): 0}%</p>
                    <p className="text-sm"><strong>Guess 2:</strong>    {percentWin(stats.guessTwoWins) ? percentWin(stats.guessTwoWins): 0}%</p>
                    <p className="text-sm"><strong>Guess 3:</strong>    {percentWin(stats.guessThreeWins) ? percentWin(stats.guessThreeWins): 0}%</p>
                    <p className="text-sm"> <strong>Guess 4:</strong>    {percentWin(stats.guessFourWins) ? percentWin(stats.guessFourWins): 0}%</p>
                    <p className="text-sm"> <strong>Guess 5:</strong>    {percentWin(stats.guessFiveWins) ? percentWin(stats.guessFiveWins): 0}%</p>
                    <p className="text-sm"><strong>Guess 6:</strong>   {percentWin(stats.guessSixWins) ? percentWin(stats.guessSixWins): 0}%</p>
                    <p className="text-sm"><strong>Loss:</strong>   {percentWin(stats.loss) ? percentWin(stats.loss): 0}%</p>
                    <button
                        className="border-black border-solid border text-lg rounded mx-1 mt-4 py-1 px-2"
                        onClick={() => {
                            setIsOpen(false);

                            
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default StatsModal;
