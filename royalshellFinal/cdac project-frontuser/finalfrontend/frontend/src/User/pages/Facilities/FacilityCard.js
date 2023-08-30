import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";

const UserFacilityCard = (props) => {
  const { facilityList } = props;

  const navigate = useNavigate();

  const image = require("./../../../image/facility/" +
    facilityList.facilityId +
    ".jpg");

  return (
    <div>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{facilityList.title}</h5>
          <p className="card-text">{facilityList.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserFacilityCard;
