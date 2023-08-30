import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router";

function SearchByBookingId() {
  const [bookingId, setBookingId] = useState(0);
  const [bookingList, setBookingList] = useState([]);

  const getBookingById = () => {
    if (bookingId == 0) {
      toast.warning("BookingId is mandatory");
    } else {
      const url = `${URL}/booking/${bookingId}`;
      axios.get(url).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          setBookingList(result["data"]);
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

  const DeleteBooking = () => {
    const url = `${URL}/booking/delete/${bookingList.bookingId}`;
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
      <br />
      <br/>
      <div class="row g-3 shadow-lg p-3 mb-5 bg-body rounded-3">
        <div class="col-sm">
          {/* <label htmlFor="" className="label-control">
            Users Id
          </label> */}
          <input
            onChange={(e) => {
              setBookingId(e.target.value);
            }}
            type="number"
            class="form-control"
            placeholder="BookingId"
            aria-label="Booking Id"
          />
        </div>
        <div class="col-sm">
          <label htmlFor="" className="label-control"></label>
          <button
            onClick={getBookingById}
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
            <tr>
              <td>{bookingList.bookingId}</td>
              <td>{bookingList.userId}</td>
              <td>{bookingList.roomId}</td>
              <td>{bookingList.bookingDate}</td>
              <td>{bookingList.checkIn}</td>
              <td>{bookingList.checkOut}</td>
              <td>{bookingList.remark}</td>
              <td>{bookingList.status}</td>
              <td>{bookingList.payment}</td>
              <td>
                <button
                  onClick={DeleteBooking}
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

export default SearchByBookingId;
