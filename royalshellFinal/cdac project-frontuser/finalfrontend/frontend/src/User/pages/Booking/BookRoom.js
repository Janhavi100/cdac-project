import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router";
import UserBookRoomsCard from "./../Booking/BookRoomsCard";

function UserBookRoom() {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState("");
  const [roomsList, setRoomsList] = useState([]);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() ).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

  const getAvailableRooms = () => {
    if (checkIn.length == 0 && checkIn<Date.now()) {
      toast.warning("checkIn is mandatory");
    } else if (checkOut.length == 0) {
      toast.warning("checkIn is mandatory");
    } else {
      const body = {
        checkIn,
        checkOut,
      };

      const url = `${URL}/booking/checkavailablerooms`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          setRoomsList(result["data"]);
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
       <br/>
       <br/>
      <div class="row g-3 shadow-lg p-3 mb-5 bg-body rounded-3">
        <div class="col-sm">
          <label htmlFor="" className="label-control">
            Check In Date
          </label>
          <input
            onChange={(e) => {
              setCheckIn(e.target.value);
            }}
            min={disablePastDate()}
            type="date"
            class="form-control"
            placeholder="CheckIn"
            aria-label="First name"
          />
        </div>
        <div class="col-sm">
          <label htmlFor="" className="label-control">
            Check Out Date
          </label>
          <input
            onChange={(e) => {
              setCheckOut(e.target.value);
            }}
            min={disablePastDate()}
            type="date"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        <div class="mb-3">
        <br/>
          <label htmlFor="" className="label-control"></label>
          <button
            onClick={getAvailableRooms}
            type="button"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>

      <hr />

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
          return <UserBookRoomsCard roomsList={roomsList} checkIn={checkIn} checkOut={checkOut} />;
        })}
      </div>
    </div>
  );
}

export default UserBookRoom;
