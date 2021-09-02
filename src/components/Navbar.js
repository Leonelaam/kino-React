import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <>
    <nav className="navbar navbar-expand-lg bg-info mb-2 ml-5">
    <Link to="/">Kino</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav p-2">
          <li className="nav-item active mx-3">
            <Link to="/peliculas">Peliculas</Link>
          </li>
          <li className="nav-item mx-3">
          <Link to="/programas_tv">Programas de television</Link>
          </li>
          <li className="nav-item mx-3">
          <Link to="/personas">Personas</Link>
          </li>
        </ul>
      </div>
    </nav>
        </>
     );
}
 
export default Navbar;