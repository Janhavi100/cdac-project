import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";

import image1 from './../../../image/rooms/1.jpg';


const UserRoomsCard = (props) => {
  const { roomsList } = props;
  
  const image = require('./../../../image/rooms/' + roomsList.roomCategory.categoryId + '.jpg');

  const navigate = useNavigate();

  return (
    <div>
      <br/>
      <div className="card" style={{ width: "500px" }}>
      <img src={image} className="card-img-top" alt="..." style={{height: "300px"}} />
      <div className="card-body">
        <h5 className="card-title">{roomsList.roomCategory.title}</h5>
        <p className="card-text">
          {roomsList.description}

        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Price : {roomsList.price}</li>
          <li class="list-group-item"> Adult Count : {roomsList.adultCount}</li>
          <li class="list-group-item">Child Count : {roomsList.childCount}</li>
          <li class="list-group-item">Facilities : 
            {roomsList.facility.map((facility) => {
              return <UserRoomFacility facility={facility} />;
            })}
          </li>
        </ul>
        {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        {/* <button  
          // onClick={()=>{
          //   setAddBooking(true)
          // }} 
          onClick={() => {
            navigate("/booking/bookroom/addbooking/", { state: { id: 1} });
          }}
          //roomsList.roomId 
          className="btm btn-primary">
          Book Now
        </button> */}

        {/* <AddBooking id={1} /> */}
      </div>
    </div>
    </div>
  );
};

export const UserRoomFacility = (props) => {
  const { facility } = props;

  return (
    <div>
        <ul>
          <li> {facility.title} : {facility.description}</li>
        </ul>
    </div>
  );
};

export default UserRoomsCard;
