import Image from "next/image";
import rockImg from "../../../public/images/icon-rock.svg";
import paperImg from "../../../public/images/icon-paper.svg";
import scissorImg from "../../../public/images/icon-scissors.svg";

const OptionButton = ({
  icon,
  outerDim = "h-48 w-48",
  innerDim = "h-36 w-36",
  iconWidth = "w-16",
  globalStyle,
}) => {
  const iconFnc = () => {
    if (icon === "rock") return rockImg;
    if (icon === "paper") return paperImg;
    return scissorImg;
  };

  const renderGradient = () => {
    if (icon === "rock") return "rock-gradient";
    if (icon === "paper") return "paper-gradient";
    return "scissor-gradient";
  };

  return (
    <div
      className={`bg-colorCyan ut-animation relative mt-2 flex ${outerDim} ${renderGradient()} ${globalStyle} items-center  justify-center  rounded-full`}
    >
      <div
        className={`flex ${innerDim} items-center justify-center rounded-full bg-white py-2`}
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
