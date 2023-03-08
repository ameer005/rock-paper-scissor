import Image from "next/image";
import rockImg from "../../../public/images/icon-rock.svg";
import paperImg from "../../../public/images/icon-paper.svg";
import scissorImg from "../../../public/images/icon-scissors.svg";

const OptionButton = ({
  icon,
  outerDim = "h-48 w-48 lg:h-44 lg:w-44 md:h-36 md:w-36 sm:h-[8.5rem] sm:w-[8.5rem]",
  innerDim = "h-36 w-36 lg:h-[8.4rem] lg:w-[8.4rem] md:w-[6.8rem] md:h-[6.8rem] sm:w-[6.4rem] sm:h-[6.4rem]",
  iconWidth = "w-16 lg:w-14 md:w-12 sm:w-11",
  globalStyle,
}) => {
  const iconFnc = () => {
    if (icon === "rock") return rockImg;
    if (icon === "paper") return paperImg;
    return scissorImg;
  };

  const renderGradient = () => {
    if (icon === "rock") return "rock-gradient ";
    if (icon === "paper") return "paper-gradient";
    return "scissor-gradient";
  };

  return (
    <div
      className={`bg-colorCyan ut-animation  relative  mt-2 flex ${outerDim} ${renderGradient()} ${globalStyle} items-center justify-center  rounded-full`}
    >
      <div
        className={`flex ${innerDim} shadow_3d items-center justify-center rounded-full bg-white py-2`}
      >
        <Image
          className={`${iconWidth}`}
          src={iconFnc()}
          alt="rock"
          priority={true}
        />
      </div>
    </div>
  );
};

export default OptionButton;
