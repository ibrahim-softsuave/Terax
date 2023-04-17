import React from "react";
import axios from "axios";
import { baseURL } from "../constants/authConstants";

interface Signin {
  Username: string;
  Password: string;
}
export const authSignin=(props:Signin)=>{
  const {Username,Password}=props
  try{
   const data= axios
    .post(baseURL+'/signin/', {
      username:Username,
      password:Password
    })
    return data
  }
  catch {
    return {data:'Server Error'}
  }
}
