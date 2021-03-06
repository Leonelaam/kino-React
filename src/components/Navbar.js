import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
    return ( 
        <>
    

    <nav className="navbar navbar-expand-lg bg-info mb-2 ml-5">  
    <strong><Link className="navbar-brand mx-5" to="/">Kino</Link></strong>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav p-2">
          <li className="nav-item active mx-4">
          <strong><Link to="/peliculas">Peliculas</Link></strong>
          </li>
          <li className="nav-item mx-4">
          <strong><Link to="/personas">Personas</Link></strong>
          </li>
          <li className="nav-item mx-4">
          <strong><Link to="/programastv">Programas TV.</Link></strong>
          </li>
        </ul>
      </div>
    </nav>
        </>
     );
}
 
export default Navbar;