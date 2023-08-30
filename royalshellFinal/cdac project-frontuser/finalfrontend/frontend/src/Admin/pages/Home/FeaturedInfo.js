import "./FeaturedInfo.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../../config";
import { useNavigate } from "react-router";

function FeaturedInfo() {


    const [roomsCount, setRoomsCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [bookingCount, setBookingCount] = useState(0);

    const loadRoomsCount = () => {
        const url = `${URL}/rooms/roomscount`;
        axios.get(url).then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            setRoomsCount(result["data"]);
          } else {
            toast.error(result["error"]);
          }
        }).catch((error)=>{
          toast.error("Failed")
        });
      };
      const loadUsersCount = () => {
        const url = `${URL}/users/userscount`;
        axios.get(url).then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            setUsersCount(result["data"]);
          } else {
            toast.error(result["error"]);
          }
        }).catch((error)=>{
          toast.error("Failed")
        });
      };

      const loadBookingCount = () => {
        const url = `${URL}/booking/bookingcount`;
        axios.get(url).then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            setBookingCount(result["data"]);
          } else {
            toast.error(result["error"]);
          }
        }).catch((error)=>{
          toast.error("Failed")
        });
      };


      useEffect(() => {
        loadRoomsCount();
        loadBookingCount();
        loadUsersCount();
    
      }, []);

  return (
    <div className="container">
      {/* <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">User Count</span>
          <div className="featuredContainer">
            <span className="featuredCount">50</span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Rooms Count</span>
          <div className="featuredContainer">
            <span className="featuredCount">50</span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Booking Count</span>
          <div className="featuredContainer">
            <span className="featuredCount">50</span>
          </div>
        </div>
        
      </div> */}
    <div class="d-flex flex-row bd-highlight justify-content-between mb-3">
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow border-left-warning py-2">
          <div className="card-body">
            <div className="row align-items-center no-gutters">
              <div className="col mr-2">
                <div className="text-center text-uppercase  fw-bold fs-3 text-xs mb-1">
                  <span>User Count</span>
                </div>
                <div className="text-center text-dark fw-bolder fs-1 h5 mb-0">
                  <span>{usersCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow border-left-warning py-2">
          <div className="card-body">
            <div className="row align-items-center no-gutters">
              <div className="col mr-2">
                <div className="text-center text-uppercase  fw-bold fs-3 text-xs mb-1">
                  <span>Rooms Count</span>
                </div>
                <div className="text-center text-dark fw-bolder fs-1 h5 mb-0">
                  <span>{roomsCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow border-left-warning py-2">
          <div className="card-body">
            <div className="row align-items-center no-gutters">
              <div className="col mr-2">
                <div className="text-center text-uppercase  fw-bold fs-3 text-xs mb-1">
                  <span>Booking Count</span>
                </div>
                <div className="text-center text-dark fw-bolder fs-1 h5 mb-0">
                  <span>{bookingCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FeaturedInfo;
