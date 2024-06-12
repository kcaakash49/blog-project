import { SigninSchema } from "@kcaakash/common-blogapp";
import axios  from "axios";

export const signinCall = async(inputs: SigninSchema) => {
    try{
        const response = await axios.post("http://localhost:8787/api/v1/user/signin",inputs)
        console.log(response)
    }catch(e : unknown){
        console.error("Something happened",e)
    }

}