import React from "react";
import { CategoryList } from "./CateogoryList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
import { URL } from "../../../config";

function UpdateCategory() {
  const { state } = useLocation();
  const [categoryId, setCategoryId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const loadcategory = () => {
    const { categoryId } = state;

    const url = `${URL}/roomCategory/${categoryId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        const { categoryId, title, description } = result["data"];
        setCategoryId(categoryId);
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
    loadcategory();
  }, []);

  const editCategory = () => {
    if (title.length == 0) {
      toast.warning("Please enter title");
    } else if (description.length == 0) {
      toast.warning("Please enter description");
    } else {
      const body = {
        categoryId,
        title,
        description,
      };

      const url = `${URL}/roomCategory/edit/${categoryId}`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully updated category");

          navigate("/category/list");
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
            <b>Update Category</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Category Id</h3>
            </label>
            <input
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
              value={categoryId}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Category Title</h3>
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
              onClick={editCategory}
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

export default UpdateCategory;
