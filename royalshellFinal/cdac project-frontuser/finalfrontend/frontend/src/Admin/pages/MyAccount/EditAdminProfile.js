import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../config";

function EditAdminProfile() {
  const navigate = useNavigate();

  const [userId, setuserId] = useState(0);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [idproofs, setIdproofs] = useState(0);
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [idproofList, setidproofList] = useState([]);

  const loadDetails = () => {
    const userId = sessionStorage["userId"];
    const url = `${URL}/user/${userId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        const {
          userId,
          lastName,
          firstName,
          email,
          gender,
          idproofs,
          mobile,
          address,
          city,
          state,
          zipcode,
        } = result["data"];
        setuserId(userId);
        setLastName(lastName);
        setFirstName(firstName);
        setEmail(email);
        setIdproofs(idproofs);
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

  const loadIdproof = () => {
    const url = `${URL}/idproof/allidproof`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setidproofList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    loadDetails();
    loadIdproof();
  }, []);

  const updateUserProfile = () => {
    if (firstName.length == 0) {
      toast.warning("Please enter first name");
    } else if (lastName.length == 0) {
      toast.warning("Please enter last name");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else {
      const body = {
        userId,
        lastName,
        firstName,
        email,
        idproofs,
        gender,
        mobile,
        address,
        city,
        state,
        zipcode,
      };
      const url = `${URL}/user/updateuserprofile`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated user");
          navigate("/account/profile");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };

  return (
    <div className="container">
      <br/>
      <br/>
      <div>
        <div className="row">
          <div className="col shadow-lg p-3 mb-5 bg-body rounded-3">
            <h3 className="text-center">Profile</h3>

            <hr />
            <br />
            <div className="form">
              <table className="table ">
                <tbody>
                  <tr>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Email Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Mobile
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => {
                            setMobile(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Gender
                        </label>
                        <div className="row">
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="male"
                                onChange={(e) => {
                                  setGender(e.target.value);
                                }}
                                checked={gender == "male"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Male
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="female"
                                onChange={(e) => {
                                  setGender(e.target.value);
                                }}
                                checked={gender == "female"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Idproof
                        </label>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          value={idproofs.id}
                          onChange={(e) => {
                            setIdproofs(e.target.value);
                          }}
                        >
                          {/* <option value={idproofObject.id}>{idproofList.type}</option> */}
                          {idproofList.map((idproofList) => {
                            return (
                              <option value={idproofList.id}>
                                {idproofList.type}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value)
                          }}
                        />
                      </div>
                    </td>

                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={state}
                          onChange={(e) => {
                            setState(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          ZipCode
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={zipcode}
                          onChange={(e) => {
                            setZipcode(e.target.value)
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-3">
                <button onClick={updateUserProfile} className="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default EditAdminProfile;
