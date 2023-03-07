import useStore from "@/store/useStore";
import { useState, useEffect } from "react";
import LoadingCircle from "../LoadingSpinners/LoadingCircle";
import Logo from "../logo/Logo";

import { BiArrowBack } from "react-icons/bi";

const Room = () => {
  const setOptions = useStore((state) => state.setOptions);
  const setModalState = useStore((state) => state.setModalState);
  const setDataState = useStore((state) => state.setDataState);
  const roomId = useStore((state) => state.roomId);
  const socket = useStore((state) => state.socket);
  const [optionState, setOptionState] = useState(null);
  const [id, setId] = useState("");

  // creating room
  useEffect(() => {
    if (optionState === "create") {
      socket.emit("create-room", roomId);
      socket.on("joined", (data) => {
        if (data) setOptions({ roomJoined: true });
      });
    }
  }, [optionState]);

  const createRoom = () => {
    const roomId = crypto.randomUUID().split("-")[0];
    setDataState({ roomId: roomId });
  };

  const joinRoom = (e) => {
    e.preventDefault();
    if (!id) return;

    socket.emit("join-room", id, (data) => {
      if (data.status === "success") {
        setDataState({ roomId: id });
        setOptions({ roomJoined: true });
      } else {
        setModalState({
          showToastModal: true,
          toastProperties: {
            type: "error",
            message: data.message,
          },
        });
        setId("");
      }
    });
  };

  return (
    <div className="text-colorText flex h-full items-center justify-center">
      <div className="relative flex w-full max-w-[30rem] flex-col items-center rounded-lg bg-white py-8 px-5">
        {!optionState && (
          <>
            <div className="mb-14 sm:mb-10">
              <Logo />
            </div>
            <div className="flex gap-3 text-lg font-medium text-white">
              <button
                onClick={() => {
                  createRoom();
                  setOptionState("create");
                }}
                className="bg-colorBlue hover:bg-colorBlue2 ut-animation  w-[10rem] rounded-lg py-3 sm:w-[8rem]"
              >
                Create room
              </button>
              <button
                onClick={() => setOptionState("join")}
                className="bg-colorBlue hover:bg-colorBlue2 ut-animation  w-[10rem] rounded-lg py-3 sm:w-[8rem]"
              >
                Join room
              </button>
            </div>
          </>
        )}

        {optionState === "create" && (
          <div className="flex flex-col  items-center gap-4">
            <div className="text-2xl font-semibold">{`Room Id: ${roomId}`}</div>

            <div className="flex flex-col gap-2 text-lg">
              <div>Waiting for player to join</div>
              <LoadingCircle />
            </div>
          </div>
        )}

        {optionState === "join" && (
          <div className="flex flex-col  items-center gap-8">
            <div className="text-2xl font-semibold">{`Join room`}</div>

            <form onSubmit={joinRoom} className="flex gap-2 text-lg">
              <label className="w-full max-w-[15rem]">
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  type="text"
                  className="border-colorText3 w-full rounded-md border px-2 py-1 outline-none"
                />
              </label>

              <button className="bg-colorBlue rounded-md py-1 px-4 font-medium text-white">
                Join
              </button>
            </form>
          </div>
        )}

        {/* back button */}
        <button
          onClick={() => {
            if (optionState !== null) {
              setOptionState(null);
              setDataState({ roomId: null });
            } else setOptions({ gameMode: null });
          }}
          className="absolute top-4 left-3"
        >
          <BiArrowBack className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
};

export default Room;
