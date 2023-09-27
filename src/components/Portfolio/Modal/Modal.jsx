import style from "./modal.module.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article
      className={`${style.modal} ${isOpen && style.isOpen}
`}
    >
      <div className={style.modalContainer}>
        <button className={style.modalClose} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
