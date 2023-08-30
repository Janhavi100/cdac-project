import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
import { URL } from "../../../config";


const EditUserRole = () => {

  const { state } = useLocation();
  const [userId, setUserId] = useState(0);
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const loadUser = () => {
    const { userId } = state;

    const url = `${URL}/user/${userId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        const { userId, role } = result["data"];
        setUserId(userId);
        setRole(role);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const editRole = () => {
    if (role.length == 0) {
      toast.warning("Please enter role");
    } else {
      const body = {
        userId,
        role        
      };

      const url = `${URL}/user/updateuserrole/${userId}`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated Role");
          navigate("/users");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };


    return (
      <div className="update">
      <div className="container">
        <br/>
        <br/>
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Edit User Role</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>User Id</h3>
            </label>
            <input
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
              value={userId}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Role</h3>
            </label>
            <input
              onChange={(e) => {
                setRole(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Title"
              width="500px"
              value={role}
            />
          </div>
          <br/>
          <div class="form-group">
            <button
              onClick={editRole}
              type="button"
              class="btn btn-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    );
  };

  export default EditUserRole;