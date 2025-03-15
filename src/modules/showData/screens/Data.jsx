import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../../src/index.css";

export default function Data() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, name, lastname, age, phoneNumber } = location.state || {};

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
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Apellidos:</strong> {lastname}</p>
        <p><strong>Edad:</strong> {age}</p>
        <p><strong>Teléfono:</strong> {phoneNumber}</p>
        <p><strong>Correo Electrónico:</strong> {email}</p>
      </div>

      <button
        className="input"
        style={{ backgroundColor: "rgb(144, 118, 99)", marginTop: 20 }}
        onClick={() => navigate("/")}
      >
        Cerrar sesión
      </button>
    </div>
  );
}