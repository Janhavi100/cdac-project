import React from "react";
import {OfferList } from "./OfferList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
import { URL } from "../../../config";


const UpdateOffer = () => {

  const { state } = useLocation();
  const [offerId, setOfferId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  const navigate = useNavigate();

  const loadOffer = () => {
    const { offerId } = state;

    const url = `${URL}/offers/${offerId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        const { offerId, title, description,timePeriod } = result["data"];
        setOfferId(offerId);
        setTitle(title);
        setDescription(description);
        setTimePeriod(timePeriod);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    loadOffer();
  }, []);

  const editOffer = () => {
    if (title.length == 0) {
      toast.warning("Please enter title");
    } else if (description.length == 0) {
      toast.warning("Please enter description");
    } else if (timePeriod.length == 0) {
      toast.warning("Please enter timePeriod");
    }
    else {
      const body = {
        offerId,
        title,
        description,
        timePeriod
      };

      const url = `${URL}/offers/edit/${offerId}`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated Offer");
          navigate("/offer");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };




    return (
      <div className="update">
      <div className="container">
        <br/>
        <br/>
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Update Offer</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Offer Id</h3>
            </label>
            <input
              onChange={(e) => {
                setOfferId(e.target.value);
              }}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
              value={offerId}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Offer Title</h3>
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Title"
              width="500px"
              value={title}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Description</h3>
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter Description"
              value={description}
            ></textarea>
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Offer Period</h3>
            </label>
            <input
              onChange={(e) => {
                setTimePeriod(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Time Period"
              width="500px"
              value={timePeriod}
            />
          </div>
          <div class="form-group">
            <button
              onClick={editOffer}
              type="button"
              class="btn btn-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    );
  };

  export default UpdateOffer;