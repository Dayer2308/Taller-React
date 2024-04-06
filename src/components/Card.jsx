import React, { useState } from "react";

const Card = ({ Imagen, contador, Titulo, Parrafo }) => {
  const [parrafoVisible, setParrafoVisible] = useState(false);

  const visible = () => {
    setParrafoVisible(!parrafoVisible);
  };
  return (
    <div className="container col">
      <div
        className="card text-center bg-dark border border-5 border-warning"
        style={{ width: "17rem" }}>
        <img src={Imagen} alt="..." width={262} height={200} />
        <div className="card-body text-light">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title m-2">{Titulo}</h4>
            <span className="card-title m-1">Contador: {contador}</span>
          </div>
          <hr />
          {parrafoVisible ? (
            <p className="card-text text-secondary font-monospace">{Parrafo}</p>
          ) : (
            <p className="card-text text-secondary">
              {Parrafo.slice(0, 100)}...
            </p>
          )}
          <button className="btn btn-danger" onClick={visible}>
            {parrafoVisible ? "Ocultar" : "Información"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
