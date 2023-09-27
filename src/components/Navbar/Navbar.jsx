import { Link } from "react-router-dom";
import hamburguer from "./btnHamburger";
import style from "./navbar.module.css";
// import "./Nav.scss";
const Navbar = () => {
  window.addEventListener("scroll", () => {
    const $nav = document.querySelector(`.${style.nav}`);
    $nav.classList.toggle(`${style.fixed}`, window.scrollY > 900);
  });

  hamburguer(".btn-open", ".ul-nav", ".link");

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
        <button class="btn-open hamburger hamburger--vortex" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
