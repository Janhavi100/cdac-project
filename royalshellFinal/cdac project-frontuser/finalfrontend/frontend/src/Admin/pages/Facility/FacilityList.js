import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import { useNavigate } from "react-router-dom";

export const FacilityList = (props) => {
  const { facilityList } = props;
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  };

  const DeleteFacility = () => {
    const url = `${URL}/facility/delete/${facilityList.facilityId}`;
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
      <td>{facilityList.facilityId}</td>
      <td>{facilityList.title}</td>
      <td>{facilityList.description}</td>
      <td>
        <button
          onClick={() => {
            navigate("/facility/update/", {
              state: { facilityId: facilityList.facilityId },
            });
          }}
          type="button"
          class="btn btn-primary"
        >
          Update
        </button>
      </td>
      <td>
        <button onClick={DeleteFacility} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
