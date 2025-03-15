import React from "react";
import "../../../../src/index.css";

export default function Login() {
  return (
    <>
      <div className="container">
        <h4 style={{ color: "gray" }}>
          <span>Flawless</span>
        </h4>
        <img
          src="https://cdn-icons-png.flaticon.com/512/599/599502.png"
          alt="flawless"
          style={{ width: 60, marginBottom: 10 }}
        />
        <form>
          <label>Correo Electrónico:</label>
          <input className="input" type="email" placeholder="Correo electrónico" />
          <p>error...</p>

          <label>Contraseña:</label>
          <input className="input" type="password" placeholder="Contraseña" />
          <p>error...</p>

          <input
            className="input"
            style={{ backgroundColor: "rgb(144, 118, 99)", marginBottom: 10 }}
            type="submit"
            value="Iniciar sesión"
          />

          <p>
            ¿No tienes una cuenta?{" "}
            <a href="#" style={{ color: "rgb(144, 118, 99)", textDecoration: "none" }}>
              Regístrate aquí
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
