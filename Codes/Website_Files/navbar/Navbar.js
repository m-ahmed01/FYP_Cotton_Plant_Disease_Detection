import logo from '../images/apple-touch-icon.png'; 
import { Link } from 'react-router-dom';
import '../field/styles.css';
import Avatar from '../images/avatar1.jpg'


function Navbar({children}) {

 
    return ( 
        <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
 
    <a className="navbar-brand " href="/">  <img src={logo} width="30" height="30" className="d-inline-block align-text-top me-2" alt="Logo" style={{"marginLeft": "15px"}} />Cotton-Plant Disease Detector</a>
   
        <a className=" nav-active1 nav-link" style={{color: 'white', marginLeft:"10px"}} href="/">Home</a>
     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
    
           <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <img src={Avatar} alt="404" style={{"marginRight": "91px", borderRadius: '50%',width: 60, height: 60}}  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" href="/" data-bs-toggle="dropdown" aria-expanded="false" />
       
          <ul className="dropdown-menu ms-auto me-6" aria-labelledby="navbarDropdown">
            <li><Link to="/login" className="dropdown-item" >Login</Link></li>
            <li><Link to="/register" className="dropdown-item" >SignUp</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to="/myprofile" className="dropdown-item" >My Profile</Link></li>
            <li><Link to="/logout" className="dropdown-item" >Logout</Link></li>
          </ul>
        </li>


      </ul>
    </div>
  </div>
</nav>
        </>
     );
}

export default Navbar;