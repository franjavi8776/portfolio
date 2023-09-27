import { useEffect } from "react";
import style from "./home.module.css";

const Home = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Variables para el movimiento
  let posX = 0;
  let posY = 0;
  const velocidadX = 0.5; // Velocidad horizontal
  const velocidadY = 0.5; // Velocidad vertical

  useEffect(() => {
    // Función para mover la imagen de fondo
    const moverImagen = () => {
      // Obtener el elemento .homeContainer después de que el componente esté montado
      const homeContainer = document.querySelector(`.${style.homeContainer}`);

      // Verificar si homeContainer existe antes de actualizar el estilo
      if (homeContainer) {
        // Actualiza la posición
        posX -= velocidadX;
        posY += velocidadY;

        // Aplica la nueva posición al elemento .homeContainer
        homeContainer.style.backgroundPosition = `${posX}px ${posY}px`;

        // Solicita la próxima animación
        requestAnimationFrame(moverImagen);
      }
    };

    // Iniciar la animación después de que el componente esté montado
    moverImagen();
  }, []);

  return (
    <div id="home">
      <div className={style.homeContainer}>
        <aside className={style.homeContent}>
          <h1>
            Hello, I'm <b>Francisco Villarroel</b>
          </h1>
          <h1>I'm a Full-Stack web developer</h1>
          <button
            className={style.homeButton}
            to="/"
            onClick={() => scrollTo("nav")}
          >
            <div className={style.arrowButton}>
              <img src="right-arrow.svg" alt="arrow" />
            </div>
            View my work
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Home;
