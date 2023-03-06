import Image from "next/image";
import triangleImg from "../../../public/images/bg-triangle.svg";
import OptionButton from "@/components/specifics/gameModeComps/OptionButton";

const GameControls = ({ setYourChoice }) => {
  return (
    <div className="relative h-full w-full max-w-[45rem]">
      <Image
        className="absolute top-[50%] left-[50%] w-72  -translate-x-[50%]  -translate-y-[50%]"
        src={triangleImg}
        priority={true}
        alt="triangle"
      />
      <button onClick={() => setYourChoice(1)} className="absolute left-[18%]">
        <OptionButton icon={"paper"} globalStyle={"hover:scale-105"} />
      </button>

      <button onClick={() => setYourChoice(2)} className="absolute right-[18%]">
        <OptionButton icon={"scissor"} globalStyle={"hover:scale-105"} />
      </button>

      <button
        onClick={() => setYourChoice(0)}
        className="absolute bottom-0 left-[50%] -translate-x-[50%] "
      >
        <OptionButton icon={"rock"} globalStyle={" hover:scale-105"} />
      </button>
    </div>
  );
};

export default GameControls;
