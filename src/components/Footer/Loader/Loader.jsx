import style from "./loader.module.css";

const Loader = () => {
  return (
    <div className={style.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
