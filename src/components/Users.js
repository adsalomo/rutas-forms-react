import React, { useState } from 'react'

export const Users = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [formulario, setFormulario] = useState({});
  const { nombre = '', edad = 0 } = formulario;

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setFormulario({...formulario, [e.target.name]: e.target.value });
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(formulario);
    setUsuarios([...usuarios, formulario]);
  }

  return (
    <>
      <h3>Crear nuevo usuario</h3>
      <hr />
      <form onSubmit={  (e) => handleOnClick(e) }>
       
        <label>Nombre</label>
        <input name="nombre" value={nombre} onChange={ (e) => handleOnChange(e) } />
    
        <label>Edad</label>
        <input name="edad" type='number' value={edad} onChange={ (e) => handleOnChange(e) } />
          
        <button>Guardar</button>
       
      </form>
      <ul>
        {
          usuarios.map(function(usuario){
            return <li key={usuario.nombre}>{ `Nombre: ${usuario.nombre} Edad: ${usuario.edad}` }</li>
          })
        }
      </ul>
    </>
  )
}
