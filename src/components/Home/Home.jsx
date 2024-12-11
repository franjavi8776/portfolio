import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
const Home = () => {
  const [step, setStep] = useState(0);

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
  }, [step]);

  return (
    <div id="home">
      <div className="relative w-full h-[100vh] bg-black ">
        <aside className="w-full h-[100vh] pt-[20vh] flex flex-col items-center">
          <h1 className="text-2xl md:text-[3.5rem] text-white ">
            {step >= 0 && (
              <Typewriter
                words={["Hello, I am"]}
                loop={1}
                typeSpeed={80}
                delaySpeed={1000}
              />
            )}

            <b className="text-[#e31b6d] ml-5">
              {step >= 1 && (
                <Typewriter
                  words={["Francisco Villarroel"]}
                  loop={1}
                  typeSpeed={80}
                  delaySpeed={1000}
                />
              )}{" "}
            </b>
          </h1>
          <h1 className="text-2xl md:text-[3.5rem] text-white m-[.25rem] z-50">
            {step >= 2 && (
              <Typewriter
                words={["a Software Engineer"]}
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
              className="relative group w-[12.5rem] h-[3.5rem] text-[1.5rem] flex justify-start items-center p-[.75rem] m-[1rem] bg-transparent text-white border border-white rounded-md hover:bg-[#e31b6d] hover:border-[#e31b6d] transition-all duration-[0.5s] ease-in-out z-50"
            >
              <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-end bg-transparent">
                <img
                  src="right-arrow.svg"
                  alt="arrow"
                  className="w-[1.3rem] mr-[1rem]   transform group-hover:rotate-[90deg]"
                />
              </div>
              See my work
            </button>
          )}
        </aside>

        <div className="absolute bottom-0 w-full flex justify-center z-10">
          <img src="francisco.jpg" alt="Francisco" className="w-[480px]" />
        </div>
        {step >= 3 && (
          <div className="absolute bottom-[55vh] right-[22vw] lg:bottom-10 md:right-10 flex justify-center  gap-10 text-white z-50">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/francisco-villarroel-2945a1260/"
            >
              <BsLinkedin className="text-[30px] lg:text-[40px] hover:text-[#e31b6d]" />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/franjavi8776"
            >
              <AiFillGithub className="text-[30px] lg:text-[40px]  hover:text-[#e31b6d]" />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/channel/UCy7GoxzJFo797bSRGK5ijiQ"
            >
              <BsYoutube className="text-[30px] lg:text-[40px] hover:text-[#e31b6d] " />
            </Link>
            <a href="mailto:franjavi871976@gmail.com">
              <AiOutlineMail className="text-[30px] lg:text-[40px]  hover:text-[#e31b6d]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
