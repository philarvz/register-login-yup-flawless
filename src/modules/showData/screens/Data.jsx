import React from "react";
import "../../../../src/index.css";

export default function Data() {
  return (
    <div className="container">
      <h4 style={{ color: "gray" }}>
        <span>Flawless</span>
      </h4>
      <img
        src="https://cdn-icons-png.flaticon.com/512/599/599502.png"
        alt="flawless"
        style={{ width: 60, marginBottom: 10 }}
      />
      <h2 style={{ marginBottom: 20 }}>Bienvenido a tu perfil</h2>

      <div style={{ textAlign: "left" }}>
        <p><strong>Nombre:</strong> [Nombre del usuario]</p>
        <p><strong>Apellidos:</strong> [Apellidos del usuario]</p>
        <p><strong>Edad:</strong> [Edad]</p>
        <p><strong>Teléfono:</strong> [Teléfono]</p>
        <p><strong>Correo Electrónico:</strong> [Correo]</p>
      </div>

      <button
        className="input"
        style={{ backgroundColor: "rgb(144, 118, 99)", marginTop: 20 }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}