import React from 'react';
import UserList from "./UserList";
import axios from 'axios'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../../../config'

function Users() {
  const [userList, setUserList] = useState([]);
  // const navigate = useNavigate();

  const getUserList = () => {
    const url = `${URL}/user/allusers`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] ==="success") {
        setUserList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(()=>{
      getUserList()
  },[])

  return (
    <div class="container">
      <div>
        <br/>
        <br/>
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
              {
                  userList.map((userList)=>{
                      return <UserList userList = {userList}/>
                  })
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
