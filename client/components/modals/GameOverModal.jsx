import { createPortal } from "react-dom";
import useStore from "@/store/useStore";

const GameOverModal = ({ overallWinner }) => {
  const setOptions = useStore((state) => state.setOptions);
  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center bg-black/30 px-4 ">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-[30rem] flex-col items-center gap-6 rounded-md bg-white py-7 px-5 "
      >
        <div className="text-4xl font-bold uppercase sm:text-3xl">
          {overallWinner === "you" ? "You win" : "you loose"}
        </div>

        <div>
          <button
            onClick={() => setOptions({ gameMode: null })}
            className="bg-colorText2 hover:bg-colorBlue ut-animation w-[8rem] rounded-md py-3 text-base font-medium text-white"
          >
            Main Menu
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("game-overmodal")
  );
};

export default GameOverModal;
