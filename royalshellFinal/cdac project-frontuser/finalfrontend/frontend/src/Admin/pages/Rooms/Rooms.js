import React from "react";
import  RoomList from './RoomList'
import { useEffect,useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../../config'




function Rooms  () {
  const [roomList, setRoomList] = useState([]);
  // const navigate = useNavigate();

  const getRoomList = () => {
    const url = `${URL}/rooms/allrooms`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setRoomList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(()=>{
    getRoomList()
  },[])

  return (
    <div class="container">
      <div>
        <br/>
        <br/>
        <table class="table shadow-lg p-3 mb-5 bg-body rounded-3">
          <thead>
            <tr>
              <th scope="col">Room Id</th>
              <th scope="col">Category</th>
              <th scope="col">BedCount</th>
              <th scope="col">AdultCount</th>
              <th scope="col">ChildCount</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>


            </tr>
          </thead>
          <tbody>
              {
                  roomList.map((roomList)=>{
                      return <RoomList roomList = {roomList}/>
                  })
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Rooms