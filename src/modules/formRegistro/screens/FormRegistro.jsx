import React from 'react'
import '../../../../src/index.css'

export default function FormRegistro() {
  return (
    <>
    <div className='container'>
    <h4 style={{color:'gray'}}><span>Flawless</span></h4>
     <img 
        src="https://cdn-icons-png.flaticon.com/512/599/599502.png " 
        alt="flawless" 
        style={{width:60, marginBottom:10}}
      />
      <form >
         <label>Nombre:</label>
          <input className='input' type="text" placeholder='Nombre' />
          <p>error...</p>
          <label>Apellidos:</label>
          <input className='input' type="text" placeholder='Apellidos P/M' />
          <p>error...</p>
          <label>Edad:</label>
          <input className='input' type="number" placeholder='Edad' />
          <p>error...</p>
          <label>Teléfono:</label>
          <input className='input' type="text" placeholder='Teléfono' />
          <p>error...</p>
          <label>Contraseña:</label>
          <input className='input' type="password" placeholder='Contraseña'  />
          <p>error...</p>
          <label>Confirmar contraseña:</label>
          <input className='input' type="password" placeholder='Confirmar contraseña' />
          <p>error...</p>
         <input className='input'  style={{ backgroundColor: 'rgb(144, 118, 99)', marginBottom:10 }}  type="submit" />
      </form>
  </div>

  </>
  )
}
