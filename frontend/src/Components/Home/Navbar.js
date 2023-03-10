import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../Img/logo.png';

function Navbar() {
  const location = useLocation();

  function isAuthenticated() {
    // Replace this with your own authentication logic
    const jsonUser = localStorage.getItem('user');
    const user = JSON.parse(jsonUser);
    return Boolean(user?.token);
  }

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }} className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand animate__animated animate__fadeInLeft" to="/home">
              <img style={{ height: "55px" }} src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight" id="navbarNav">
              <ul className="navbar-nav responsive">
                <li className="nav-item">
                  <NavLink
                    className="nav-link MarginT text-dark"
                    activeClassName="active"
                    isActive={() => isActive('/program')}
                    to="/program"
                  >
                    Program
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link MarginT text-dark"
                    activeClassName="active"
                    isActive={() => isActive('/blog')}
                    to='/blog'
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link MarginT text-dark"
                    activeClassName="active"
                    isActive={() => isActive('/Clubs')}
                    to="/Clubs"
                  >
                    Clubs
                  </NavLink>
                </li>
                {isAuthenticated() ? (
                  <li className="nav-item upBtns">
                    <Link to="/dashboard"><button className='button'>Dashboard</button></Link>
                  </li>
                ) : (
                  <li className="nav-item upBtns">
                    <Link to="/signin"><button className='button'>Login/SignUp</button></Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
