import Logo from "../../ui/logo/Logo";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const BoardHeader = ({ yourWins, opponentWins, opponentTag }) => {
  const renderStars = (arr) => {
    return Array(3)
      .fill(null)
      .map((_, index) => {
        return arr[index] ? (
          <AiFillStar
            key={index}
            className="h-7 w-7 text-white sm:h-6 sm:w-6"
          />
        ) : (
          <AiOutlineStar
            key={index}
            className="text-colorText3 h-7 w-7 sm:h-6 sm:w-6"
          />
        );
      });
  };

  return (
    <div className="border-colorText3/30 flex items-center justify-between gap-4 rounded-xl border-[3.5px]  py-6 px-10 shadow-lg shadow-black/10 sm:px-6 lg:gap-2">
      <div className="flex flex-col items-center gap-2 text-xl font-medium sm:text-lg">
        <div>You</div>
        <div className="flex gap-2">{renderStars(yourWins)}</div>
      </div>

      {/* <div className="lg:hidden">
        <Logo />
      </div> */}

      <div className="flex flex-col items-center gap-2 text-xl font-medium sm:text-lg">
        <div>{opponentTag}</div>
        <div className="flex gap-2">{renderStars(opponentWins)}</div>
      </div>
    </div>
  );
};

export default BoardHeader;
