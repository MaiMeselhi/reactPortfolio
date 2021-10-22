import "./Navbar.css"
import { Link } from "react-router-dom";

const Nav = () => {
   return (

     <nav className="nav d-flex justify-content-around align-items-center">
       <h3 className="logo">React-Portfolio</h3>
       <ul className="d-flex justify-content-around align-items-center w-50">
       <Link to="/About"> <li className="list-item">About Me</li></Link>
       <Link to="/Todo"> <li className="list-item">Todo List</li></Link>
       <Link to="/Container"> <li className="list-item py-3">Counter</li></Link>
       <Link to="/Shop"> <li className="list-item">E-Commerce</li></Link>
       <Link to="/Login"> <li className="list-item">Login</li></Link>
       <Link to="/Register"> <li className="list-item">Regiser</li></Link>

       </ul>
     </nav>
   );
 };


   export default Nav;