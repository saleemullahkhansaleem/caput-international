import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      className={`max-w-[100vw] overflow-hidden dark:text-white ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </main>
  );
}
