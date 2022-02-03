import { Dialog } from "@headlessui/react";

const Modal = ({ isOpen, setIsOpen, gameResult, word, newGame }) => {

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed z-10 inset-0 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen ">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className="relative bg-white rounded max-w-sm mx-auto p-8">
                    <Dialog.Title className="text-xl">
                        You {gameResult}!
                    </Dialog.Title>
                    <Dialog.Description className="text-sm mt-2">
                        The word was <em>{word.word.toUpperCase()}</em>.<br />
                    </Dialog.Description>
                   <p className="text-sm mt-2">{word.definitions[0].definition}</p> 
                    <button
                        className="border-black border-solid border text-lg rounded mx-1 mt-4 py-1 px-2"
                        onClick={() => {
                            setIsOpen(false);
                            newGame();
                            
                        }}
                    >
                        Play Again
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
