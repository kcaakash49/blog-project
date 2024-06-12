import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useState } from "react";


import { SignupSchema } from "@kcaakash/common-blogapp";
import { signupcall } from "../services/signup";



export const SignUpComponent = () => {
  const [inputs, setInputs] = useState<SignupSchema>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignup = async () => {
    await signupcall(inputs, navigate)
  }

  return (

    <div className="border-2 lg:border-0 p-10  bg-white flex flex-col justify-center">
      <div className="text-center font-extrabold sm:text-2xl">
        Create an account
      </div>
      <div className="text-center text-xs text-[#6b7280]">
        Already have an account?{" "}
        <Link to={"/signin"} className="underline hover:text-blue-400">
          Login
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2 pt-4">
        <InputBox
          label="Name"
          placeholder="Enter your name"
          type="text"
          onChange={(e) => {
            setInputs({ ...inputs, name: e.target.value });
          }}
        />

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
        
        <Button label="Sign Up" onClick={handleSignup} />
      </div>
    </div>


  );
};
