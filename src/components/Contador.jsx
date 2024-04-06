import React from "react";

const Contador = ({ contador, aumentar, disminuir, restaurar }) => {
  return (
    <>
      <div
        className="card text-center bg-dark border border-5 border-warning"
        style={{ width: "25rem", margin: "auto" }}>
        <div className="card-body text-light">
          <h3 className="card-text text-secondary mb-3">
            Contador: {contador}
          </h3>
          <button className="btn btn-warning" onClick={aumentar}>
            Aumentar
          </button>{" "}
          <button className="btn btn-warning" onClick={disminuir}>
            Disminuir
          </button>{" "}
          <button className="btn btn-warning" onClick={restaurar}>
            Resetear
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;
