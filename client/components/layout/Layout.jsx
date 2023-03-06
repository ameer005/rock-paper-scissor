import { Barlow_Semi_Condensed } from "next/font/google";
import useStore from "@/store/useStore";
import Toast from "../ui/Toast/Toast";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
});

const Layout = ({ children }) => {
  const showToastModal = useStore((state) => state.showToastModal);
  return (
    <>
      <div
        className={`${barlow.variable} font-barlow bg-gradient min-h-screen text-sm text-white`}
      >
        <main>{children}</main>
      </div>
      {showToastModal && <Toast />}
    </>
  );
};

export default Layout;
