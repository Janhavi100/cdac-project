import React from "react";
import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import UserOffersCard from "./OffersCard";

function UserOffers() {
  const [offersList, setOffersList] = useState([]);
  const navigate = useNavigate();

  const getOffersList = () => {
    const url = `${URL}/offers/alloffers`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setOffersList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getOffersList();
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
     
      {offersList.map((offersList) => {
        return <UserOffersCard offersList={offersList} />;
      })}
    </div>
  );
}

export default UserOffers;
