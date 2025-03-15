import React from 'react'
import '../../../../src/index.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

export default function FormRegistro() {
  const navigate = useNavigate();
  const schema =yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    lastname: yup.string().required("Los apellidos son requeridos"),
    email:yup.string().required("El email es requerido").email("Ingresa un correo válido"),
    age: yup.number().typeError("Debes ingresar un número válido para la edad").integer("La edad debe ser un número entero").required("La edad es requerida"),
    phoneNumber:yup.string().length(10, "El número de teléfono debe tener 10 dígitos").required("El número de teléfono es requerido"),
    password:yup.string().min(8, "La contraseña debe tener al menos 8 caracteres").required("La contraseña es requerida"),
    confirmPassword:yup.string().oneOf([yup.ref("password")], "Las contraseñas deben coincidir").required("La confirmación de contraseña es requerida")
})
  
  const {register,handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  }); 

  function onSubmit(data) {
    console.log(data);
    navigate('/login', {
      state: { email: data.email, password: data.password, name: data.name, lastname: data.lastname, age: data.age, phoneNumber: data.phoneNumber }
    });
}

  return (
    <>
    <div className='container'>
    <h4 style={{color:'gray'}}><span>Flawless</span></h4>
     <img 
        src="https://cdn-icons-png.flaticon.com/512/599/599502.png " 
        alt="flawless" 
        style={{width:60, marginBottom:10}}
      />
      <form  onSubmit={handleSubmit(onSubmit)}>
         <label>Nombre:</label>
          <input className='input' type="text" placeholder='Nombre' {...register("name")} />
          <p>{errors.name?.message}</p>
          <label>Apellidos:</label>
          <input className='input' type="text" placeholder='Apellidos P/M' {...register("lastname")}  />
          <p>{errors.lastname?.message}</p>
          <label>Correo:</label>
          <input className='input' type="text" placeholder='Correo' {...register("email")} />
          <p>{errors.email?.message}</p>
          <label>Edad:</label>
          <input className='input' type="number" placeholder='Edad' {...register("age")} />
          <p>{errors.age?.message}</p>
          <label>Teléfono:</label>
          <input className='input' type="text" placeholder='Teléfono' {...register("phoneNumber")} />
          <p>{errors.phoneNumber?.message}</p>
          <label>Contraseña:</label>
          <input className='input' type="password" placeholder='Contraseña'  {...register("password")} />
          <p>{errors.password?.message}</p>
          <label>Confirmar contraseña:</label>
          <input className='input' type="password" placeholder='Confirmar contraseña' {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>
         <input className='input'  style={{ backgroundColor: 'rgb(144, 118, 99)', marginBottom:10 }}  type="submit" />
      </form>
  </div>

  </>
  )
}
