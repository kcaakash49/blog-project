import { SigninSchema } from "@kcaakash/common-blogapp";
import axios  from "axios";
import { NavigateFunction } from "react-router-dom";

export const signinCall = async(inputs: SigninSchema,navigate:NavigateFunction) => {
    try{
        const response = await axios.post("http://localhost:8787/api/v1/user/signin",inputs)
        console.log(response)
        navigate("/blogs")
    }catch(e : unknown){
        console.error("Something happened",e)
    }

}