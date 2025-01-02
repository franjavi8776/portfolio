const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full min-h-[100vh] bg-black pt-16">
      <h2>PORTFOLIO</h2>
      <div className="container">
        <div className="mt-20 w-[90%] m-auto py-5 lg:py-0 md:margin-0 md:w-full min-h-[400px] bg-[#e31b6d99] flex flex-col lg:flex-row items-center justify-center rounded-lg border border-[#e31b6d] text-white">
          <div className="w-[80%] md:w-[70%] lg:w-[50%] min-h-[250px] flex justify-center items-center">
            <img
              src="goCochabamba.png"
              alt="goCochabamba"
              className=" lg:w-[90%]"
            />
          </div>
          <div className="w-[80%] md:w-[70%] lg:w-[50%] min-h-[250px] flex justify-center items-center">
            <p className=" lg:w-[90%] lg:m-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              sit provident optio reiciendis fugiat. Laborum sequi non odit
              soluta cupiditate fuga, neque corporis et nihil commodi dolorum
              rerum, possimus blanditiis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eius ullam culpa, velit, adipisci architecto
              veniam nam perspiciatis nesciunt neque tenetur iste perferendis
              aliquid, fuga delectus optio assumenda voluptatem rem inventore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
