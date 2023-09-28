import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const $nav = document.querySelector(`.${style.nav}`);
    $nav.classList.toggle(`${style.fixed}`, window.scrollY > innerHeight);
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
        <ul className={style.ulNav}>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("home");
            }}
          >
            Home
          </Link>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("about");
            }}
          >
            About me
          </Link>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("portfolio");
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/"
            className={style.link}
            onClick={() => {
              scrollTo("contact");
            }}
          >
            Contact
          </Link>
        </ul>
        <div className={style.logo}>
          <img className={style.logo} src="coding.svg" alt="logo" />
        </div>
        <button className="md:hidden">
          <RxHamburgerMenu />
          <AiOutlineClose />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
