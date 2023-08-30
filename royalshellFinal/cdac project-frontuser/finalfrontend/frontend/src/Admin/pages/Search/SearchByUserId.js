import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router";

function SerchByUserId() {
  const [userId, setUserId] = useState(0);
  const [userList, setUserList] = useState([]);

  const getUserById = () => {
    if (userId == 0) {
      toast.warning("UserId is mandatory");
    } else {
      const url = `${URL}/user/${userId}`;
      axios.get(url).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          setUserList(result["data"]);
          toast.success("Successfully submitted UserId");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const DeleteUser = () => {
    const url = `${URL}/user/delete/${userList.userId}`;
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        toast.success("Deleted Successfully");
        refreshPage();
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  return (
    <div className="container">
        <br/>
        <br/>
      <div class="row g-3 shadow-lg p-3 mb-5 bg-body rounded-3">
          
        <div class="col-sm">
          {/* <label htmlFor="" className="label-control">
            Users Id
          </label> */}
          <input
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            type="number"
            class="form-control"
            placeholder="UserId"
            aria-label="User Id"
          />
        </div>
        <div class="col-sm">
          <label htmlFor="" className="label-control"></label>
          <button onClick={getUserById} type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>

      <hr />
      <div className="container">
        <table class="table shadow-lg p-3 mb-5 bg-body rounded-3">
          <thead>
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">Role</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Created Date</th>
              <th scope="col">Gender</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Pincode</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userList.userId}</td>
              <td>{userList.role}</td>
              <td>{userList.firstName}</td>
              <td>{userList.lastName}</td>
              <td>{userList.email}</td>
              <td>{userList.createdTimestamp}</td>
              <td>{userList.gender}</td>
              <td>{userList.mobile}</td>
              <td>{userList.address}</td>
              <td>{userList.city}</td>
              <td>{userList.state}</td>
              <td>{userList.zipcode}</td>
              <td>
                <button
                  onClick={DeleteUser}
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SerchByUserId;
