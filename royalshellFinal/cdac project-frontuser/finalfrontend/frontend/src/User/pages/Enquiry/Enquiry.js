import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";

function UserEnquiry() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [remark, setRemark] = useState("");

  const navigate = useNavigate();

  const sendEnquiry = () => {
    if (firstName.length == 0) {
      toast.warning("Please enter first name");
    } else if (lastName.length == 0) {
      toast.warning("Please enter last name");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (mobile.length == 0) {
      toast.warning("Please enter mobile No");
    } else if (remark.length == 0) {
      toast.warning("Please enter remark");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        mobile,
        remark,
      };

      const url = `${URL}/enquiry/add`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully posted Enquiry");

          navigate("/userhome");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };

  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="col"></div>
        <div className="col shadow-lg p-3 mb-5 bg-body rounded-3">
          <h3 className="text-center">Enquiry</h3>
          <hr />
          <br />
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
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
                Mobile No
              </label>
              <input
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Remark
              </label>
              <input
                onChange={(e) => {
                  setRemark(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                Already have an account? <Link to="/signin">Signin here.</Link>
              </div>
              <br />
              <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div>
              <br />
            </div>
            <div className="mb-3">
              <button onClick={sendEnquiry} className="btn btn-primary">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default UserEnquiry;
