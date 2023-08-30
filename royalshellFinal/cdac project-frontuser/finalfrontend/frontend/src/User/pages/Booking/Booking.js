import React from "react";
import BookingList from "./BookingList";
import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function UserBooking() {
  const [bookingList, setBookingList] = useState([]);
  const navigate = useNavigate();

  const getBookingList = () => {
    const  userId  = sessionStorage["userId"];
    const url = `${URL}/booking/userbooking/${userId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setBookingList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Loading Failed")
    });
  };

  useEffect(()=>{
      getBookingList()
  },[])

  return (
    <div class="container">
      <div >
        <br/>
        <br/>
        <table class="table shadow-lg p-3 mb-5 bg-body rounded-3">
          <thead>
            <tr>
              
              <th scope="col">BookingId</th>
              <th scope="col">RoomId</th>
              <th scope="col">Booking Date</th>
              <th scope="col">CheckIn</th>
              <th scope="col">CheckOut</th>
              <th scope="col">Remark</th>
              <th scope="col">Status</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          <tbody>
              {
                  bookingList.map((bookingList)=>{
                      return <BookingList bookingList = {bookingList}/>
                  })
              }
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserBooking;
