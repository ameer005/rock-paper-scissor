import useStore from "@/store/useStore";
import { useEffect } from "react";

import Logo from "../logo/Logo";

const Menu = () => {
  const setOptions = useStore((state) => state.setOptions);
  const setDataState = useStore((state) => state.setDataState);
  const roomId = useStore((state) => state.roomId);
  const socket = useStore((state) => state.socket);

  // pvp mode cleanup
  useEffect(() => {
    setOptions({ roomJoined: false });

    if (roomId) {
      socket.emit("leave-room", roomId);
      setDataState({ roomId: null });
    }
  }, []);

  return (
    <div className="flex h-full items-center justify-center ">
      <div className="flex w-full max-w-[30rem] flex-col items-center rounded-lg bg-white py-8 px-5">
        <div className="mb-14 sm:mb-10">
          <Logo />
        </div>

        <div className="flex gap-3 text-lg font-medium">
          <button
            onClick={() => setOptions({ gameMode: "computer" })}
            className="bg-colorBlue hover:bg-colorBlue2 ut-animation w-[10rem]  rounded-lg py-3 sm:w-[8rem]"
          >
            Computer
          </button>
          <button
            onClick={() => setOptions({ gameMode: "pvp" })}
            className="bg-colorBlue hover:bg-colorBlue2 ut-animation w-[10rem]  rounded-lg py-3 sm:w-[8rem]"
          >
            PvP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
