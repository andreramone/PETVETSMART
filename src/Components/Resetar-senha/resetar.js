import React from "react"
import { Link } from "react-router-dom"
import styles from '../../main.scss'


export default function ResetarSenha(){

    return (
      <section id="entry-page">
      <form>
      <h2>Resetar senha</h2>
      <fieldset>
        <ul>
          <li>
            <em>Um link para resetar sua senha sera enviado por e-mail</em>
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required/>
          </li>
        </ul>
      </fieldset>
      <button>Enviar</button>
      <Link to="/login" className="link">Voltar</Link>
    </form>
    </section>
  
    )
  }





