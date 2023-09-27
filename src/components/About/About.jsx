import { useInView } from "react-intersection-observer";
import { RiCompass2Line } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { IoRocketSharp } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";
import style from "./about.module.css";

const About = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div id="about" className={style.container}>
      <h2>ABOUT</h2>
      <section
        className={
          inView
            ? `${style.aboutSection} ${style.aboutSectionZoom}`
            : `${style.aboutSection}`
        }
        ref={ref}
      >
        <article className={style.aboutArticle}>
          <div className={style.aboutIcons}>
            <div className={style.aboutIcon}>
              <RiCompass2Line className={style.icon} />
            </div>
            <div className={style.aboutContent}>
              <h3>Fast</h3>
              <p>
                Fast load times and lag free <br />
                interaction, my highest priority.
              </p>
            </div>
          </div>
          <div className={style.aboutIcons}>
            <div className={style.aboutIcon}>
              <MdLightbulbOutline className={style.icon} />
            </div>
            <div className={style.aboutContent}>
              <h3>Intuitive</h3>
              <p>
                Strong preference for easy to use,
                <br />
                intuitive UX/UI.
              </p>
            </div>
          </div>
          <div className={style.aboutIcons}>
            <div className={style.aboutIcon}>
              <DiResponsive className={style.icon2} />
            </div>
            <div className={style.aboutContent}>
              <h3>Responsive</h3>
              <p>
                My layouts will work on any <br />
                device, big or small.
              </p>
            </div>
          </div>
          <div className={style.aboutIcons}>
            <div className={style.aboutIcon}>
              <IoRocketSharp className={style.icon} />
            </div>
            <div className={style.aboutContent}>
              <h3>Dynamic</h3>
              <p>
                Websites don't have to be static, I <br />
                love making pages come to life.
              </p>
            </div>
          </div>
        </article>
        <article className={style.articlePhoto}>
          <div className={style.aboutSkills}>
            <div>
              <h3>Soft skills</h3>
              <div className={style.aboutProgress}>
                <p>
                  <b>COMMUNICATION</b>
                  <b>100%</b>
                </p>
                <progress value="95" min="0" max="100"></progress>
                <p>
                  <b>PROBLEM SOLVING</b>
                  <b>100%</b>
                </p>
                <progress value="98" min="0" max="100"></progress>
                <p>
                  <b>TEAMWORK</b>
                  <b>100%</b>
                </p>
                <progress value="93" min="0" max="100"></progress>
                <p>
                  <b>CREATIVITY</b>
                  <b>100%</b>
                </p>
                <progress value="90" min="0" max="100"></progress>
                <p>
                  <b>ADAPTABILITY</b>
                  <b>100%</b>
                </p>
                <progress value="95" min="0" max="100"></progress>
                <p>
                  <b>DECISION MAKING</b>
                  <b>100%</b>
                </p>
                <progress value="93" min="0" max="100"></progress>
                <p>
                  <b>POSSITIVE ATTITUDE</b>
                  <b>100%</b>
                </p>
                <progress value="98" min="0" max="100"></progress>
                <p>
                  <b>WORK ETHIC</b>
                  <b>100%</b>
                </p>
                <progress value="95" min="0" max="100"></progress>
                <p>
                  <b>PATIENCE</b>
                  <b>100%</b>
                </p>
                <progress value="90" min="0" max="100"></progress>
              </div>
            </div>
          </div>
          <div className={style.aboutUs}>
            <div className={style.aboutPhoto}>
              <img src="yo.jpg" alt="foto" className={style.aboutPhoto} />
            </div>
            <div className={style.aboutIcons}>
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
          <div className={style.aboutSkills}>
            <div>
              <h3>Tech skills</h3>
              <div className={style.aboutProgress}>
                <p>
                  <b>HTML5</b>
                  <b>100%</b>
                </p>
                <progress value="80" min="0" max="100"></progress>
                <p>
                  <b>CSS3</b>
                  <b>100%</b>
                </p>
                <progress value="85" min="0" max="100"></progress>
                <p>
                  <b>JAVASCRIPT</b>
                  <b>100%</b>
                </p>
                <progress value="79" min="0" max="100"></progress>
                <p>
                  <b>REACT JS</b>
                  <b>100%</b>
                </p>
                <progress value="80" min="0" max="100"></progress>
                <p>
                  <b>NODE JS</b>
                  <b>100%</b>
                </p>
                <progress value="86" min="0" max="100"></progress>
                <p>
                  <b>EXPRESS</b>
                  <b>100%</b>
                </p>
                <progress value="89" min="0" max="100"></progress>
                <p>
                  <b>TAILWIND</b>
                  <b>100%</b>
                </p>
                <progress value="80" min="0" max="100"></progress>
                <p>
                  <b>REACT NATIVE</b>
                  <b>100%</b>
                </p>
                <progress value="65" min="0" max="100"></progress>
                <p>
                  <b>SCRUM</b>
                  <b>100%</b>
                </p>
                <progress value="80" min="0" max="100"></progress>
                <p>
                  <b>TYPESCRIPT</b>
                  <b>100%</b>
                </p>
                <progress value="65" min="0" max="100"></progress>
                <p>
                  <b>GIT</b>
                  <b>100%</b>
                </p>
                <progress value="88" min="0" max="100"></progress>
                <p>
                  <b>TRELLO</b>
                  <b>100%</b>
                </p>
                <progress value="80" min="0" max="100"></progress>
                <p>
                  <b>SEQUELIZE</b>
                  <b>100%</b>
                </p>
                <progress value="76" min="0" max="100"></progress>
                <p>
                  <b>MYSQL</b>
                  <b>100%</b>
                </p>
                <progress value="79" min="0" max="100"></progress>
                <p>
                  <b>POSTGRESQL</b>
                  <b>100%</b>
                </p>
                <progress value="75" min="0" max="100"></progress>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
