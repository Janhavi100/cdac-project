import React from "react";
import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import UserFacilityCard from "./FacilityCard";

function UserFacilities() {
  const [facilityList, setFacilityList] = useState([]);
  const navigate = useNavigate();

  const getFacilityList = () => {
    const url = `${URL}/facility/allfacility`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setFacilityList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getFacilityList();
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
      {facilityList.map((facilityList) => {
        return <UserFacilityCard facilityList={facilityList} />;
      })}
    </div>
  );
}

export default UserFacilities;
