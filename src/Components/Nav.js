import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  // const menu = document.querySelector(".ul-nav");

  window.addEventListener("scroll", () => {
    const $nav = document.querySelector(".nav");
    $nav.classList.toggle("fixed", window.scrollY > 900);
  });

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
        <div className="btn-open">
          <TfiMenu
            onClick={(e) => {
              //menu.classList.toggle("is-active");
            }}
          />
        </div>
      </nav>
    </div>
  );
};
