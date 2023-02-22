import { useInView } from "react-intersection-observer";
import "./Blog.css";
import vero from "./assets/img/meandvero.jpg";
import daughters from "./assets/img/todos.jpg";
import son from "./assets/img/mysonfamily.jpg";
import nati from "./assets/img/nati1.jpg";

const Blog = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div id="blog" className="container">
      <h2>BLOG</h2>
      <section className={inView ? "blog blog--zoom" : "blog"} ref={ref}>
        <article className="blog-container">
          <div className="blog-carousel">
            <article className="carousel">
              <ul className="slides">
                <li className="slide">
                  <img src={vero} className="avatar" alt="meandvero" />
                  <h3>Me with my wife</h3>
                </li>
                <li className="slide">
                  <img className="avatar" src={daughters} alt="app mobiles" />
                  <h3>My family</h3>
                </li>
                <li className="slide">
                  <img className="avatar" src={son} alt="ciberseguridad" />
                  <h3>My son's family</h3>
                </li>
                <li className="slide">
                  <img src={nati} className="avatar" alt="mySonFamily" />
                  <h3>My daughter's and her wife</h3>
                </li>
              </ul>
            </article>
          </div>
          <div className="blog-content">
            <p>
              My name is Francisco Villarroel. I am a Junior Full-Stack
              Developer, with a 6 months of experience. I have proficiency in
              <b> HTML, CSS, JAVASCRIPT, NODE JS , REACT</b>. I am a hardworking
              father of 4, with 2 granddaughters. I lived in the United States
              for 6 years and now I have moved back to my home of Bolivia. I
              speak 3 languages and, Spanish, English and Portuguese. I am
              looking to work with the best clients and companies, and to
              provide the best possible service. I am reliable, dedicated and
              efficient. If interested please fill out the form at the bottom of
              my page. Thank you!
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Blog;
