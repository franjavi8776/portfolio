import { Link } from "react-router-dom";
import hamburguer from "./btnAmburguer";
import "./Nav.css";

export const Nav = () => {
  window.addEventListener("scroll", () => {
    const $nav = document.querySelector(".nav");
    $nav.classList.toggle("fixed", window.scrollY > 900);
  });

  hamburguer(".btn-open", ".ul-nav", ".link");

  // document.addEventListener("click", (e) => {
  //   const btn = document.querySelector(".btn-open");
  //   const menu = document.querySelector(".ul-nav");
  //   if (e.target.matches(btn)) {
  //     menu.classList.toggle("is-active");
  //   }
  // });

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
              //menu.classList.toggle("is-active");
            }}
          >
            HOME
          </Link>
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("about");
              //menu.classList.toggle("is-active");
            }}
          >
            ABOUT
          </Link>
          <Link
            to="/"
            className="link"
            onClick={() => {
              scrollTo("contact");
              //menu.classList.toggle("is-active");
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
