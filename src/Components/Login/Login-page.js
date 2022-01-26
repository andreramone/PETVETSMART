  import React, {useState} from "react"
  import { Link } from "react-router-dom"
  import LoginStyles from '../../main.scss'
import { useNavigate } from "react-router-dom";


       
      function Login() {

  //       const [email, setEmail] = useState("");
  //       const [senha, setSenha] = useState("");
  //       const navigate = useNavigate();

  // const { actions, state } = useStateMachine({ updateValues });
  // function updateValues(state, payload) {
  //   return {
  //     ...state,
  //     yourDetail: {
  //       ...state.yourDetail,
  //       ...payload,
  //     },
  //   };
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   login(email, senha);
  //   navigate('/home')
  // }


        
        return (
          <section id="entry-page">
          <form>
             <h1 className="petvetentrada">PETVET SMART </h1>
            <h2>Faca seu login</h2>
            <fieldset>
              <ul>
              <legend>Entre com suas credenciais</legend>
                <li>
                  <label htmlFor="username">Usuario:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="password">Senha:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <Link to="/resetar" className="link">Esqueceu a senha?</Link>
                </li>
              </ul>
            </fieldset>
  
            <Link to="/clients" className="link">Entrar</Link>
            <Link to="/cadastro" className="link">Crie uma conta</Link>
            
          </form>
          </section>
        )
      }

export default Login;