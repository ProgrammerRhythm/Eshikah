import { Link } from 'react-router-dom';
import logo from '../../Img/logo.png'

function Navbar(){
    return (
        <div style={{textAlign: 'center'}} className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand animate__animated animate__fadeInLeft" to="/"><img style={{height: "70px"}} src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight" id="navbarNav">
            <ul className="navbar-nav responsive">
              <li className="nav-item">
                <Link className="nav-link MarginT text-dark active" aria-current="page" to="/Program">Program</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link MarginT text-dark" to='/universities'>Universities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link MarginT text-dark" to="/Clubs">Clubs</Link>
              </li>
              <li className="nav-item upBtn">
              <Link to="/signin"><button className='button'>Log in/Sign Up</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar;