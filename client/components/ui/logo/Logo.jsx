import Image from "next/image";

import rockImg from "../../../public/images/icon-rock.svg";
import paperImg from "../../../public/images/icon-paper.svg";
import scissorImg from "../../../public/images/icon-scissors.svg";

const Logo = () => {
  return (
    <div className="flex">
      <div className="bg-colorCyan relative mt-2 flex h-16 w-16  -rotate-12 items-center  justify-center  rounded-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white py-2">
          <Image className="w-8" src={rockImg} alt="rock" priority={true} />
        </div>
      </div>
      <div className="bg-colorCyan relative z-10 -ml-4 flex h-16 w-16 items-center justify-center rounded-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white py-2">
          <Image className="w-8" src={paperImg} alt="rock" priority={true} />
        </div>
      </div>
      <div className="bg-colorCyan relative mt-2 -ml-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white py-2">
          <Image className="w-8" src={scissorImg} alt="rock" priority={true} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
