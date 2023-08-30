import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";

const UserOffersCard = (props) => {
  const { offersList } = props;

  const navigate = useNavigate();

  const image = require("./../../../image/offer/" +
    offersList.offerId +
    ".jpg");

  return (
    <div>
      <br />
      <div className="card" style={{ width: "300px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{offersList.title}</h5>
          <p className="card-text">{offersList.description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              {" "}
              Time Period : {offersList.timePeriod}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserOffersCard;
