import { useState } from "react";
import { InputBox } from "./InputBox";
import { SigninSchema } from "@kcaakash/common-blogapp";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { signinCall } from "../services/signin";

export default function SigninComponent() {
    const [inputs, setInputs] = useState<SigninSchema>({
        email: "",
        password: ""
    })
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();
    const handleSignIn = async () => {
        setLoader(true)
        await signinCall(inputs,navigate)
        setLoader(false)
    }
    return (
        <div className="flex">

            <div className="flex flex-col items-center border p-5 gap-2">
                <div className="font-extrabold text-2xl "> Signin</div>
                <div className="text-xs text-[#6b7280]">Create an account? <Link to={'/signup'} className="hover:text-blue-400 underline text-blue-600" >Signup</Link></div>
                <InputBox
                    label="Email"
                    placeholder="m@example.com"
                    type="email"
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                />
                <InputBox
                    label="Password"
                    placeholder=""
                    type="password"
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                
                <Button label="Sign In" onClick={handleSignIn} />
                {loader && <div> Loading.......</div>}
            </div>
        </div>
    )
}