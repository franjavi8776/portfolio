import { FaRegistered } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      comments: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <div id="contact" className="relative w-full min-h-[94vh] bg-black pt-2">
      <h2 className="mb-12">CONTACT</h2>
      <section className="flex flex-col items-center">
        <h5 className="text-white text-xl mb-10">
          Have a question or want to work together?
        </h5>
        <form
          onSubmit={handleSubmit}
          className="w-[500px] h-[500px] bg-[#e31b6d15] rounded-lg flex flex-col justify-around items-center border-[1px] border-[#e31b6d]"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-[80%] bg-white rounded-sm p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            className="w-[80%] bg-white rounded-sm p-2"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={form.subject}
            onChange={handleChange}
            className="w-[80%] bg-white rounded-sm p-2"
            required
          />

          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Your message"
            value={form.comments}
            onChange={handleChange}
            className="w-[80%] bg-white rounded-sm p-2"
            required
          ></textarea>
          <button
            type="submit"
            className=" bg-[#e31b6d] py-1 px-4 rounded-md text-white"
          >
            Send
          </button>
        </form>
        <div className="">
          <div className="flex justify-center gap-10 text-white my-10">
            <div className="text-[40px]">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/francisco-villarroel-2945a1260/"
              >
                <BsLinkedin className="" />
              </Link>
            </div>
            <div className="text-[40px]">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/franjavi8776"
              >
                <AiFillGithub className="" />
              </Link>
            </div>
            <div className="text-[40px]">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.youtube.com/channel/UCy7GoxzJFo797bSRGK5ijiQ"
              >
                <BsYoutube />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 text-[#e31b6d] flex">
            <span>FRANCISCO VILLARROEL</span>
            <span className="flex">
              <FaRegistered /> 2023
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
