import React from "react";
import { IdproofList } from "./IdproofList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
import { URL } from "../../../config";

function UpdateIdproof() {
  const { state } = useLocation();
  const [id, setId] = useState(0);
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const loadIdproof = () => {
    const { id } = state;

    const url = `${URL}/idproof/${id}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        const { id, type } = result["data"];
        setId(id);
        setType(type);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    loadIdproof();
  }, []);

  const editIdproof = () => {
    if (type.length == 0) {
      toast.warning("Please enter title");
    } else {
      const body = {
        id,
        type,
      };

      const url = `${URL}/idproof/edit/${id}`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated Idproof");

          navigate("/idproof/list");
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
      <br/>
      <br/>
      <div className="container">
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Update Idproof</b>
          </h2>

          <div class="form-group ">
            <label for="exampleFormControlSelect1">
              <h4>Id</h4>
            </label>
            <input
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
              value={id}
              readOnly
            />
          </div>
          <br/>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h4>Idproof Type</h4>
            </label>
            <input
              onChange={(e) => {
                setType(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
              value={type}
            />
          </div>
          
<br/>
          <div class="form-group">
            <button
              onClick={editIdproof}
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
}

export default UpdateIdproof;
