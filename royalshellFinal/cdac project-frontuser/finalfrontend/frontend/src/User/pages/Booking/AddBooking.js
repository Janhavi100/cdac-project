import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate, Link } from "react-router-dom";

function UserAddBooking() {
  const {state} = useLocation();
  console.log(state)


  
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [remark, setRemark] = useState("");
  // const [userId, setUserId] = useState("");
  // const [status, setStatus] = useState("");
  // const [payment, setPayment] = useState("");
  // const [roomId, setRoomId] = useState(0);

  const navigate = useNavigate();

  const onLoadDate = ()=>{
    const {checkIn, checkOut}  = state
    setCheckIn(checkIn);
    setCheckOut(checkOut);
  }

  useEffect(() => {
      onLoadDate()
  }, [])
  

  const bookingConfirmed = () => {
    const {roomId}  = state
    const userId = sessionStorage["userId"]
    console.log(userId)
    
    if (checkIn.length == 0 ) {
      toast.warning("checkIn is mandatory");
    } else if (checkOut.length == 0) {
      toast.warning("checkOut is mandatory");
    } else if (remark.length == 0) {
      toast.warning("model is mandatory");
    }else {
        
        
      const body = {
        roomId,
        checkIn,
        checkOut,
        userId,
        remark,
        status:"approved",
        payment:"paid"
      };


      const url = `${URL}/booking/add`;

      console.log(body);

      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("Booking confirmed successfull!");
          navigate("/user/booking");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Booking confirmed Failed")
      });
    }
  };

  

  return (
    <div className="container">
      <br />
      <br />
        <div className="row">
          <div className="col"></div>
          <div className="col shadow-lg p-3 mb-5 bg-body rounded-3 ">
            
              <h3 className="text-center">Book Room</h3>
            
            <hr />
            <br />
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Check In Date
                </label>
                <input
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                  }}
                  type="date"
                  className="form-control"
                  value={checkIn}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Check Out Date
                </label>
                <input
                 onChange={(e) => {
                    setCheckOut(e.target.value);
                  }} type="date" className="form-control"
                  value={checkOut}
                  readOnly />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Remark
                </label>
                <input  onChange={(e) => {
                    setRemark(e.target.value);
                  }} type="text" className="form-control"
                  value={remark} />
              </div>

              <div className="mb-3">
                <button onClick={bookingConfirmed}className="btn btn-success">
                  Payment
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      
    </div>
  );
}

export default UserAddBooking;
