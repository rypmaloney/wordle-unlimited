import { Dialog } from "@headlessui/react";

const StatsModal = ({ isOpen, setIsOpen, stats }) => {

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
                    <p className="text-sm"><strong>Wins: </strong> {stats.wins} ({Math.round(stats.wins/stats.gamesPlayed * 100)}%)</p>
                    <p className="text-lg mt-4 bolder">Win Distribution:</p>
                    <p className="text-sm"><strong>Guess 1:</strong>  {Math.round(stats.guessOneWins/stats.gamesPlayed * 100)}%</p>
                    <p className="text-sm"><strong>Guess 2:</strong>    {Math.round(stats.guessTwoWins/stats.gamesPlayed * 100)}%</p>
                    <p className="text-sm"><strong>Guess 3:</strong>    {Math.round(stats.guessThreeWins/stats.gamesPlayed * 100)}%</p>
                    <p className="text-sm"> <strong>Guess 4:</strong>    {Math.round(stats.guessFourWins/stats.gamesPlayed * 100)}%</p>
                    <p className="text-sm"> <strong>Guess 5:</strong>    {Math.round(stats.guessFiveWins/stats.gamesPlayed * 100)}%</p>
                    <p className="text-sm"><strong>Guess 6:</strong>   {Math.round(stats.guessSixWins/stats.gamesPlayed * 100)}%</p>
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
