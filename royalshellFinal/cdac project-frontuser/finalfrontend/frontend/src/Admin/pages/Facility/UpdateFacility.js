import React from "react";
import { FacilityList } from "./FacilityList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
import { URL } from "../../../config";


const UpdateFacility = () => {

  const { state } = useLocation();
  const [facilityId, setFacilityId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const loadFacility = () => {
    const { facilityId } = state;

    const url = `${URL}/facility/${facilityId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        const { facilityId, title, description } = result["data"];
        setFacilityId(facilityId);
        setTitle(title);
        setDescription(description);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    loadFacility();
  }, []);

  const editFacility = () => {
    if (title.length == 0) {
      toast.warning("Please enter title");
    } else if (description.length == 0) {
      toast.warning("Please enter description");
    } else {
      const body = {
        facilityId,
        title,
        description,
      };

      const url = `${URL}/facility/edit/${facilityId}`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated facility");
          navigate("/facility/list");
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
            <b>Update Facility</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Facility Id</h3>
            </label>
            <input
              onChange={(e) => {
                setFacilityId(e.target.value);
              }}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
              value={facilityId}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Facility Title</h3>
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
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
              placeholder="Description"
              value={description}
            ></textarea>
          </div>

          <div class="form-group">
            <button
              onClick={editFacility}
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

  export default UpdateFacility;