import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";
import { Navigate } from "react-router-dom";

function SignIn({state ,sendDataToParent}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  };

  
  const signinUser = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      const url = `${URL}/user/signin`;

      axios.post(url, body).then((response) => {
        
        
        const result = response.data;
        console.log(result);
        if (result!=null  && result["status"] == "success") {
          toast.success("Welcome to the application");

          const { userId, firstName, lastName, role } = result["data"];

          sessionStorage["userId"] = userId;
          sessionStorage["firstName"] = firstName;
          sessionStorage["lastName"] = lastName;
          sessionStorage["loginStatus"] = 1;
          sessionStorage["role"] = role;

          if(role==="admin"){
            navigate("/adminhome")
            refreshPage()
          }else{
            navigate("/userhome")
            refreshPage()
          }

        } else {
          toast.error("Invalid user name or password");
        }
      }).catch((error) => {
        toast.error("Invalid user name or password");
        // if (error.response) {
        //   console.log(error.response.status);
        //   toast.error("Invalid user name or password");
        // }
      });
    }
  };

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col"></div>
        <div className="col shadow-lg p-3 mb-5 bg-body rounded">
          <div>
            <h3 className="text-center">Sign In</h3>
          </div>
          <hr />
          <br />
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div>
              <br />
              <button onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export const SignOut = () => {
  const navigate = useNavigate();


  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("firstName");
  sessionStorage.removeItem("lastName");
  sessionStorage.removeItem("loginStatus");
  sessionStorage.removeItem("role");
  
    navigate("/");
  

   return <Navigate to="/" />;
};

export default SignIn;
