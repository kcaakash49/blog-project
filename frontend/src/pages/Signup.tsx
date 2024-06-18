import { Quote } from "../component/Quote";
import { SignUpComponent } from "../component/SignupComponent";

const Signup = () => {
  return (
    <div className=" bg-slate-300 lg:bg-red-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <SignUpComponent />
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
