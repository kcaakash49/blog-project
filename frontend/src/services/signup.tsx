import { SignupSchema } from "@kcaakash/common-blogapp";
import axios from "axios";
// import { useState } from "react";
import { NavigateFunction } from "react-router-dom";




export const signupcall = async (inputs:SignupSchema,navigate: NavigateFunction) =>{
    
    try{
        const response = await axios.post("http://localhost:8787/api/v1/user/signup", inputs);
        console.log('signup success',response)
        navigate('/signin')
    }catch (err){
        console.error('signup failed')
    }
   
}
        
        

