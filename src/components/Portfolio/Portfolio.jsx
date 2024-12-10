import { useState } from "react";
import Modal from "./Modal/Modal";

const Portfolio = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div id="portfolio" className="w-full min-h-[100vh] bg-black pt-16">
      <h2>PORTFOLIO</h2>
      <Modal isOpen={isOpenModal}></Modal>
    </div>
  );
};

export default Portfolio;
