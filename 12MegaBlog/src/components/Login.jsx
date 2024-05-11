import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom"; 
import {login as authLogin} from "../store/authSlice"
import {Button, Input, Select } from "./index"
import { useDispatch } from "react-redux";
import AuthService from "../appwrite/auth";
import { useForm} from "react-hook-form";


function Login(){
    const login = async("")
    {
        try{

        }catch(error){

        }
    }
    return(
        <div>Login</div>
    )
}