import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";

const UserList = (props) => {
  const [role, setRole] = useState("");
  //const [userId, setUserId] = useState(0);

  const { userList } = props;
  
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  };

  // const changeRole = () => {
  //  // setRole(`${userList.role}`)
  //   console.log(role)
  //   if (role == "user") {
  //     setRole("admin");
  //     console.log("set as admin")
  //     console.log(role)
  //   } else if (role == "admin") {
  //     setRole("user");
  //     console.log("set as user")
  //     console.log(role)
  //   } else {
  //     const body = {
        
  //       role,
  //     };

  //     const url = `${URL}/user/updateuserrole/${userList.userId}`;

  //     axios.post(url, body).then((response) => {
        
  //       const result = response.data;
  //       console.log(result);
  //       if (result["status"] == "success") {
  //         toast.success("Successfully changed Role");
  //        //refreshPage();
  //       } else {
  //         toast.error("Failed");
  //       }
  //     }).catch((error) => {
  //       toast.error("Failed");
  //     });
  //   }
  // };


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

  //setUserId(userList.userId);

  return (
    <tr>
      <td>{userList.userId}</td>
      <td>
        {/* <button onClick={(userList)=>{
          setRole(userList.role == "user"? "admin" :"user");
          console.log(role)
        }} type="button" class="btn btn-success">
          {userList.role}
        </button> */}
        <button
          onClick={() => {
            navigate("/users/edit/changerole", {
              state: { userId: userList.userId },
            });
          }}
          type="button"
          class={ userList.role == "admin"  ? "btn btn-outline-secondary fw-bold"  : "btn btn-outline-primary fw-bold"}
        >
          {userList.role}
        </button>
      </td>
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
        <button onClick={DeleteUser} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserList;
