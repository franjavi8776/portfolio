import { useInView } from "react-intersection-observer";
import "./Portfolio.css";
import barbecue from "./assets/img/barbeque.png";
import manguitigre from "./assets/img/manguitigre.png";
import veterinaty from "./assets/img/veterinaty.png";
import horno from "./assets/img/horno.png";

const Portfolio = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div id="portfolio" className="container">
      <h2>PORTFOLIO</h2>
      <section
        className={
          inView
            ? "portfolio-container portfolio-container--zoom"
            : "portfolio-container"
        }
        ref={ref}
      >
        <article className="portfolio-cards">
          <div className="card">
            <img src={barbecue} alt="project 1" />
            <aside className="card-content">
              <div className="card-p">
                <p>
                  Steakhouse
                  <br />
                  Project
                </p>
              </div>
              <button className="card-btn">Learn More</button>
            </aside>
          </div>
          <div className="card">
            <img src={manguitigre} alt="project 2" />
            <aside className="card-content">
              <div className="card-p">
                <p>
                  Hidraulic store
                  <br />
                  Project
                </p>
              </div>
              <button className="card-btn">Learn More</button>
            </aside>
          </div>
          <div className="card">
            <img src={veterinaty} alt="project 3" />
            <aside className="card-content">
              <div className="card-p">
                <p>
                  Veterinary
                  <br />
                  Project
                </p>
              </div>
              <button className="card-btn">Learn More</button>
            </aside>
          </div>
          <div className="card">
            <img src={horno} alt="project 1" />
            <aside className="card-content">
              <div className="card-p">
                <p>
                  Bolivian Food
                  <br />
                  Project
                </p>
              </div>
              <button className="card-btn">Learn More</button>
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Portfolio;
