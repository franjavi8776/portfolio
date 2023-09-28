import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    const $nav = document.querySelector(`.${style.nav}`);
    if ($nav) {
      window.addEventListener("scroll", () => {
        $nav.classList.toggle(`${style.fixed}`, window.scrollY > innerHeight);
      });
    }
  });

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={style.containerNav}>
      <nav id="nav" className={style.nav}>
        <ul className={`${style.ulNav} ${mobileMenuOpen ? style.isOpen : ""}`}>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("home");
              setMobileMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("about");
              setMobileMenuOpen(false);
            }}
          >
            About me
          </Link>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("portfolio");
              setMobileMenuOpen(false);
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("contact");
              setMobileMenuOpen(false);
            }}
          >
            Contact
          </Link>
        </ul>
        <div className={style.logo}>
          <img className={style.logo} src="coding.svg" alt="logo" />
        </div>
        <button
          className="md:hidden pr-3 absolute top-3 right-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <AiOutlineClose className="w-8 h-8 font-bold text-pink-600" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8 font-bold text-pink-600 " />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
