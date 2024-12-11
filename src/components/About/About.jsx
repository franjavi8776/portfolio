import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
  FaNode,
  FaLaravel,
  FaTrello,
} from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import {
  SiSequelize,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiInsomnia,
} from "react-icons/si";
const About = () => {
  return (
    <div id="about" className="w-full min-h-[94vh] bg-black pt-16 pb-16">
      <div className="container">
        <h2 className="mb-12">ABOUT ME</h2>
        <section className="w-[80%] m-auto md:w-full m-h-[600px] pb-10 bg-[#e31b6d15] rounded-2xl border-[1px] border-[#e31b6d]">
          <div className="flex flex-col items-center md:flex-row md:justify-around ">
            <div className="w-[45%] mt-10 flex justify-center">
              <img
                src="yo.jpg"
                alt="foto"
                className="w-[300px] h-[280px] lg:w-[500px] lg:h-[450px] rounded-2xl border-[3px] border-black"
              />
            </div>
            <div className="w-[55%] text-white mt-20 lg:mt-36 text-[20px] lg:text-[28px]">
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
          <div className="w-[80%] m-auto mt-5 flex justify-center flex-wrap gap-5">
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#E34F26] rounded-md">
              HTML <FaHtml5 />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#1572B6] rounded-md">
              CSS <FaCss3 />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#F7DF1E] rounded-md">
              JavaScript <FaJsSquare />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#7952B3] rounded-md">
              Bootstrap <FaBootstrap />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#06B6D4] rounded-md">
              Tailwind <TbBrandTailwind />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#CC6699] rounded-md">
              Sass <FaSass />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#61DAFB] rounded-md">
              React <FaReact />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#41B883] rounded-md">
              Vue <FaVuejs />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#339933] rounded-md">
              NodeJs <FaNode />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#444444] rounded-md">
              Express
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#6E4B8B] rounded-md">
              Sequelize <SiSequelize />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#2F2D8B] rounded-md">
              TypeORM
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#2F2D8B] rounded-md">
              Larabel <FaLaravel />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#00618A] rounded-md">
              MySQL <SiMysql />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#336791] rounded-md">
              PostgreSQL <SiPostgresql />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#0079BF] rounded-md">
              Trello <FaTrello />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#FF6A00] rounded-md">
              Postman <SiPostman />
            </button>
            <button className="text-white font-bold flex items-center py-2 px-4 bg-[#6C5B8B] rounded-md">
              Insomnia <SiInsomnia />
            </button>
            <button></button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
