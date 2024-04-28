import React,{useState, useContext} from "react";
import UserContext from "../context/UserContext";
function Login(){
    const [USERNAME, SETUSERNAME ] = useState('')
    const [PASSWORD, SETPASSWORD] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser(USERNAME,PASSWORD)
    }
    return(
        <div>
            <h2>LOGIN</h2>
            <input type="text"
            value={USERNAME} 
            onChange={(e)=>SETUSERNAME(e.target.value)}
            placeholder="USERNAME" />
            {" "}
            <input type="text" 
            value={PASSWORD} 
            onChange={(e)=>SETPASSWORD(e.target.value)}
            placeholder="PASSWORD" />
            
            <button onClick={handleSubmit} >SUBMIT</button>
       </div>

    )
}
export default Login;