import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
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
        <ul className="w-[60%] md:flex justify-center items-center gap-20 hidden">
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
        <div className="w-[40%] h-[6vh] flex justify-start md:justify-end md:mr-6 lg:justify-center items-center">
          <img src="coding.svg" alt="logo" className="w-8" />
          <small className="text-white">FranCodeDev</small>
        </div>

        <button
          className="md:hidden pr-3 absolute top-3 right-2"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineClose className="w-8 h-8 font-bold text-black" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8 font-bold text-black " />
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
          <div className="mt-10 flex justify-center items-center gap-10 text-white">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/francisco-villarroel-2945a1260/"
            >
              <BsLinkedin className="text-3xl" />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/franjavi8776"
            >
              <AiFillGithub className="text-3xl" />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/channel/UCy7GoxzJFo797bSRGK5ijiQ"
            >
              <BsYoutube className="text-3xl" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/channel/UCy7GoxzJFo797bSRGK5ijiQ"
            >
              <AiOutlineMail className="text-3xl" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
