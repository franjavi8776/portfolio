import { useInView } from "react-intersection-observer";
import "./Portfolio.css";
import barbecue from "./assets/img/barbeque.png";
import barbecue1 from "./assets/img/barbeque1.png";
import barbecue2 from "./assets/img/barbeque2.png";
import barbecue3 from "./assets/img/barbeque3.png";
import manguitigre from "./assets/img/manguitigre.png";
import manguitigre2 from "./assets/img/manguitigre2.png";
import manguitigre3 from "./assets/img/manguitigre3.png";
import manguitigre4 from "./assets/img/manguitigre4.png";
import veterinaty from "./assets/img/veterinaty.png";
import veterinary1 from "./assets/img/veterinary1.png";
import veterinary2 from "./assets/img/veterinary2.png";
import veterinary3 from "./assets/img/veterinary3.png";
import horno from "./assets/img/horno.png";
import horno2 from "./assets/img/horno2.png";
import Modal from "./Modal";
import { useModal } from "./Hooks/useModal";

const Portfolio = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div id="portfolio" className="container">
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className="carousel">
              <ul className="slides">
                <li className="slide">
                  <img src={barbecue} className="avatar" alt="meandvero" />
                </li>
                <li className="slide">
                  <img className="avatar" src={barbecue1} alt="app mobiles" />
                </li>
                <li className="slide">
                  <img
                    className="avatar"
                    src={barbecue2}
                    alt="ciberseguridad"
                  />
                </li>
                <li className="slide">
                  <img src={barbecue3} className="avatar" alt="mySonFamily" />
                </li>
              </ul>
            </article>
          </div>
          <div className="modal-content">
            <h3>COCHA ROADHOUSE WEBSITE</h3>
            <p>
              Cocha Roadhouse is a commission-free online ordering system and
              food ordering app helping restaurants feed their hungry customers.
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className="carousel">
              <ul className="slides">
                <li className="slide">
                  <img src={manguitigre} className="avatar" alt="" />
                </li>
                <li className="slide">
                  <img className="avatar" src={manguitigre2} alt="" />
                </li>
                <li className="slide">
                  <img
                    className="avatar"
                    src={manguitigre3}
                    alt="ciberseguridad"
                  />
                </li>
                <li className="slide">
                  <img
                    src={manguitigre4}
                    className="avatar"
                    alt="mySonFamily"
                  />
                </li>
              </ul>
            </article>
          </div>
          <div className="modal-content">
            <h3>MANGUITIGRE WEBSITE</h3>
            <p>
              Manguitigre is a hydraulic services store and this website app
              makes it well-known among bolivian customers.
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className="carousel">
              <ul className="slides">
                <li className="slide">
                  <img src={veterinaty} className="avatar" alt="" />
                </li>
                <li className="slide">
                  <img className="avatar" src={veterinary1} alt="" />
                </li>
                <li className="slide">
                  <img
                    className="avatar"
                    src={veterinary2}
                    alt="ciberseguridad"
                  />
                </li>
                <li className="slide">
                  <img src={veterinary3} className="avatar" alt="mySonFamily" />
                </li>
              </ul>
            </article>
          </div>
          <div className="modal-content">
            <h3>VETERINARY WEBSITE</h3>
            <p>
              Veterinary Clinic is a project website app that I made for a
              student of veterinary in bolivia.
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className="carousel">
              <ul className="slides">
                <li className="slide">
                  <img src={horno} className="avatar" alt="" />
                </li>
                <li className="slide">
                  <img className="avatar" src={horno2} alt="" />
                </li>
                <li className="slide">
                  <img className="avatar" src={horno} alt="ciberseguridad" />
                </li>
                <li className="slide">
                  <img src={horno2} className="avatar" alt="mySonFamily" />
                </li>
              </ul>
            </article>
          </div>
          <div className="modal-content">
            <h3>FAST FOOD WEBSITE</h3>
            <p>
              El Horno de la Abuela is a personal project for my wife, that is a
              Chefs and she made a delicious Bolivian food.
            </p>
          </div>
        </article>
      </Modal>
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
              <button className="card-btn" onClick={openModal1}>
                Learn More
              </button>
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
              <button className="card-btn" onClick={openModal2}>
                Learn More
              </button>
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
              <button className="card-btn" onClick={openModal3}>
                Learn More
              </button>
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
              <button className="card-btn" onClick={openModal4}>
                Learn More
              </button>
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Portfolio;
