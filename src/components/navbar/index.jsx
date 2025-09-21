import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";
import { FaPhone } from "react-icons/fa6";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Dark mode initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Scroll listener (shadow uchun)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bg-[#F9F9FD] navbar z-50 transition-shadow duration-300 ${
          hasShadow ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-[1220px] mx-auto px-4 py-[20px] flex md:flex-row items-center justify-between gap-6 relative">
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[100px] sm:w-[120px] md:w-[132px] lg:w-[150px] h-auto object-contain"
            />
          </a>

          {/* Right Side */}
          <div className="flex flex-col gap-[32px] w-full md:w-auto">
            {/* Top Row */}
            <div className="flex items-center justify-end gap-[20px] w-full">
              {/* Phone */}
              <a
                className="flex items-center gap-[8px]  text-[16px] md:text-[18px] font-normal"
                href="tel:1234567890"
              >
                <FaPhone size={20} className="text-[#FFB21A]" />
                <span className="hidden md:inline">123-456-7890</span>
              </a>

              {/* Divider */}
              <div className="hidden md:block bg-[#FFB21A] w-[3px] h-[30px]"></div>

              {/* Location */}
              <img
                src={location}
                alt="Location"
                className="w-[30px] md:w-[40px] h-auto"
              />

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative w-16 h-9 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full p-1 transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFB21A]/50 focus:ring-offset-0 shadow-inner"
                aria-label="Toggle dark mode"
              >
                {/* Knob */}
                <div
                  className={`absolute top-1 left-1 w-7 h-7 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center transform transition-all duration-500 ${
                    isDark
                      ? "translate-x-7 bg-gradient-to-br from-gray-900 to-black"
                      : "translate-x-0 bg-gradient-to-br from-yellow-300 to-orange-900"
                  }`}
                >
                  {isDark ? (
                    <Moon className="w-4 h-4 text-blue-300" />
                  ) : (
                    <Sun className="w-4 h-4 text-white drop-shadow-sm" />
                  )}
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-800/30 to-purple-700/30"
                      : "bg-gradient-to-r from-yellow-700/40 to-orange-400/40"
                  }`}
                />
              </button>

              {/* Button (desktop only) */}
              <Link
                to={"/participate"}
                className="hidden md:block text-[14px] md:text-[16px]  font-normal py-[8px] md:py-[12px] px-[30px] md:px-[50px] rounded-[24px] boglan bg-[#F7F7F7] border border-[#EFEFEF]"
              >
                Bog'lanish
              </Link>

              {/* Hamburger (only mobile) */}
              <button
                className="md:hidden text-[#FFB21A] z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Navbar Menu (desktop) */}
            <div className="hidden md:block">
              <ul className="flex flex-wrap items-center justify-center md:justify-start gap-[20px] md:gap-[40px]">
                {[
                  "Asosiy",
                  "Biz haqimizda",
                  "Xizmatlar",
                  "Proyektlar",
                  "Faq",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer  text-[18px] md:text-[24px] font-[400] hover:font-[500] hover:text-[#FFB21A]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
            <ul className="flex flex-col items-center gap-6">
              {[
                "Asosiy",
                "Biz haqimizda",
                "Xizmatlar",
                "Proyektlar",
                "Faq",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-[#323232] text-[22px] font-normal hover:font-[700]"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to={"/participate"}
              className="text-[16px] boglan font-normal py-[12px] px-[50px] rounded-[24px] bg-[#F7F7F7] border border-[#EFEFEF]"
            >
              Bog'lanish
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
