import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import PaginaInicial from './Components/Pagina-inicial/Pagina-inicial';
import Login from './Components/Login/Login-page';
import Error from './Components/Error-Page/ErrorPage'
import ClientPage from './Components/Client-Page/Client';
import Cadastro from './Components/Cadastro/Cadastro';
import ResetarSenha from './Components/Resetar-senha/resetar'

function App(){
    return ( 
      <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<PaginaInicial/>}/>
        <Route exact path="/cadastro" element={<Cadastro/>}/>
        <Route exact path="/resetar" element={<ResetarSenha/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/clients" element={<ClientPage/>} />
        <Route path="*" element={<Error/>} />

     </Routes>
    </Router>
     
    );
  }


export default App
