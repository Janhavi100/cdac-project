import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import { useNavigate } from "react-router-dom";

export const OfferList = (props) => {
  const  {offerList} = props;
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  };

  const DeleteOffer = () => {
    const url = `${URL}/offers/delete/${offerList.offerId}`;
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
    <tr>
      <td>{offerList.offerId}</td>
      <td>{offerList.title}</td>
      <td>{offerList.description}</td>
      <td>{offerList.timePeriod}</td>

      <td>
        <button
          onClick={() => {
            navigate("/offer/update", {
              state: { offerId: offerList.offerId },
            });
          }}
          type="button"
          class="btn btn-primary"
        >
          Update
        </button>
      </td>
      <td>
        <button onClick={DeleteOffer} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
