import React from "react";
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../../../config'
import { useNavigate } from "react-router-dom";

 const RoomList = (props) => {

    const {roomList} = props
    const navigate = useNavigate();
    const refreshPage = () => {
      window.location.reload(false);
    };
  
    const DeleteRoom = () => {
      const url = `${URL}/rooms/delete/${roomList.roomId}`;
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
    <tr>
      <td>{roomList.roomId}</td>
      <td>{roomList.categoryId}</td>
      <td>{roomList.bedCount}</td>
      <td>{roomList.adultCount}</td>
      <td>{roomList.childCount}</td>
      <td>{roomList.price}</td>
      <td>{roomList.description}</td>
      <td>
        <button
          onClick={() => {
            navigate("/rooms/update", {
              state: { roomId: roomList.roomId },
            });
          }}
          type="button"
          class="btn btn-primary"
        >
          Update
        </button>
      </td>
      <td>
        <button onClick={DeleteRoom} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
     
    </tr>
  );
}
export default  RoomList