import styles from "@/styles/Home.module.css";
import TopLine from "./TopLine";
import LogoBar from "./LogoBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <TopLine />
      <LogoBar />
      <Navbar />
    </header>
  );
};

export default Header;
