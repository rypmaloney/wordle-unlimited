import { Dialog } from '@headlessui/react';

const Modal = ({ isOpen, setIsOpen, gameResult, word }) => {

    const reload = () =>{
        window.location.relaod(false)
    }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen ">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-sm mx-auto p-8">
          <Dialog.Title className="text-xl">You {gameResult}!</Dialog.Title>
          <Dialog.Description className="text-xl">
            <p> The word was {word.word.toUpperCase()}. </p>
            <p>{word.definitions[0].definition}.</p>
          </Dialog.Description>
          <button
            className="border-black border-solid border text-lg rounded mx-1 mt-4 py-1 px-2"
            onClick={() => {

            setIsOpen(false)
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