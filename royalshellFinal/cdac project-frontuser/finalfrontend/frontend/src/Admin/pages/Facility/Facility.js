import React from "react";
import { FacilityList } from "./FacilityList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";

export const AddFacility = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const saveFacility = () => {
    if (title.length === 0) {
      toast.warning("please enter title");
    } else if (description.length === 0) {
      toast.warning("please enter description");
    } else {
      const body = {
        title,
        description,
      };

      const url = `${URL}/facility/add`;
      axios
        .post(url, body)
        .then((response) => {
          const result = response.data;
          if (result["status"] === "success") {
            toast.success("added new facility..");
            navigate("/facility/list");
          } else {
            toast.error(result["error"]);
          }
        })
        .catch((error) => {
          toast.error("Failed");
        });
    }
  };
  return (
    <div className="addf">
      <div className="container">
        <br />
        <br />
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Add Facility</b>
          </h2>
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
            ></textarea>
          </div>
          <br/>

          <div class="form-group">
            <button
              onClick={saveFacility}
              type="button"
              class="btn btn-primary"
            >
              Add
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export const ListFacility = () => {
  const [facilityList, setFacilityList] = useState([]);
  const navigate = useNavigate();

  const getFacilityList = () => {
    const url = `${URL}/facility/allfacility`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setFacilityList(result["data"]);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Failed");
      });
  };

  useEffect(() => {
    getFacilityList();
  }, []);

  return (
    <div class="container">
      <div>
        <br />
        <br />
        <table class="table shadow-lg p-3 mb-5 bg-body rounded-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {facilityList.map((facilityList) => {
              return <FacilityList facilityList={facilityList} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
