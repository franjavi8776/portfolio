import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { useLanguage } from "../Translate/LanguageContext";

const Home = () => {
  const [step, setStep] = useState(0);
  const { language, translations, changeLanguage } = useLanguage();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timers = [];

    if (step === 0) {
      timers.push(setTimeout(() => setStep(1), 1000));
    }
    if (step === 1) {
      timers.push(setTimeout(() => setStep(2), 2000));
    }
    if (step === 2) {
      timers.push(setTimeout(() => setStep(3), 2000));
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [step, language]);

  return (
    <div id="home">
      <div className="relative w-full h-[100vh] bg-black ">
        <aside className="w-full h-[100vh] pt-[20vh] flex flex-col items-center">
          <h1 className="text-2xl md:text-[3.5rem] text-white ">
            {step >= 0 && (
              <Typewriter
                key={language}
                words={[translations[language].greeting]}
                loop={1}
                typeSpeed={80}
                delaySpeed={1000}
              />
            )}

            <b className="text-[#e31b6d] ml-2">
              {step >= 1 && (
                <Typewriter
                  key={language}
                  words={[translations[language].name]}
                  loop={1}
                  typeSpeed={80}
                  delaySpeed={1000}
                />
              )}{" "}
            </b>
          </h1>
          <h1 className="text-2xl md:text-[3.5rem] text-white m-[1rem] md:m-[2.50rem] z-50">
            {step >= 2 && (
              <Typewriter
                key={language}
                words={[translations[language].profession]}
                loop={1}
                typeSpeed={80}
                delaySpeed={1000}
              />
            )}
          </h1>
          {step >= 3 && (
            <button
              to="/"
              onClick={() => scrollTo("nav")}
              className="relative group min-w-[12.5rem] h-[3.5rem] text-[1.5rem] flex justify-between items-center px-[1rem] m-[1rem] bg-transparent text-white border border-white rounded-md hover:bg-[#e31b6d] hover:border-[#e31b6d] transition-all duration-[0.5s] ease-in-out z-50"
            >
              <span className="flex-1 text-left">
                {translations[language]?.seeMyWork}
              </span>
              <div className="ml-2">
                <img
                  src="right-arrow.svg"
                  alt="arrow"
                  className="w-[1.3rem] transform group-hover:rotate-[90deg]"
                />
              </div>
            </button>
          )}
        </aside>

        <div className="absolute bottom-0 w-full flex justify-center z-10">
          <img src="francisco.jpg" alt="Francisco" className="w-[480px]" />
        </div>
        {step >= 3 && (
          <div className="absolute bottom-10 w-full flex justify-center md:justify-end md:pr-10 gap-10 text-white z-50 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/francisco-villarroel-2945a1260/"
            >
              <BsLinkedin className="text-[30px] lg:text-[40px] hover:text-[#e31b6d]" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/franjavi8776"
            >
              <AiFillGithub className="text-[30px] lg:text-[40px]  hover:text-[#e31b6d]" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCy7GoxzJFo797bSRGK5ijiQ"
            >
              <BsYoutube className="text-[30px] lg:text-[40px] hover:text-[#e31b6d] " />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/franCodeDev"
            >
              <FaTwitter className="text-[30px] lg:text-[40px] hover:text-[#e31b6d] " />
            </a>
            <a href="mailto:franjavi871976@gmail.com">
              <BiLogoGmail className="text-[30px] lg:text-[40px]  hover:text-[#e31b6d]" />
            </a>
          </div>
        )}
        <div className="absolute top-10 right-10 text-white">
          <button onClick={() => changeLanguage("en")}>
            <span className="bg-white text-black font-bold hover:text-[#e31b6d] px-2 py-1 rounded-md">
              English
            </span>
          </button>
          <button onClick={() => changeLanguage("es")} className="mx-2">
            <span className="bg-white text-black font-bold hover:text-[#e31b6d] px-2 py-1 rounded-md">
              Español
            </span>
          </button>
          <button onClick={() => changeLanguage("pt")}>
            <span className="bg-white text-black font-bold hover:text-[#e31b6d] px-2 py-1 rounded-md">
              Português
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
