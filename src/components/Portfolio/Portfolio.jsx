import { useInView } from "react-intersection-observer";
import style from "./portfolio.module.css";
import manguitigre from "../../assets/img/manguitigre.png";
import manguitigre2 from "../../assets/img/manguitigre2.png";
import manguitigre3 from "../../assets/img/manguitigre3.png";
import manguitigre4 from "../../assets/img/manguitigre4.png";
import vinyl1 from "../../assets/img/vinyl1.png";
import vinyl2 from "../../assets/img/vinyl2.png";
import vinyl3 from "../../assets/img/vinyl3.png";
import vinyl4 from "../../assets/img/vinyl4.png";
import weatherapi from "../../assets/img/weatherapi.png";
import poke1 from "../../assets/img/poke1.png";
import poke2 from "../../assets/img/poke2.png";
import poke3 from "../../assets/img/poke3.png";
import poke4 from "../../assets/img/poke4.png";
import country1 from "../../assets/img/country1.png";
import country2 from "../../assets/img/country2.png";
import country3 from "../../assets/img/country3.png";
import country4 from "../../assets/img/country4.png";
import rick1 from "../../assets/img/rick1.png";
import rick2 from "../../assets/img/rick2.png";
import rick3 from "../../assets/img/rick3.png";
import rick4 from "../../assets/img/rick4.png";
import Modal from "./Modal/Modal";
import { useModal } from "./Modal/useModal";

const Portfolio = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div id="portfolio" className="container">
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className={style.carousel}>
              <ul className={style.slides}>
                <li className={style.slide}>
                  <img
                    src={weatherapi}
                    className={style.avatar}
                    alt="weather"
                  />
                </li>
                <li className={style.slide}>
                  <img
                    className={style.avatar}
                    src={weatherapi}
                    alt="app mobiles"
                  />
                </li>
                <li className={style.slide}>
                  <img
                    className={style.avatar}
                    src={weatherapi}
                    alt="ciberseguridad"
                  />
                </li>
                <li className={style.slide}>
                  <img
                    src={weatherapi}
                    className={style.avatar}
                    alt="mySonFamily"
                  />
                </li>
              </ul>
            </article>
          </div>
          <div className={style.modalContent}>
            <h3>WORLD WEATHER</h3>
            <p>
              World weatherapi is full responsive app where you can watch the
              time, weather and location of any country of the world.
              <br />
              <mark>
                <a
                  href="https://franjaviweather.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link franjaviweather.netlify.app
                </a>
              </mark>
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className={style.carousel}>
              <ul className={style.slides}>
                <li className={style.slide}>
                  <img src={manguitigre} className={style.avatar} alt="" />
                </li>
                <li className={style.slide}>
                  <img className={style.avatar} src={manguitigre2} alt="" />
                </li>
                <li className={style.slide}>
                  <img
                    className={style.avatar}
                    src={manguitigre3}
                    alt="ciberseguridad"
                  />
                </li>
                <li className={style.slide}>
                  <img
                    src={manguitigre4}
                    className={style.avatar}
                    alt="mySonFamily"
                  />
                </li>
              </ul>
            </article>
          </div>
          <div className={style.modalContent}>
            <h3>MANGUITIGRE WEBSITE</h3>
            <p>
              Manguitigre is a hydraulic services store and this website app
              makes it well-known among bolivian customers.
              <br />
              <mark>
                <a
                  href="https://manguitigre.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link manguitigre.netlify.app
                </a>
              </mark>
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className={style.carousel}>
              <ul className={style.slides}>
                <li className={style.slide}>
                  <img src={vinyl1} className="avatar" alt="" />
                </li>
                <li className={style.slide}>
                  <img className="avatar" src={vinyl2} alt="" />
                </li>
                <li className={style.slide}>
                  <img className="avatar" src={vinyl3} alt="ciberseguridad" />
                </li>
                <li className={style.slide}>
                  <img src={vinyl4} className="avatar" alt="mySonFamily" />
                </li>
              </ul>
            </article>
          </div>
          <div className={style.modalContent}>
            <h3>Vinyls-Trade</h3>
            <p>
              It's an e-commerce where I handle the database-Postgresql,
              server-Express and client-React.
              <br />
              <mark>
                <a
                  href="https://vinils-trade-client.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link vinils-trade-client.vercel.app
                </a>
              </mark>
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className={style.carousel}>
              <ul className={style.slides}>
                <li className={style.slide}>
                  <img src={poke1} className={style.avatar} alt="" />
                </li>
                <li className={style.slide}>
                  <img className={style.avatar} src={poke2} alt="" />
                </li>
                <li className={style.slide}>
                  <img
                    className={style.avatar}
                    src={poke3}
                    alt="ciberseguridad"
                  />
                </li>
                <li className={style.slide}>
                  <img src={poke4} className={style.avatar} alt="mySonFamily" />
                </li>
              </ul>
            </article>
          </div>
          <div className={style.modalContent}>
            <h3>POKE API</h3>
            <p>
              Poke API is a personal project to improve my skills.
              <br />
              <mark>
                <a
                  href="https://franjavipokemon.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link franjavipokemon.netlify.app
                </a>
              </mark>
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className={style.carousel}>
              <ul className={style.slides}>
                <li className={style.slide}>
                  <img src={country1} className={style.avatar} alt="" />
                </li>
                <li className={style.slide}>
                  <img className={style.avatar} src={country2} alt="" />
                </li>
                <li className={style.slide}>
                  <img
                    className={style.avatar}
                    src={country3}
                    alt="ciberseguridad"
                  />
                </li>
                <li className={style.slide}>
                  <img
                    src={country4}
                    className={style.avatar}
                    alt="mySonFamily"
                  />
                </li>
              </ul>
            </article>
          </div>
          <div className={style.modalContent}>
            <h3>COUNTRY-ACTIVITIES</h3>
            <p>
              It's a personal project to improve my skills.
              <br />
              <mark>
                <a
                  href="https://github.com/franjavi8776/ClientCountries"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link github.com/franjavi8776/ClientCountries
                </a>
              </mark>
            </p>
          </div>
        </article>
      </Modal>
      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <article className="carousel-container">
          <div className="modal-carousel">
            <article className={style.carousel}>
              <ul className={style.slides}>
                <li className={style.slide}>
                  <img src={rick1} className={style.avatar} alt="" />
                </li>
                <li className={style.slide}>
                  <img className={style.avatar} src={rick2} alt="" />
                </li>
                <li className={style.slide}>
                  <img
                    className={style.avatar}
                    src={rick3}
                    alt="ciberseguridad"
                  />
                </li>
                <li className={style.slide}>
                  <img src={rick4} className={style.avatar} alt="mySonFamily" />
                </li>
              </ul>
            </article>
          </div>
          <div className={style.modalContent}>
            <h3>Rick and Morty</h3>
            <p>
              It's a personal project to improve my skills.
              <br />
              <mark>
                <a
                  href="https://github.com/franjavi8776/integracion"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link https://github.com/franjavi8776/integracion
                </a>
              </mark>
            </p>
          </div>
        </article>
      </Modal>
      <h2>PORTFOLIO</h2>
      <section
        className={
          inView
            ? `${style.portfolioContainer} ${style.portfolioContainerZoom}`
            : `${style.portfolioContainer}`
        }
        ref={ref}
      >
        <article className={style.portfolioCards}>
          <div className={style.card}>
            <img src={vinyl1} alt="project 3" />
            <aside className={style.cardContent}>
              <div className="card-p">
                <p>
                  E-commerce
                  <br />
                  Project
                </p>
              </div>
              <button className={style.cardBtn} onClick={openModal3}>
                Learn More
              </button>
            </aside>
          </div>
          <div className={style.card}>
            <img src={country1} alt="project 3" />
            <aside className={style.cardContent}>
              <div className="card-p">
                <p>
                  Country-Activities
                  <br />
                  Project
                </p>
              </div>
              <button className={style.cardBtn} onClick={openModal5}>
                Learn More
              </button>
            </aside>
          </div>
          <div className={style.card}>
            <img src={rick1} alt="project 3" />
            <aside className={style.cardContent}>
              <div className="card-p">
                <p>
                  Rick and Morty
                  <br />
                  Project
                </p>
              </div>
              <button className={style.cardBtn} onClick={openModal6}>
                Learn More
              </button>
            </aside>
          </div>
          <div className={style.card}>
            <img src={manguitigre} alt="project 2" />
            <aside className={style.cardContent}>
              <div className="card-p">
                <p>
                  Hidraulic store
                  <br />
                  Customer Web
                </p>
              </div>
              <button className={style.cardBtn} onClick={openModal2}>
                Learn More
              </button>
            </aside>
          </div>
          <div className={style.card}>
            <img src={weatherapi} alt="project 1" />
            <aside className={style.cardContent}>
              <div className="card-p">
                <p>
                  Weather World
                  <br />
                  Personal project
                </p>
              </div>
              <button className={style.cardBtn} onClick={openModal1}>
                Learn More
              </button>
            </aside>
          </div>

          <div className={style.card}>
            <img src={poke1} alt="project 1" />
            <aside className={style.cardContent}>
              <div className="card-p">
                <p>
                  Poke API
                  <br />
                  Project
                </p>
              </div>
              <button className={style.cardBtn} onClick={openModal4}>
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
