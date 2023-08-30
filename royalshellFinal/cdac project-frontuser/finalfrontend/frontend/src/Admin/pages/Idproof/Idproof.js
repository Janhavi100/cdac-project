import React from "react";
import { IdproofList } from "./IdproofList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from 'react-router'
import { URL } from '../../../config'



export const AddIdproof = () => {
  const [type, setType] = useState("");
 
  const navigate = useNavigate();

  const saveIdproof = () => {
    if (type.length === 0) {
      toast.warning("please enter title");
    } else {
      const body = {
        type,
      };

      const url = `${URL}/idproof/add`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("added new Category..");
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
    <div className="add">
      <br/>
      <br/>
      <div className="container">
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Add idproof</b>
          </h2>
          <br/>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Idproof Type</h3>
            </label>
            <input  onChange={(e) => {
              setType(e.target.value)
            }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              width="500px"
            />
          </div>
          <br/>
         
          <div class="form-group">
            <button  onClick={saveIdproof} type="button" class="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export const ListIdproof = () => {
  const [idproofList, setIdproofList] = useState([]);
   const navigate = useNavigate();
   
  const getIdproofList = () => {
    const url = `${URL}/idproof/allidproof`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setIdproofList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getIdproofList();
  }, []);

  return (
    <div class="container">
      <br/>
      <br/>
      <div>
        <table class="table shadow-lg p-3 mb-5 bg-body rounded-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Type</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {idproofList.map((idproofList) => {
              return <IdproofList idproofList={idproofList} />;
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
