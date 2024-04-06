import React from "react";
import Contador from "./Contador";
import Card from "./Card";
import useContador from "./FuncionContador";
import imagen1 from "../assets/Tanjiro Kamado.jpg";
import imagen2 from "../assets/Zenitsu Agatsuma.jpg";
import imagen3 from "../assets/Inosuke Hashibira.jpg";
import imagen4 from "../assets/Kyojuro Rengoku.jpg";
import imagen5 from "../assets/Tomioka Giyuu.jpg";
import imagen6 from "../assets/Yoriichi tsugikuni.jpg";

const ContenedorAndCounter = () => {
  const { contador, aumentar, disminuir, restaurar } = useContador();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-3">
            <Card
              Imagen={imagen1}
              contador={contador}
              Titulo={"Tanjiro Kamado"}
              Parrafo={
                "Tanjiro es admirado por su ética moral, su coraje en la batalla y su deseo de proteger a aquellos que ama. Su determinación y bondad lo convierten en un personaje muy querido tanto por los personajes dentro de la historia como por los fanáticos del manga y el anime."
              }
            />
          </div>
          <div className="col mt-3">
            <Card
              Imagen={imagen2}
              contador={contador}
              Titulo={"Zenitsu Agatsuma"}
              Parrafo={
                "Zenitsu Agatsuma es un personaje complejo con una mezcla única de miedo, talento y valentía, cuyo desarrollo a lo largo de la serie lo convierte en un personaje querido y memorable para los fanáticos del manga y el anime."
              }
            />
          </div>
          <div className="col mt-3">
            <Card
              Imagen={imagen3}
              contador={contador}
              Titulo={"Inosuke Hashibira"}
              Parrafo={
                "Inosuke experimenta un desarrollo significativo como personaje, aprendiendo a confiar en sus compañeros y a trabajar en equipo para alcanzar sus objetivos. A pesar de sus defectos, su valentía, determinación y lealtad lo convierten en un personaje querido y respetado tanto por los otros personajes como por los fanáticos del manga y el anime."
              }
            />
          </div>
          <div className="col mt-3">
            <Card
              Imagen={imagen4}
              contador={contador}
              Titulo={"Kyojuro Rengoku"}
              Parrafo={
                "Kyojuro Rengoku en la historia tiene un impacto significativo en la trama, ya que desempeña un papel crucial en la batalla contra los demonios y en el desarrollo de los personajes principales. Su legado perdura incluso después de su partida, dejando una huella indeleble en la historia y en los corazones de los fanáticos del manga y el anime."
              }
            />
          </div>
          <div className="col mt-3">
            <Card
              Imagen={imagen5}
              contador={contador}
              Titulo={"Tomioka Giyuu"}
              Parrafo={
                "Tomioka Giyuu juega un papel importante en la trama, especialmente en relación con el protagonista, Tanjiro Kamado, a quien guía y apoya en su viaje como cazador de demonios. Su presencia en la serie agrega profundidad y complejidad a la historia, y su impacto en los eventos y personajes lo convierte en uno de los favoritos entre los fanáticos del manga y el anime."
              }
            />
          </div>
          <div className="col mt-3">
            <Card
              Imagen={imagen6}
              contador={contador}
              Titulo={"Yoriichi tsugikuni"}
              Parrafo={
                "Yoriichi Tsugikuni es venerado como una figura legendaria y un símbolo de esperanza para los cazadores de demonios en la serie. Su impacto en la historia y en los personajes principales es significativo, y su memoria continúa inspirando a aquellos que luchan contra el mal en el mundo de Demon Slayer."
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Contador
          contador={contador}
          aumentar={aumentar}
          disminuir={disminuir}
          restaurar={restaurar}
        />
      </div>
    </>
  );
};

export default ContenedorAndCounter;
