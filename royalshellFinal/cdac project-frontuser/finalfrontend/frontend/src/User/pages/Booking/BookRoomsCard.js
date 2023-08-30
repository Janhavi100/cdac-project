import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import UserAddBooking from "./AddBooking";

const UserBookRoomsCard = (props) => {
  const { roomsList,checkIn,checkOut } = props;

  // const [addBooking, setAddBooking] = useState(false);

  const navigate = useNavigate();

  const image = require('./../../../image/rooms/' + roomsList.roomCategory.categoryId + '.jpg');

  return (
    <div className="card" style={{ width: "500px" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{roomsList.roomCategory.title}</h5>
        <p className="card-text">{roomsList.description}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Price : {roomsList.price}</li>
          <li class="list-group-item"> Adult Count : {roomsList.adultCount}</li>
          <li class="list-group-item">Child Count : {roomsList.childCount}</li>
          <li class="list-group-item">
            Facilities :
            {roomsList.facility.map((facility) => {
              return <UserBookRoomFacility facility={facility} />;
            })}
          </li>
        </ul>
        <button
          // onClick={()=>{
          //   setAddBooking(true)
          // }}
          onClick={() => {
            navigate("/user/booking/bookroom/addbooking/", {
              state: { roomId: roomsList.roomId , checkIn: checkIn, checkOut: checkOut },
            });
          }}
          //roomsList.roomId
          className="btm btn-primary"
        >
          Book Now
        </button>

        {/* <AddBooking id={1} /> */}
      </div>
    </div>
  );
};

export const UserBookRoomFacility = (props) => {
  const { facility } = props;

  return (
    <div>
      <ul>
        <li>
          {facility.title} : {facility.description}
        </li>
      </ul>
    </div>
  );
};

export default UserBookRoomsCard;
