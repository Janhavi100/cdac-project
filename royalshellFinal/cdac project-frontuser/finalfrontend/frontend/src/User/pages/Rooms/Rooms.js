import React from "react";
import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import UserRoomscard from "./RoomsCard";

function UserRooms() {
  const [roomsList, setRoomsList] = useState([]);
  const navigate = useNavigate();

  const getRoomsList = () => {
    const url = `${URL}/rooms/allrooms`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setRoomsList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getRoomsList();
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        rowGap: "10px",
        columnGap: "10px",
      }}
    >
      {roomsList.map((roomsList) => {
        return <UserRoomscard roomsList={roomsList} />;
      })}
    </div>
  );
}

export default UserRooms;
