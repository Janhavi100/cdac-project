import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import { useNavigate } from "react-router-dom";

export function CategoryList(props) {
  const { categoryList } = props;
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  };
  const DeleteCategory = () => {
    const url = `${URL}/roomCategory/delete/${categoryList.categoryId}`;
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
      <td>{categoryList.categoryId}</td>
      <td>{categoryList.title}</td>
      <td>{categoryList.description}</td>
      <td>
        <button
          onClick={() => {
            navigate("/category/update/", {
              state: { categoryId: categoryList.categoryId },
            });
          }}
          type="button"
          class="btn btn-primary"
        >
          Update
        </button>
      </td>
      <td>
        <button onClick={DeleteCategory} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
