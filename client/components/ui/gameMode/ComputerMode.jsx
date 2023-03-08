import { useState, useEffect } from "react";

import BoardHeader from "@/components/specifics/gameModeComps/BoardHeader";
import OptionButton from "@/components/specifics/gameModeComps/OptionButton";
import GameControls from "@/components/specifics/gameModeComps/GameControls";
import options from "../../../utils/options";
import youWin from "@/utils/youWin";
import GameOverModal from "@/components/modals/GameOverModal";

const ComputerMode = () => {
  const [yourWins, setYourWins] = useState([]);
  const [opponentWins, setOpponentWins] = useState([]);
  const [yourChoice, setYourChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [currentWinner, setCurrentWinner] = useState(null);
  const [overallWinner, setOverallWinner] = useState(null);

  useEffect(() => {
    if (yourWins.length === 3) {
      setOverallWinner("you");
      return;
    }
    if (opponentWins.length === 3) {
      setOverallWinner("opponent");
      return;
    }
  }, [yourWins, opponentWins]);

  useEffect(() => {
    if (yourChoice === null || opponentChoice === null) return;
    roundWinner();

    setTimeout(() => {
      resetRound();
    }, 1500);
  }, [yourChoice, opponentChoice]);

  useEffect(() => {
    if (yourChoice !== null) {
      setTimeout(() => {
        const randomMove = Math.ceil(Math.random() * 3);
        setOpponentChoice(randomMove - 1);
      }, 1000);
    }
  }, [yourChoice]);

  const roundWinner = () => {
    const isYouWinner = youWin(yourChoice, opponentChoice);
    if (isYouWinner === -1) {
      setCurrentWinner("tie");
    } else if (isYouWinner) {
      setCurrentWinner("you");
      setYourWins((prev) => [...prev, true]);
    } else {
      setCurrentWinner("opponent");
      setOpponentWins((prev) => [...prev, true]);
    }
  };

  const resetRound = () => {
    setCurrentWinner(null);
    setYourChoice(null);
    setOpponentChoice(null);
  };

  const resetGame = () => {
    setCurrentWinner(null);
    setYourChoice(null);
    setOpponentChoice(null);
    setOverallWinner(null);
    setYourWins([]);
    setOpponentWins([]);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-16 sm:mb-6 lg:mb-12">
        <BoardHeader
          yourWins={yourWins}
          opponentWins={opponentWins}
          opponentTag="Computer"
        />
      </div>

      <div className="flex h-[25.5rem] justify-center">
        {yourChoice === null ? (
          // Game Controls
          <GameControls setYourChoice={setYourChoice} />
        ) : (
          <div className="relative flex h-full w-full max-w-[45rem] items-center justify-center gap-36 sm:justify-between sm:gap-0 sm:px-4 lg:gap-24">
            <div>
              <OptionButton
                icon={options[yourChoice]}
                globalStyle={"scale-150 lg:scale-125 sm:scale-105"}
              />
            </div>

            {opponentChoice === null ? (
              <div className="">
                <div className="bg-colorText waiting h-44 w-44 rounded-full sm:h-28 sm:w-28 md:h-40 md:w-40"></div>
              </div>
            ) : (
              <div
                className={`transition-all duration-[.8s] ${
                  currentWinner && "ml-56 md:ml-0 lg:ml-32 "
                }`}
              >
                <OptionButton
                  icon={options[opponentChoice]}
                  globalStyle={"scale-150 lg:scale-125 sm:scale-105"}
                />
              </div>
            )}

            {/* reault declaration block */}
            <div
              className={`ut-animation shadow-colorCyan2/75  absolute top-[50%] left-[50%] z-20 w-[11rem] -translate-y-[50%] -translate-x-[50%]
              rounded-md bg-white py-2 text-center text-3xl font-bold uppercase text-black shadow-md delay-300
              ${
                currentWinner
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              } md:top-[22rem] md:-translate-y-0 lg:w-[9rem] lg:text-xl`}
            >
              {currentWinner === "you" && "YOU WIN"}
              {currentWinner === "opponent" && "YOU LOOSE"}
              {currentWinner === "tie" && "tie"}
            </div>
          </div>
        )}
      </div>

      {overallWinner && (
        <GameOverModal overallWinner={overallWinner} resetGame={resetGame} />
      )}
    </div>
  );
};

export default ComputerMode;
