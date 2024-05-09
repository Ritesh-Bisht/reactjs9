import React from "react";
import {Container , Logo , LogoutBtn} from "../index"
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";



function Header(){
    const authStatus=useSelector((state)=>state.auth.status);
    const navigate = useNavigate()
    const naItems = [
        {
            name:'Home',
            slug:"/",
            active:true,
        },
        {
            
        },
        {

        },
        {

        },
    ]
    return(
        <header>
            <Container>
                <nav>
                    <div className=""></div>
                </nav>
            </Container>
        </header>
    )
}
export default Header;