const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full min-h-[100vh] bg-black pt-16">
      <h2>PORTFOLIO</h2>
      <div className="container">
        <div className="mt-20 w-[90%] m-auto py-5 lg:py-0 md:margin-0 md:w-full min-h-[400px] bg-[#e31b6d99] flex flex-col lg:flex-row items-center justify-center rounded-lg border border-[#e31b6d] text-white">
          <a
            href="https://go-cochabamba.vercel.app/"
            className="w-[80%] md:w-[70%] lg:w-[50%] min-h-[250px] flex flex-col justify-center items-center"
          >
            <img
              src="goCochabamba.png"
              alt="goCochabamba"
              className=" lg:w-[90%] rounded-lg border-[3px] border-white"
            />
          </a>
          <div className="w-[80%] md:w-[70%] lg:w-[50%] min-h-[250px] flex justify-center items-center pt-3 lg:pt-0 ">
            <p className=" lg:w-[90%] lg:m-auto ">
              This website is dedicated to the department of Cochabamba, located
              in the heart of Bolivia, and Bolivia is in the heart of South
              America. The platform will provide information about restaurants,
              cinemas, hospitals, hotels, and more, catering to both local
              residents and tourists from Bolivia and around the world.
              <br />
              <span className="text-xl font-bold">Tech Stack</span>
              <br />
              <span className="font-bold">- Server:</span> Built using Node.js
              with Express, TypeScript, and Sequelize, and it utilizes a
              PostgreSQL database.
              <br />
              <span className="font-bold">- Client:</span> Developed with React,
              styled using Tailwind CSS, and managed state using React-Redux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
