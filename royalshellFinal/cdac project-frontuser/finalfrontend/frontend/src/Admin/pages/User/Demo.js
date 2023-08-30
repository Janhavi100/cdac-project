import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../config";

function EditUserRole() {
  const navigate = useNavigate();
  const object  = useLocation();
  const [admin,setAdmin]=useState("admin");
  const [user,setUser]=useState("user");

  const [userId, setuserId] = useState(0);

  const [role, setRole] = useState("");
  const [idproofs, setIdproofs] = useState(0);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const loadDetails = () => {

    const {id}  = object;
    const url = `${URL}/user/${id.id}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        const {  userId,
          role,
          lastName,
          firstName,
          email,
          gender,
          idproofs,
          mobile,
          address,
          city,
          state,
          zipcode,} = result["data"];
          setuserId(userId);
          setRole(role);
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
    });
  };

  useEffect(() => {
    loadDetails();
  }, []);

  const updateUserRole = () => {
    console.log(role);
    console.log(userId);
    const body = {
      userId,
      role,
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
    const url = `${URL}/user/updateuserrole/${userId}`;
    axios.post(url, body).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully updated user");
        navigate("/users");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col">
            <h3 className="text-center">Change Role</h3>

            <hr />
            <br />
            <div className="form">
              <table className="table ">
                <tbody>
                  <tr>
                    <td>
                      <div className="mb-3">
                        <label htmlFor="" className="label-control">
                          Role
                        </label>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                          }}
                        >
                          <option value={admin}>Admin</option>
                          <option value={user}>User </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-3">
                <button onClick={updateUserRole} className="btn btn-primary">
                  Update Role
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

export default EditUserRole;
