import ComputerMode from "@/components/ui/gameMode/ComputerMode";
import PvpMode from "@/components/ui/gameMode/PvpMode";
import Menu from "@/components/ui/menu/Menu";
import Room from "@/components/ui/room/Room";
import useStore from "@/store/useStore";

export default function Home() {
  const gameMode = useStore((state) => state.gameMode);
  const roomJoined = useStore((state) => state.roomJoined);

  return (
    <div className="flex justify-center">
      <div className="h-screen w-full max-w-[55rem] py-14">
        {!gameMode ? <Menu /> : null}
        {gameMode == "computer" ? <ComputerMode /> : null}
        {gameMode == "pvp" ? roomJoined ? <PvpMode /> : <Room /> : null}
      </div>
    </div>
  );
}
