import axios from "axios";
import { baseURL } from "../constants/authConstants";

interface Signin {
  Username: string;
  Password: string;
}
export const authSignin=async(props:Signin)=>{
  const {Username,Password}=props
  try{
   const data= await axios
    .post(baseURL+'/signin/', {
      username:Username,
      password:Password
    })
    return data
  }
  catch(error) {
    return {data:'Server Error'}
  }
}
