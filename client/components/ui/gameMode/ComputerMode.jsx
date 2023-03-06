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

  return (
    <div className="flex h-full flex-col">
      <div className="mb-16">
        <BoardHeader
          yourWins={yourWins}
          opponentWins={opponentWins}
          opponentTag="Computer"
        />
      </div>

      <div className="flex h-full flex-1 justify-center">
        {yourChoice === null ? (
          // Game Controls
          <GameControls setYourChoice={setYourChoice} />
        ) : (
          <div className="relative flex h-full w-full max-w-[45rem] items-center justify-center gap-36">
            <div>
              <OptionButton
                icon={options[yourChoice]}
                globalStyle={"scale-150"}
              />
            </div>

            {opponentChoice === null ? (
              <div className="">
                <div className="bg-colorText waiting rounded-full"></div>
              </div>
            ) : (
              <div
                className={`transition-all duration-[.8s] ${
                  currentWinner && "ml-56"
                }`}
              >
                <OptionButton
                  icon={options[opponentChoice]}
                  globalStyle={"scale-150"}
                />
              </div>
            )}

            {/* reault declaration block */}
            <div
              className={` ut-animation absolute top-[50%] left-[50%] z-20 -translate-y-[50%] -translate-x-[50%] text-4xl font-bold uppercase delay-300  ${
                currentWinner
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {currentWinner === "you" && "YOU WIN"}
              {currentWinner === "opponent" && "YOU LOOSE"}
              {currentWinner === "tie" && "tie"}
            </div>
          </div>
        )}
      </div>

      {overallWinner && <GameOverModal />}
    </div>
  );
};

export default ComputerMode;
