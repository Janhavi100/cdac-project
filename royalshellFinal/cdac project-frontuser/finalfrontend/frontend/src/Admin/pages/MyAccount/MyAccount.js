import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
import {URL} from "./../../../config"

export const AdminProfile = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [idproofObject, setIdproofObject] = useState(0);
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  
  const loadDetails = () => {
    const  userId  = sessionStorage["userId"];
    const url = `${URL}/user/${userId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        const {
          userId,
          lastName,
          firstName,
          email,
          idproofObject,
          gender,
          mobile,
          address,
          city,
          state,
          zipcode,
        } = result["data"];
        setUserId(userId);
        setLastName(lastName);
        setFirstName(firstName);
        setEmail(email);
        setIdproofObject(idproofObject);
        setGender(gender);
        setMobile(mobile);
        setAddress(address);
        setCity(city);
        setState(state);
        setZipcode(zipcode);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };
 

  useEffect(() => {
    loadDetails()
  }, [])
  return (
    <div class="container">
      <br/>
      <br/>
      <div>
        <div className="row">
          <div className="col shadow-lg p-3 mb-5 bg-body rounded-3">
            <p>
              <h3 className="text-center">Profile</h3>
            </p>
            <hr />
            <br />
            
            <table class="table table-hover">
             
              <tbody>
                <tr>
                  <td>
              <div className="mb-3">
              
                <label htmlFor="" className="label-control">
                  First Name
                </label>
                <input type="text" className="form-control" value={firstName} readOnly />
              </div>
              </td>
              <td>
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Last Name
                </label>
                <input type="text" className="form-control"  value={lastName} readOnly />
              </div>
              </td>
              </tr>

              <tr>
                <td><div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email Address
                </label>
                <input type="text" className="form-control" value={email} readOnly />
              </div></td>
              <td><div className="mb-3">
                <label htmlFor="" className="label-control">
                  Mobile
                </label>
                <input type="text" className="form-control" value={mobile} readOnly />
              </div></td>
              </tr>

              

              <tr>
                <td><div className="mb-3">
                <label htmlFor="" className="label-control">
                  Idproof
                </label>
                <input type="text" className="form-control" value={idproofObject.type} readOnly />
              </div></td>

              <td><div className="mb-3">
                <label htmlFor="" className="label-control">
                  Gender
                </label>
                <input type="text" className="form-control" value={gender} readOnly />
              </div></td>
              </tr>

              
              <tr>
                <td><div className="mb-3">
                <label htmlFor="" className="label-control">
                  Address
                </label>
                <input type="text" className="form-control" value={address} readOnly />
              </div></td>

              <td><div className="mb-3">
                <label htmlFor="" className="label-control">
                  City
                </label>
                <input type="text" className="form-control" value={city} readOnly />
              </div></td>
              </tr>

              
              <tr>
                <td>
                <div className="mb-3">
                <label htmlFor="" className="label-control">
                  State
                </label>
                <input type="text" className="form-control"  value={state} readOnly />
              </div>
                </td>
                <td>
                <div className="mb-3">
                <label htmlFor="" className="label-control">
                  ZipCode
                </label>
                <input type="text" className="form-control"  value={zipcode} readOnly />
              </div>
                </td>
              </tr>
              
            
              
              </tbody>
            </table>
            
            
              <div className="mb-3">
                <button
                  onClick={() => {
                    navigate("/account/profile/edit");
                  }}
                  className="btn btn-primary"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
   
  );
};

export const ChangePassword = () => {
  const navigate = useNavigate()

  const updateUserPassword = () =>{
    navigate('/')
  }


  return (
    <div class="container">
      <div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <p>
              <h3 className="text-center">Change Password</h3>
            </p>
            <hr />
            <br />
            <div className="form">
            <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Old Password
                </label>
                <input type="password" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  New Password
                </label>
                <input type="password" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Confirm Password
                </label>
                <input type="password" className="form-control" />
              </div>
              
              <div className="mb-3">
                <button onClick={updateUserPassword} className="btn btn-primary">Change Password</button>
          </div>
            </div>
          </div>
          <div className="col">
          
          </div>
        </div>
      </div>
    </div>
  );
};