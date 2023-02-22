import { Link } from "react-router-dom";
import hamburguer from "./btnAmburguer";
import "./Nav.css";

export const Nav = () => {
  window.addEventListener("scroll", () => {
    const $nav = document.querySelector(".nav");
    $nav.classList.toggle("fixed", window.scrollY > 900);
  });

  hamburguer(".btn-open", ".ul-nav", ".link");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="container-nav">
      <nav id="nav" className="nav">
        <ul className="ul-nav">
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("home");
            }}
          >
            HOME
          </Link>
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("about");
            }}
          >
            ABOUT
          </Link>
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("portfolio");
            }}
          >
            PORTFOLIO
          </Link>
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("blog");
            }}
          >
            BLOG
          </Link>
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("contact");
            }}
          >
            CONTACT
          </Link>
        </ul>
        <div className="logo">
          <img className="logo" src="coding.svg" alt="logo" />
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
