import React from "react";
import { CategoryList } from "./CateogoryList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from 'react-router'
import { URL } from '../../../config'



export const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const saveCategory = () => {
    if (title.length === 0) {
      toast.warning("please enter title");
    } else if (description.length === 0) {
      toast.warning("please enter description");
    } else {
      const body = {
        title,
        description,
      };

      const url = `${URL}/roomCategory/add`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("added new Category..");
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
    <div className="add">
      <div className="container">
        <br/>
        <br/>
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Add Category</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Category Title</h3>
            </label>
            <input  onChange={(e) => {
              setTitle(e.target.value)
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
            <textarea  onChange={(e) => {
              setDescription(e.target.value)
            }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>

          <div class="form-group">
            <button  onClick={saveCategory} type="button" class="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export const ListCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
   const navigate = useNavigate();
   
  const getCategoryList = () => {
    const url = `${URL}/roomCategory/allroomCategory`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setCategoryList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div class="container">
      <div>
        <br/>
        <br/>
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
            {categoryList.map((categoryList) => {
              return <CategoryList categoryList={categoryList} />;
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
