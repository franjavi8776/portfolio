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
import { useLanguage } from "../Translate/LanguageContext";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "bg-[#E34F26]" },
  { name: "CSS", icon: <FaCss3 />, color: "bg-[#1572B6]" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "bg-[#F7DF1E]" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-[#7952B3]" },
  { name: "Tailwind", icon: <TbBrandTailwind />, color: "bg-[#06B6D4]" },
  { name: "Sass", icon: <FaSass />, color: "bg-[#CC6699]" },
  { name: "React", icon: <FaReact />, color: "bg-[#61DAFB]" },
  { name: "Vue", icon: <FaVuejs />, color: "bg-[#41B883]" },
  { name: "NodeJs", icon: <FaNode />, color: "bg-[#339933]" },
  { name: "Express", color: "bg-[#444444]" },
  { name: "Sequelize", icon: <SiSequelize />, color: "bg-[#6E4B8B]" },
  { name: "TypeORM", color: "bg-[#2F2D8B]" },
  { name: "Laravel", icon: <FaLaravel />, color: "bg-[#2F2D8B]" },
  { name: "MySQL", icon: <SiMysql />, color: "bg-[#00618A]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-[#336791]" },
  { name: "Trello", icon: <FaTrello />, color: "bg-[#0079BF]" },
  { name: "Postman", icon: <SiPostman />, color: "bg-[#FF6A00]" },
  { name: "Insomnia", icon: <SiInsomnia />, color: "bg-[#6C5B8B]" },
];

const About = () => {
  const { language, translations } = useLanguage();
  const { about } = translations[language].nav;

  return (
    <div id="about" className="w-full min-h-[94vh] bg-black pt-16 pb-16">
      <div className="container">
        <h2 className="mb-12">{about}</h2>
        <section className="w-[90%] m-auto md:w-full min-h-[600px] pb-10 bg-[#e31b6d] rounded-2xl border-[1px] border-white">
          <div className="flex flex-col items-center md:flex-row md:justify-around ">
            <div className="w-[80%] md:w-[40%] mt-10 flex justify-center">
              <img
                src="yo.jpg"
                alt="Profile"
                className="w-[300px] h-[280px] lg:w-[500px] lg:h-[450px] rounded-2xl border-[3px] border-black"
              />
            </div>
            <div className="w-[80%] md:w-[55%] text-white mt-10 lg:mt-18 text-[18px] lg:text-[28px] text-justify md:text-left">
              <p>
                {language === "en" && (
                  <>
                    Hi, I'm Francisco Villarroel, a skilled Web Developer from
                    Cochabamba, Bolivia.
                    <br />I have extensive experience in creating dynamic and
                    user-friendly web solutions.
                    <br />
                    My greatest strength lies in adapting to clients' needs and
                    delivering tailored results that exceed expectations.
                  </>
                )}
                {language === "es" && (
                  <>
                    Hola, soy Francisco Villarroel, un desarrollador web con
                    experiencia, de Cochabamba, Bolivia.
                    <br />
                    Tengo amplia experiencia en la creación de soluciones web
                    dinámicas y fáciles de usar.
                    <br />
                    Mi mayor fortaleza radica en adaptarme a las necesidades de
                    los clientes y entregar resultados personalizados que
                    superen las expectativas.
                  </>
                )}
                {language === "pt" && (
                  <>
                    Olá, sou Francisco Villarroel, um desenvolvedor web
                    experiente de Cochabamba, Bolívia.
                    <br />
                    Tenho ampla experiência na criação de soluções web dinâmicas
                    e fáceis de usar.
                    <br />
                    Minha maior força está em me adaptar às necessidades dos
                    clientes e entregar resultados personalizados que superem as
                    expectativas.
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="w-[80%] m-auto mt-5 flex justify-center flex-wrap gap-5">
            {skills.map((skill, index) => (
              <button
                key={index}
                className={`text-white font-bold flex items-center py-2 px-4 ${skill.color} rounded-md`}
              >
                {skill.name}{" "}
                {skill.icon && <span className="ml-2">{skill.icon}</span>}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
