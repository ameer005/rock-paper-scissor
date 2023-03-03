import { useState, useEffect } from "react";

import BoardHeader from "@/components/specifics/gameModeComps/BoardHeader";
import OptionButton from "@/components/specifics/gameModeComps/OptionButton";
import GameControls from "@/components/specifics/gameModeComps/GameControls";
import options from "../../../utils/options";

const ComputerMode = () => {
  const [yourWins, setYourWins] = useState([]);
  const [opponentWins, setOpponentWins] = useState([]);
  const [yourChoice, setYourChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [currentWinner, setCurrentWinner] = useState(null);
  const [overallWinner, setOverallWinner] = useState(null);

  useEffect(() => {
    const randomMove = Math.ceil(Math.random() * 3);
    setOpponentChoice(randomMove - 1);
  }, [yourChoice]);

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
          <div className="relative flex h-full w-full max-w-[45rem] items-center justify-center gap-24">
            <div>
              <OptionButton
                icon={options[yourChoice]}
                globalStyle={"scale-125"}
              />
            </div>

            {opponentChoice === null ? (
              <div className="">
                <div className="bg-colorText waiting rounded-full"></div>
              </div>
            ) : (
              <div className={`transition-all duration-[.8s] `}>
                <OptionButton
                  icon={options[opponentChoice]}
                  globalStyle={"scale-125"}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComputerMode;
