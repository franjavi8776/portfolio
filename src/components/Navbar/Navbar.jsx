import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useLanguage } from "../Translate/LanguageContext";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language, translations } = useLanguage();

  const links = [
    { id: "home", label: translations[language]?.nav.home },
    { id: "portfolio", label: translations[language]?.nav.portfolio },
    { id: "about", label: translations[language]?.nav.about },
    { id: "contact", label: translations[language]?.nav.contact },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 w-full h-[6vh] bg-[#e31b6d] z-10 border-b border-1 border-b-black">
      <nav id="nav" className="flex h-[6vh]">
        <ul className="w-[60%] h-[6vh] md:flex justify-center items-center gap-20 hidden md:ml-6 lg:ml-0">
          {links.map(({ id, label }) => (
            <Link
              key={id}
              to="/"
              className="text-lg text-white hover:text-black"
              onClick={() => {
                scrollTo(id);
              }}
            >
              {label}
            </Link>
          ))}
        </ul>
        <div className="w-[40%] h-[6vh] flex justify-start items-center md:justify-end md:mr-6 lg:mr-0 lg:justify-center ">
          <img src="coding.svg" alt="logo" className="w-8" />
          <small className="text-white">FranCodeDev</small>
        </div>

        <button
          className="h-[6vh] md:hidden absolute right-2 flex items-center"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineClose className="w-8 h-8 font-bold text-white" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8 font-bold text-white" />
          )}
        </button>
      </nav>
      {isMobile && (
        <div className="bg-[#e31b6d] w-full py-4">
          <ul className="grid grid-cols-1 gap-10 px-4 text-center">
            {links.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to="/"
                  className="text-lg text-white hover:text-black"
                  onClick={() => {
                    scrollTo(id);
                    setIsMobile(false);
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
