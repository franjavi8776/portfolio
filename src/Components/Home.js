import "./Home.css";

export const Home = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div id="home">
      <div className="home-container">
        <aside className="home-content">
          <h1>
            Hello, I'm <b>Francisco Villarroel</b>
          </h1>
          <h1>I'm a Full-Stack web developer</h1>
          <button
            className="home-button"
            to="/"
            onClick={() => scrollTo("nav")}
          >
            <div className="arrow-button">
              <img src="right-arrow.svg" alt="arrow" />
            </div>
            View my work
          </button>
        </aside>
      </div>
    </div>
  );
};
