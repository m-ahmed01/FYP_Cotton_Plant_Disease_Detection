import UserPage from "../../features/UserPage";
import Navbar from "../navbar/Navbar";

function UserProfilePage () {
    return ( 
        <div>
            <Navbar/>
            <div>
            <UserPage></UserPage>
            </div>
        </div>
     );
}

export default UserProfilePage ;