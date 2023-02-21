import { useInView } from "react-intersection-observer";
import "./Contact.css";
import { FaFacebookF, FaRegistered } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiYoutubeLine } from "react-icons/ri";
import { useForm } from "./Hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "name is required *";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "name only accept letters and spaces";
  }

  if (!form.email.trim()) {
    errors.email = "email is required *";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "enter a valid email";
  }

  if (!form.subject.trim()) {
    errors.subject = "subject is required *";
  }

  if (!form.comments.trim()) {
    errors.comments = "comments is required *";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "comments only accept 255 characters ";
  }

  return errors;
};

export const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  return (
    <div id="contact" className="contact">
      <section className="contact-container">
        <h2>CONTACT</h2>
        <h5>Have a question or want to work together?</h5>
        <form
          onSubmit={handleSubmit}
          className={inView ? "form form--zoom" : "form"}
          ref={ref}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Your message"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
          {errors.comments && <p className="error">{errors.comments}</p>}
          <input type="submit" value="SUBMIT" />
          <div className="response">
            {loading && <Loader className="loader" />}
            {response && <Message msg="Your message has been sent" />}
          </div>
        </form>
        <div className="contact-socialMd">
          <div
            className={inView ? "socialMd socialMd--zoom" : "socialMd"}
            ref={ref}
          >
            <div className="social-icon">
              <a href="https://www.facebook.com/franciscojavier.villarroelsalvatierra">
                <FaFacebookF className="ico" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.instagram.com">
                <TiSocialInstagram className="ico" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.youtube.com">
                <RiYoutubeLine className="ico" />
              </a>
            </div>
          </div>
          <div className="name">
            FRANCISCO VILLARROEL
            <i>
              <FaRegistered /> 2023
            </i>
          </div>
        </div>
      </section>
    </div>
  );
};
