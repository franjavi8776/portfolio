import { useInView } from "react-intersection-observer";
import style from "./contact.module.css";
import { FaRegistered } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { useForm } from "./Helpers/useForm";
import Loader from "./Loader/Loader";
import Message from "./Message";
import { Link } from "react-router-dom";

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

const Contact = () => {
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
    <div id="contact" className={style.contact}>
      <section className={style.contactContainer}>
        <h2>CONTACT</h2>
        <h5>Have a question or want to work together?</h5>
        <form
          onSubmit={handleSubmit}
          className={
            inView ? `${style.form} ${style.formZoom}` : `${style.form}`
          }
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
          {errors.name && <p className={style.error}>{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {errors.subject && <p className={style.error}>{errors.subject}</p>}
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
          {errors.comments && <p className={style.error}>{errors.comments}</p>}
          <input type="submit" value="SUBMIT" />
          <div className={style.response}>
            {loading && <Loader className={style.loader} />}
            {response && <Message msg="Your message has been sent" />}
          </div>
        </form>
        <div className={style.contactSocialMd}>
          <div
            className={
              inView
                ? `${style.socialMd} ${style.socialMdZoom}`
                : `${style.socialMd}`
            }
            ref={ref}
          >
            <div className={style.socialIcon}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/francisco-villarroel-2945a1260/"
              >
                <BsLinkedin className={style.ico} />
              </Link>
            </div>
            <div className={style.socialIcon}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/franjavi8776"
              >
                <AiFillGithub className={style.ico} />
              </Link>
            </div>
            <div className={style.socialIcon}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.youtube.com/channel/UCy7GoxzJFo797bSRGK5ijiQ"
              >
                <BsYoutube className={style.ico} />
              </Link>
            </div>
          </div>
          <div className={style.name}>
            FRANCISCO VILLARROEL
            <span>
              <FaRegistered /> 2023
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
