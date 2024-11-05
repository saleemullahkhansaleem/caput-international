import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeToggle } from ".";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header className="bg-background/70 text-foreground sticky top-0 shadow-md z-20 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        <div className="text-lg md:text-3xl font-bold text-foreground">
          <Link to="/" className="flex items-end gap-2">
            <img
              src="/logo.png"
              alt="logo"
              height={100}
              className="h-12 md:h-16"
            />{" "}
            <span className="pb-1 md:pb-2">CAPUT International</span>
          </Link>
        </div>
        
        <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
