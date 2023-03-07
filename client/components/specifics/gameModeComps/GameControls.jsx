import Image from "next/image";
import triangleImg from "../../../public/images/bg-triangle.svg";
import OptionButton from "@/components/specifics/gameModeComps/OptionButton";

const GameControls = ({ setYourChoice }) => {
  return (
    <div className="relative h-full w-full max-w-[45rem]">
      <Image
        className="absolute top-[50%] left-[50%] w-72 -translate-x-[50%] -translate-y-[50%] sm:w-52  md:top-16 md:w-60  md:-translate-y-0"
        src={triangleImg}
        priority={true}
        alt="triangle"
      />
      <button
        onClick={() => setYourChoice(1)}
        className="absolute right-[55%] sm:right-[55%]"
      >
        <OptionButton icon={"paper"} globalStyle={"hover:scale-105"} />
      </button>

      <button
        onClick={() => setYourChoice(2)}
        className="absolute left-[55%] sm:left-[55%]"
      >
        <OptionButton icon={"scissor"} globalStyle={"hover:scale-105"} />
      </button>

      <button
        onClick={() => setYourChoice(0)}
        className="absolute bottom-0 left-[50%] -translate-x-[50%] sm:top-[5%] md:top-[20%] "
      >
        <OptionButton icon={"rock"} globalStyle={" hover:scale-105"} />
      </button>
    </div>
  );
};

export default GameControls;
