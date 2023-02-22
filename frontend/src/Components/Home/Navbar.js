import { Link } from 'react-router-dom';
import logo from '../../Img/logo.png'

function Navbar(){
    return (
       <div>
         <div style={{textAlign: 'center'}} className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand animate__animated animate__fadeInLeft" to="/"><img style={{height: "55px"}} src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight" id="navbarNav">
            <ul className="navbar-nav responsive">
              <li className="nav-item">
                <Link className="nav-link MarginT text-dark active" aria-current="page" to="/program">Program</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link MarginT text-dark" to='/blog'>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link MarginT text-dark" to="/Clubs">Clubs</Link>
              </li>
              <li className="nav-item upBtns">
              <Link to="/signin"><button className='button'>Login/SignUp</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
       </div>
    )
}

export default Navbar;