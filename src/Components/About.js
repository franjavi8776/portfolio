import { RiCompass2Line } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { IoRocketSharp } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";
import "./About.css";

export const About = () => {
  return (
    <div id="about" className="container">
      <h2>ABOUT</h2>
      <section className="about-section">
        <article className="about-article">
          <div className="about-icons">
            <div className="about-icon">
              <RiCompass2Line className="icon" />
            </div>
            <div className="about-content">
              <h3>Fast</h3>
              <p>
                Fast load times and lag free <br />
                interaction, my highest priority.
              </p>
            </div>
          </div>
          <div className="about-icons">
            <div className="about-icon">
              <MdLightbulbOutline className="icon" />
            </div>
            <div className="about-content">
              <h3>Intuitive</h3>
              <p>
                Strong preference for easy to use,
                <br />
                intuitive UX/UI.
              </p>
            </div>
          </div>
          <div className="about-icons">
            <div className="about-icon">
              <DiResponsive className="icon2" />
            </div>
            <div className="about-content">
              <h3>Responsive</h3>
              <p>
                My layouts will work on any <br />
                device, big or small.
              </p>
            </div>
          </div>
          <div className="about-icons">
            <div className="about-icon">
              <IoRocketSharp className="icon" />
            </div>
            <div className="about-content">
              <h3>Dynamic</h3>
              <p>
                Websites don't have to be static, I <br />
                love making pages come to life.
              </p>
            </div>
          </div>
        </article>
        <article className="article-photo">
          <div className="about-us">
            <div className="about-photo">
              <img src="foto3.jpg" alt="foto" className="about-photo" />
            </div>
            <div className="about-icons">
              <h3>Who's this guy?</h3>
              <p>
                I'm a full-stack Developer in Cochabamba, Bolivia.
                <br />I have serious passion for UI effects, animations and
                creating intuitive,
                <br />
                dynamic user experiences.
              </p>
            </div>
          </div>
          <div className="about-skills">
            <div>
              <h3>Skills</h3>
              <div className="about-progress">
                <p>
                  <b>HTML</b>
                  <b>100%</b>
                </p>
                <progress value="70" min="0" max="100"></progress>
                <p>
                  <b>CSS</b>
                  <b>100%</b>
                </p>
                <progress value="50" min="0" max="100"></progress>
                <p>
                  <b>JAVASCRIPT</b>
                  <b>100%</b>
                </p>
                <progress value="50" min="0" max="100"></progress>
                <p>
                  <b>NODE JS</b>
                  <b>100%</b>
                </p>
                <progress value="50" min="0" max="100"></progress>
                <p>
                  <b>REACT</b>
                  <b>100%</b>
                </p>
                <progress value="30" min="0" max="100"></progress>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
