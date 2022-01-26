import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom"
       
  
      function FormCadastro() {

        
          const [inputs, setInputs] = useState({
            name: "",
            senha: "",
            nome: "",
            email: ""
          })
        
          const handleChange = e => {
            setInputs({
              ...inputs,
              [e.target.name]: e.target.value
            })
        }
        const handleSubmit = e => {
          e.preventDefault();
          
          const url = 'https://localhost:3003'
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ setInputs })
          };
          fetch(url, requestOptions)
              .then(response => console.log('Submitted successfully'))
              .catch(error => console.log('Form submit error', error))
        };
       
      
    
          return (
          <section id="entry-page">
        <form onSubmit={handleSubmit}>
        <h1 className="petvetentrada">PETVET SMART </h1>
      <h2>Cadastre-se agora</h2>
      <fieldset>
        <ul>
          <li>
            <label htmlFor="login">Login:</label>
            <input type="text" id="login" value={inputs.login  || ''} name="login" onChange={handleChange} required/>
          </li>
      
          <li>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" value={inputs.senha || ''} name="senha" onChange={handleChange}required/>
          </li>

          <li>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value={inputs.nome || ''} name="nome" onChange={handleChange} required/>
          </li>
          
          <li>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={inputs.email || ''} name="email" onChange={handleChange} required/>
          </li>
        </ul>
      </fieldset>
      <button type="submit" className="button" >Cadastrar</button>
      <Link to="/login" className="link">Tem uma conta?</Link>
    </form>
          </section>
        )
          }
      

export default FormCadastro


        