import useStore from "@/store/useStore";

import Logo from "../logo/Logo";

const Menu = () => {
  const setOptions = useStore((state) => state.setOptions);
  return (
    <div className="flex h-full items-center justify-center ">
      <div className="flex w-full max-w-[30rem] flex-col items-center rounded-lg bg-white py-8 px-5">
        <div className="mb-14">
          <Logo />
        </div>

        <div className="flex gap-3 text-lg font-medium">
          <button
            onClick={() => setOptions({ gameMode: "computer" })}
            className="bg-colorBlue hover:bg-colorBlue2 ut-animation  w-[10rem] rounded-lg py-3"
          >
            Computer
          </button>
          <button
            onClick={() => setOptions({ gameMode: "pvp" })}
            className="bg-colorBlue hover:bg-colorBlue2 ut-animation  w-[10rem] rounded-lg py-3"
          >
            PvP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
