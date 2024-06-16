import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout() {
    useEffect(() => {
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('lastUploadedImage');
    }, []);
    return ( 
        <>
         {<Navigate to="/login" replace={true}></Navigate>}
       
        
        </>
     );
}

export default Logout;