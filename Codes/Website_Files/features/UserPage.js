import React from 'react';


function UserPage() {

  const email = localStorage.getItem('email') || "guest@xyz.com";  
  const name = localStorage.getItem('name') || "Guest User";
    return (

        <div style={{marginLeft:"34%", marginTop:"10%"}}>
            <div  className=" text-3xl" style={{marginLeft: "2.5vw", marginTop:"3vh", background:"green", color:"white" ,width:"190px", borderRadius:"15px"}}> <h1  >My Profile</h1>  </div>
           <div className="mx-auto mt-7 bg-white max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
           <h1 className="text-4xl mx-4 my-2 font-bold tracking-tight mb-2 text-gray-900">
    <span > Welcome <span style={{ color:"orange"}}>{name.toUpperCase()}</span>  🧑‍🌾!!</span>
 </h1>
 
                           <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                           <h3 className="text-xl font-bold tracking-tight  text-red-700">
   
     Email: <span style={{ color:"green"}}>{email}</span> 
 
 </h3>
                           
                       </div>
                     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                   
                   </div>
                   </div>
                   </div>

                    
   );
}

export default UserPage;