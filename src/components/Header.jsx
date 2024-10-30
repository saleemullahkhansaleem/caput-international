import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-background/70 sticky top-0 shadow-md z-20 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        <div className="text-lg md:text-3xl font-bold text-foregroundMuted">
          <a href="#" className="flex items-end gap-2">
            <img src="/logo.png" alt="logo" height={100} className="h-12 md:h-16" />{" "}
            <span className="pb-1 md:pb-2">CAPUT International</span>
          </a>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
