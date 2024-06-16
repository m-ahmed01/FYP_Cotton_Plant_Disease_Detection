import { Link } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import logoErr from "../Components/images/404 error image.jpg";

function PageNotFound () {
    return ( 
        <>
        <Navbar/>
            <img
               
                src={logoErr}
                alt="404 Page not Found"
                style={{
                  width: '100vw',  
                  height: '90.2vh',  
                  objectPosition: 'center',
                  opacity:0.7,
                }}
            />

            <Link
  to="/"
  style={{
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: '95%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    color: "black",
    borderRadius: '20%',
    padding: '10px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }}
>
  Go back home
</Link>

        </>
    );
}

export default PageNotFound;
