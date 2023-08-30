import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router";
import BookingList from "./../Booking/BookingList"

function SearchBookingByDate() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookingList, setBookingList] = useState([]);

  const getBookingByDate = () => {
    if (checkIn.length == 0) {
      toast.warning("From Date is mandatory");
    } else if (checkOut.length == 0) {
      toast.warning("To Date is mandatory");
    } else {
      const body = {
        checkIn,
        checkOut,
      };

      const url = `${URL}/booking/bookingbydate`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          setBookingList(result["data"]);
          toast.success("Successfully submitted date");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };

  return (
    <div className="container">
      <br />
      <br/>
      <div class="row g-3 shadow-lg p-3 mb-5 bg-body rounded-3">
        <div class="col-sm">
          <label htmlFor="" className="label-control">
            From Date
          </label>
          <input
            onChange={(e) => {
              setCheckIn(e.target.value);
            }}
            type="date"
            class="form-control"
            placeholder="From"
            aria-label="First name"
          />
        </div>
        <div class="col-sm">
          <label htmlFor="" className="label-control">
            To Date
          </label>
          <input
            onChange={(e) => {
              setCheckOut(e.target.value);
            }}
            type="date"
            class="form-control"
            placeholder="To"
            aria-label="Last name"
          />
        </div>
        
        <div class="mb-3">
        <br/>
          <label htmlFor="" className="label-control"></label>
          <button
            onClick={getBookingByDate}
            type="button"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>

      <hr />
      <div className="container">
        <table class="table shadow-lg p-3 mb-5 bg-body rounded-3">
          <thead>
            <tr>
              <th scope="col">BookingId</th>
              <th scope="col">UserId</th>
              <th scope="col">RoomId</th>
              <th scope="col">BookingDate</th>
              <th scope="col">CheckIn</th>
              <th scope="col">CheckOut</th>
              <th scope="col">Remark</th>
              <th scope="col">Status</th>
              <th scope="col">Payment</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((bookingList) => {
              return <BookingList bookingList={bookingList} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchBookingByDate;
