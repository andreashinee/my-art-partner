import NavBar from '../navbar/NavBar';
import { NavLink } from 'react-router-dom'

<NavBar/>

function Shows (){

  return (
   
    <li className= "nav-item">
      <NavLink to="/shows" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Discober </NavLink>
    </li>

    

  )


}

export default Shows