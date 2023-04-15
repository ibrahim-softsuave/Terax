import React from "react";
import axios from "axios";
import { baseURL } from "../constants/authConstants";

export const AuthSignin=async({username,password})=>{
   const data=   await axios
    .post(baseURL, {
      username:username,
      password:password
    })
    return data
}