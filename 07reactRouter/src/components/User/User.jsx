import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid}=useParams()
    return(
        <div className="bg-gray-900 text-white text text-3xl" > USER : {userid} </div>
    )
    
}
export default User;

