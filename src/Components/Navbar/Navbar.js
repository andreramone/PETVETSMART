import React from 'react';
import {Link} from 'react-router-dom'
import styles from './navbar.css'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import  from '../Routes/Routes'

function Navbar(){
    return (
            
        <nav>
           <ul className="navbg">
               <li>
                   <Link to='/'>Pagina inicial</Link>
               </li>
               <li>
                   <Link to='/login'>Login / Criar sua conta</Link>
               </li>

               <li>
                   <Link to='/clients'>Clientes</Link>
               </li>
            </ul> 
        </nav>
             

    )
}
export default Navbar