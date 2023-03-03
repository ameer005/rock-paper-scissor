import { Barlow_Semi_Condensed } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`${barlow.variable} font-barlow bg-gradient min-h-screen text-sm text-white`}
    >
      <main>{children}</main>
    </div>
  );
};

export default Layout;
