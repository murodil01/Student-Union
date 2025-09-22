// import { useEffect, useState } from "react";
// import logo from "../../assets/logo.svg";
// import locationn from "../../assets/locationn.svg";
// import { FaPhone } from "react-icons/fa6";
// import { Menu, Moon, X } from "lucide-react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { PiSunDimFill } from "react-icons/pi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [hasShadow, setHasShadow] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Dark mode initialization
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDark(true);
//     }
//   };

//   // Scroll listener (shadow uchun)
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setHasShadow(true);
//       } else {
//         setHasShadow(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Debug va scroll function
//   const scrollToSection = (sectionId) => {
//     console.log("Scrolling to:", sectionId); // Debug uchun

//     const scrollToElement = () => {
//       const element = document.getElementById(sectionId);
//       console.log("Element found:", element); // Debug uchun

//       if (element) {
//         const navbarHeight = 100;
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition =
//           elementPosition + window.pageYOffset - navbarHeight;

//         console.log("Scrolling to position:", offsetPosition); // Debug uchun

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: "smooth",
//         });
//       } else {
//         console.log("Element not found with id:", sectionId);
//         // Elementni topshirish uchun yana bir urinish
//         setTimeout(() => {
//           const retryElement = document.getElementById(sectionId);
//           if (retryElement) {
//             const navbarHeight = 100;
//             const elementPosition = retryElement.getBoundingClientRect().top;
//             const offsetPosition =
//               elementPosition + window.pageYOffset - navbarHeight;

//             window.scrollTo({
//               top: offsetPosition,
//               behavior: "smooth",
//             });
//           }
//         }, 500);
//       }
//     };

//     // Agar boshqa sahifada bo'lsak, avval home ga boramiz
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(scrollToElement, 300);
//     } else {
//       scrollToElement();
//     }

//     setIsOpen(false); // mobile menu yopish
//   };

//   return (
//     <>
//       <div
//         className={`fixed top-0 left-0 right-0 bg-[#F9F9FD] navbar z-50 transition-shadow duration-300 ${
//           hasShadow ? "shadow-md" : ""
//         }`}
//       >
//         <div className="max-w-[1220px] mx-auto px-4 py-[20px] flex md:flex-row items-center justify-between gap-6 relative">
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-[55px] sm:w-[60px] md:w-[65px] lg:w-[80px] h-auto object-contain"
//             />
//           </Link>

//           {/* Right Side */}
//           <div className="flex flex-col gap-[25px] w-full md:w-auto">
//             {/* Top Row */}
//             <div className="flex items-center justify-end gap-[20px] w-full">
//               {/* Phone */}
//               <a
//                 className="flex items-center gap-[8px]  text-[16px] md:text-[18px] font-normal"
//                 href="tel:1234567890"
//               >
//                 <FaPhone size={20} className="text-[#FFB21A]" />
//                 <span className="hidden md:inline">123-456-7890</span>
//               </a>

//               {/* Divider */}
//               <div className="hidden md:block bg-[#FFB21A] w-[3px] h-[30px]"></div>

//               {/* Location */}
//               <img
//                 src={locationn}
//                 alt="Location"
//                 className="w-[30px] md:w-[40px] h-auto"
//               />

//               {/* Dark Mode Toggle */}
//               <button
//                 onClick={toggleDarkMode}
//                 className="relative w-16 h-9 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full p-1 transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFB21A]/50 focus:ring-offset-0 shadow-inner"
//                 aria-label="Toggle dark mode"
//               >
//                 {/* Knob */}
//                 <div
//                   className={`absolute top-1 left-1 w-7 h-7 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center transform transition-all duration-500 ${
//                     isDark
//                       ? "translate-x-7 bg-gradient-to-br from-gray-900 to-black"
//                       : "translate-x-0 bg-gradient-to-br from-yellow-300 to-orange-900"
//                   }`}
//                 >
//                   {isDark ? (
//                     <Moon className="w-4 h-4 text-blue-300" />
//                   ) : (
//                     <PiSunDimFill className="w-4 h-4 text-white drop-shadow-sm" />
//                   )}
//                 </div>

//                 {/* Glow Effect */}
//                 <div
//                   className={`absolute inset-0 rounded-full transition-all duration-500 ${
//                     isDark
//                       ? "bg-gradient-to-r from-blue-800/30 to-purple-700/30"
//                       : "bg-gradient-to-r from-yellow-700/40 to-orange-400/40"
//                   }`}
//                 />
//               </button>

//               {/* Button (desktop only) */}
//               <Link
//                 to={"/participate"}
//                 className="hidden md:block text-[14px] md:text-[16px]  font-normal py-[8px] md:py-[12px] px-[30px] md:px-[50px] rounded-[24px] boglan bg-[#F7F7F7] border border-[#EFEFEF]"
//               >
//                 Bog'lanish
//               </Link>

//               {/* Hamburger (only mobile) */}
//               <button
//                 className="md:hidden text-[#FFB21A] z-50"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>

//             {/* Navbar Menu (desktop) */}
//             <div className="hidden md:block">
//               <ul className="flex flex-wrap items-center justify-center md:justify-start gap-[20px] md:gap-[40px]">
//                 <li>
//                   <Link
//                     to="/"
//                     className="text-[18px] md:text-[24px] font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200"
//                   >
//                     Asosiy
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("about")}
//                     className="text-[18px] md:text-[24px] font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
//                   >
//                     Biz haqimizda
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("service")}
//                     className="text-[18px] md:text-[24px] font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
//                   >
//                     Xizmatlar
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("projects")}
//                     className="text-[18px] md:text-[24px] font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
//                   >
//                     Proyektlar
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("faq")}
//                     className="text-[18px] md:text-[24px] font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
//                   >
//                     Faq
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Overlay */}
//         {isOpen && (
//           <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
//             <ul className="flex flex-col items-center gap-6">
//               <li>
//                 <Link
//                   to="/"
//                   onClick={() => setIsOpen(false)}
//                   className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200"
//                 >
//                   Asosiy
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("about")}
//                   className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
//                 >
//                   Biz haqimizda
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("service")}
//                   className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
//                 >
//                   Xizmatlar
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("projects")}
//                   className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
//                 >
//                   Proyektlar
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("faq")}
//                   className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
//                 >
//                   Faq
//                 </button>
//               </li>
//             </ul>

//             <Link
//               to={"/participate"}
//               onClick={() => setIsOpen(false)}
//               className="text-[16px] boglan font-normal py-[12px] px-[50px] rounded-[24px] bg-[#F7F7F7] border border-[#EFEFEF]"
//             >
//               Bog'lanish
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import locationn from "../../assets/locationn.svg";
import { FaPhone } from "react-icons/fa6";
import { Menu, Moon, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PiSunDimFill } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Yangi state
  const navigate = useNavigate();
  const location = useLocation();

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

  // Scroll listener (shadow va scroll holatini kuzatish uchun)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
        setIsScrolled(true);
      } else {
        setHasShadow(false);
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debug va scroll function
  const scrollToSection = (sectionId) => {
    console.log("Scrolling to:", sectionId);

    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      console.log("Element found:", element);

      if (element) {
        const navbarHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        console.log("Scrolling to position:", offsetPosition);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        console.log("Element not found with id:", sectionId);
        setTimeout(() => {
          const retryElement = document.getElementById(sectionId);
          if (retryElement) {
            const navbarHeight = 100;
            const elementPosition = retryElement.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 500);
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToElement, 300);
    } else {
      scrollToElement();
    }

    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 py-[25px] bg-[#F9F9FD] navbar z-50 transition-all duration-300 ${
          hasShadow ? "shadow-md" : ""
        } ${isScrolled ? "py-2" : ""}`} // padding kamayadi scroll bo'lganda
      >
        <div className="max-w-[1220px] mx-auto  px-4 flex md:flex-row items-center justify-between gap-6 relative">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`h-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? "w-[45px] sm:w-[50px] md:w-[55px] lg:w-[65px]" // Kichikroq scroll holatida
                  : "w-[55px] sm:w-[60px] md:w-[65px] lg:w-[80px]" // Oddiy holatda
              }`}
            />
          </Link>

          {/* Right Side */}
          <div className="flex flex-col gap-[25px] w-full md:w-auto">
            {/* Top Row - Desktop holatida scroll bo'lganda yashiriladi */}
            <div
              className={`md:flex items-center justify-end gap-[20px] w-full transition-all duration-300 ${
                isScrolled
                  ? "hidden md:hidden" // Desktop holatida yashirinadi
                  : "flex" // Normal holatda ko'rinadi
              }`}
            >
              {/* Phone */}
              <a
                className="flex items-center gap-[8px] text-[16px] md:text-[18px] font-normal"
                href="tel:1234567890"
              >
                <FaPhone size={20} className="text-[#FFB21A]" />
                <span className="hidden md:inline">123-456-7890</span>
              </a>

              {/* Divider */}
              <div className=" bg-[#FFB21A] w-[3px] h-[30px]"></div>

              {/* Location */}
              <img
                src={locationn}
                alt="Location"
                className="w-[30px] md:w-[40px] h-auto"
              />

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative w-16 h-9 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full p-1 transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFB21A]/50 focus:ring-offset-0 shadow-inner"
                aria-label="Toggle dark mode"
              >
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
                    <PiSunDimFill className="w-4 h-4 text-white drop-shadow-sm" />
                  )}
                </div>
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
                className="hidden md:block text-[14px] md:text-[16px] font-normal py-[8px] md:py-[12px] px-[30px] md:px-[50px] rounded-[24px] boglan bg-[#F7F7F7] border border-[#EFEFEF]"
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

            {/* Mobile holatda scroll bo'lganda ham ko'rinadigan elementlar */}
            <div
              className={`md:hidden items-center justify-end gap-[20px] w-full transition-all duration-300 ${
                isScrolled ? "flex" : "hidden"
              }`}
            >
              {/* Phone - mobile scroll holatida */}
              <a
                className="flex items-center gap-[8px] text-[16px] font-normal"
                href="tel:1234567890"
              >
                <FaPhone size={20} className="text-[#FFB21A]" />
              </a>

              {/* Divider */}
              <div className=" bg-[#FFB21A] w-[3px] h-[30px]"></div>

              {/* Location */}
              <img
                src={locationn}
                alt="Location"
                className="w-[30px] md:w-[40px] h-auto"
              />

              {/* Dark Mode Toggle - mobile scroll holatida */}
              <button
                onClick={toggleDarkMode}
                className="relative w-16 h-9 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full p-1 transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFB21A]/50 focus:ring-offset-0 shadow-inner"
                aria-label="Toggle dark mode"
              >
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
                    <PiSunDimFill className="w-4 h-4 text-white drop-shadow-sm" />
                  )}
                </div>
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-800/30 to-purple-700/30"
                      : "bg-gradient-to-r from-yellow-700/40 to-orange-400/40"
                  }`}
                />
              </button>

              {/* Hamburger - mobile scroll holatida */}
              <button
                className="text-[#FFB21A] z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Navbar Menu (desktop) - har doim ko'rinadi */}
            <div className="hidden md:block">
              <ul
                className={`flex flex-wrap items-center justify-center md:justify-start transition-all duration-300 ${
                  isScrolled
                    ? "gap-[15px] md:gap-[25px]" // Scroll holatida gap kichikroq
                    : "gap-[20px] md:gap-[40px]" // Normal holatda
                }`}
              >
                <li>
                  <Link
                    to="/"
                    className={`font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 ${
                      isScrolled
                        ? "text-[16px] md:text-[20px]" // Scroll holatida kichikroq
                        : "text-[18px] md:text-[24px]" // Normal holatda
                    }`}
                  >
                    Asosiy
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={`font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0 ${
                      isScrolled
                        ? "text-[16px] md:text-[20px]"
                        : "text-[18px] md:text-[24px]"
                    }`}
                  >
                    Biz haqimizda
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("service")}
                    className={`font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0 ${
                      isScrolled
                        ? "text-[16px] md:text-[20px]"
                        : "text-[18px] md:text-[24px]"
                    }`}
                  >
                    Xizmatlar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className={`font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0 ${
                      isScrolled
                        ? "text-[16px] md:text-[20px]"
                        : "text-[18px] md:text-[24px]"
                    }`}
                  >
                    Proyektlar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className={`font-[400] hover:font-[500] hover:text-[#FFB21A] transition-all duration-200 cursor-pointer bg-transparent border-none p-0 ${
                      isScrolled
                        ? "text-[16px] md:text-[20px]"
                        : "text-[18px] md:text-[24px]"
                    }`}
                  >
                    Faq
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
            <ul className="flex flex-col items-center gap-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200"
                >
                  Asosiy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Biz haqimizda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("service")}
                  className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Xizmatlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Proyektlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-[#323232] text-[22px] font-normal hover:font-[700] transition-all duration-200 bg-transparent border-none cursor-pointer p-0"
                >
                  Faq
                </button>
              </li>
            </ul>

            <Link
              to={"/participate"}
              onClick={() => setIsOpen(false)}
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
