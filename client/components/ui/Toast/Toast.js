import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import useStore from "@/store/useStore";

const Toast = ({}) => {
  const setModalState = useStore((state) => state.setModalState);
  const toastProperties = useStore((state) => state.toastProperties);

  const toastState =
    toastProperties.type === "error"
      ? "bg-red-100 text-red-400"
      : "bg-green-400 text-colorWhite";

  useEffect(() => {
    setTimeout(() => {
      setModalState({ showToastModal: false });
    }, 2300);
  }, []);

  return (
    <div
      className={`fixed top-6 left-[50%]  z-[1000] w-full max-w-[25rem] -translate-x-[50%] rounded-md px-5 py-3  sm:max-w-[20rem] sm:px-3 ${toastState} shadow-md`}
    >
      <div className="flex items-center">
        <div className=" flex-1 text-sm font-medium">
          {toastProperties.message}
        </div>
        <button
          className="ml-2"
          onClick={() => setModalState({ showToastModal: false })}
        >
          <AiFillCloseCircle className="cursor-pointer text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
