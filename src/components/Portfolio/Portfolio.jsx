import { useLanguage } from "../Translate/LanguageContext";

const Portfolio = () => {
  const { language, translations } = useLanguage();
  const { portfolio } = translations[language].nav;

  return (
    <div id="portfolio" className="w-full min-h-[100vh] bg-black pt-16">
      <h2>{portfolio}</h2>
      <div className="container">
        <div className="mt-20 w-[90%] m-auto py-5 lg:py-0 md:margin-0 md:w-full min-h-[400px] bg-[#e31b6d] flex flex-col lg:flex-row items-center justify-center rounded-lg border border-white text-white">
          <a
            href="https://go-cochabamba.vercel.app/"
            className="w-[90%] md:w-[75%] lg:w-[50%] min-h-[150px] flex flex-col  md:justify-center md:items-center"
          >
            <img
              src="go-cochabamba.png"
              alt="goCochabamba"
              className=" lg:w-[90%] rounded-lg border-[3px] border-black"
            />
          </a>
          <div className="w-[90%] md:w-[75%] lg:w-[50%] min-h-[250px] flex justify-center items-center text-justify mt-5 lg:mt-0">
            <p className=" lg:w-[90%] lg:m-auto ">
              {language === "en" && (
                <>
                  This website is dedicated to the department of Cochabamba,
                  located in the heart of Bolivia, and Bolivia is in the heart
                  of South America. The platform will provide information about
                  restaurants, cinemas, hospitals, hotels, and more, catering to
                  both local residents and tourists from Bolivia and around the
                  world.
                </>
              )}
              {language === "es" && (
                <>
                  Este sitio web está dedicado al departamento de Cochabamba,
                  ubicado en el corazón de Bolivia, y Bolivia está en el corazón
                  de Sudamérica. La plataforma proporcionará información sobre
                  restaurantes, cines, hospitales, hoteles y más, atendiendo
                  tanto a residentes locales como a turistas de Bolivia y de
                  todo el mundo.
                </>
              )}
              {language === "pt" && (
                <>
                  Este site é dedicado ao departamento de Cochabamba, localizado
                  no coração da Bolívia, e a Bolívia está no coração da América
                  do Sul. A plataforma fornecerá informações sobre restaurantes,
                  cinemas, hospitais, hotéis e muito mais, atendendo tanto aos
                  residentes locais quanto aos turistas da Bolívia e de todo o
                  mundo.
                </>
              )}
              <br />
              <span className="text-xl font-bold text-black">
                {language === "en" && "Tech Stack"}
                {language === "es" && "Tecnologías Utilizadas"}
                {language === "pt" && "Tecnologias Utilizadas"}
              </span>
              <br />
              <span className="font-bold text-black">
                - {language === "en" && "Server"}
                {language === "es" && "Servidor"}
                {language === "pt" && "Servidor"}:
              </span>{" "}
              {language === "en" &&
                "Built using Node.js with Express, TypeScript, and Sequelize, and it utilizes a PostgreSQL database."}
              {language === "es" &&
                "Construido utilizando Node.js con Express, TypeScript y Sequelize, y utiliza una base de datos PostgreSQL."}
              {language === "pt" &&
                "Construído utilizando Node.js com Express, TypeScript e Sequelize, e utiliza um banco de dados PostgreSQL."}
              <br />
              <span className="font-bold text-black">
                - {language === "en" && "Client"}
                {language === "es" && "Cliente"}
                {language === "pt" && "Cliente"}:
              </span>{" "}
              {language === "en" &&
                "Developed with React, styled using Tailwind CSS, and managed state using React-Redux."}
              {language === "es" &&
                "Desarrollado con React, estilizado usando Tailwind CSS y gestión de estado con React-Redux."}
              {language === "pt" &&
                "Desenvolvido com React, estilizado com Tailwind CSS e gerenciamento de estado com React-Redux."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
