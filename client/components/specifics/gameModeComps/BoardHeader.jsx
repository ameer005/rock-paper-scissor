import Logo from "../../ui/logo/Logo";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const BoardHeader = ({ yourWins, opponentWins, opponentTag }) => {
  const renderStars = (arr) => {
    return Array(3)
      .fill(null)
      .map((_, index) => {
        return arr[index] ? (
          <AiFillStar key={index} className="h-7 w-7 sm:h-6 sm:w-6" />
        ) : (
          <AiOutlineStar key={index} className="h-7 w-7 sm:h-6 sm:w-6" />
        );
      });
  };

  return (
    <div className="flex items-center gap-4 lg:gap-2">
      <div className="border-colorText flex flex-1 justify-center rounded-lg border-2 py-6 sm:py-4">
        <div className="flex flex-col items-center gap-2 text-xl font-semibold sm:text-lg">
          <div>You</div>
          <div className="flex gap-2">{renderStars(yourWins)}</div>
        </div>
      </div>
      <div className="lg:hidden">
        <Logo />
      </div>
      <div className="border-colorText flex flex-1 justify-center rounded-lg border-2 py-6 sm:py-4">
        <div className="flex flex-col items-center gap-2 text-xl font-semibold sm:text-lg">
          <div>{opponentTag}</div>
          <div className="flex gap-2">{renderStars(opponentWins)}</div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;
