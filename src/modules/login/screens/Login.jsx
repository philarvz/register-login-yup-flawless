import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../../src/index.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password, name, lastname, age, phoneNumber } = location.state || {};

  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    if (data.email === email && data.password === password) {
      navigate("/data", {
        state: { email, name, lastname, age, phoneNumber },
      });
    } else {
      setLoginError("Correo o contraseña incorrectos");
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

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
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <p>{loginError}</p>}

        <label>Correo Electrónico:</label>
        <input
          className="input"
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: "Correo electrónico es requerido" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Contraseña:</label>
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: "Contraseña es requerida" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input
          className="input"
          style={{ backgroundColor: "rgb(144, 118, 99)", marginBottom: 10 }}
          type="submit"
          value="Iniciar sesión"
        />

        <p>
          ¿No tienes una cuenta?{" "}
          <a href="#" style={{ color: "rgb(144, 118, 99)", textDecoration: "none" }} onClick={() => navigate("/")}>
            Regístrate aquí
          </a>
        </p>
      </form>
    </div>
  );
}