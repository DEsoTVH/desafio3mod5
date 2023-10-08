import { NavLink } from "react-router-dom"  
import pokeIcon from '../assets/imgs/pokeball.png'

export default function NavBar() 

{ 

return (

<nav>
      <span>
          <img src={pokeIcon} alt="pokeball" />
      </span>
      <ul>
        <li>
            <NavLink className={({isActive})=> isActive? 'active' : undefined } to="/"> Home </NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive? 'active' : undefined } to="/pokemon"> Pokemons </NavLink>
        </li>
      </ul>
    </nav>
    );
  }



//     NO LA TERMINE USANDO PERO DEJARE EL CODIGO PORQUE PRETENDO HACERLO FUNCIONAR Y NO QUIERO ELIMINARLO AUN, NO ME RENDIRE. //


      // <Navbar bg="primary" data-bs-theme="dark">
      //     <Nav className="me-auto">
      //     <Container>
      //     <Image> </Image>
      //     <NavLink className={setActiveClass} to="/"> Home </NavLink>
      //     <NavLink className={setActiveClass} to="/pokemon"> Pokemons </NavLink>
      //     </Container>
      //     </Nav>
      // </Navbar> 
      
