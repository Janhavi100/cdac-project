import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from 'react-router'
import { URL } from '../../../config'



export const ContactUs = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState("");

  const [mobileNo, setMobileNo] = useState("");
  const [email , setEmail] = useState("");
  const [description , setDescription] = useState("");
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const loadContactUs = () => {

    const url = `${URL}/contactus`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        const { id, title, mobileNo, email, description } = result["data"];
        setId(id);
        setTitle(title);
        setMobileNo(mobileNo);
        setEmail(email);
        setDescription(description);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };
  useEffect(() => {
    loadContactUs();
  }, []);

  const editContactUs = () => {
    if (title.length === 0) {
      toast.warning("please enter title");
    }else if (mobileNo.length === 0) {
      toast.warning("please enter mobile no");
    }else if (email.length === 0) {
        toast.warning("please enter email");
      }     else if (description.length === 0) {
      toast.warning("please enter description");
    } else {
      const body = {
        id,
        title,
        mobileNo,
        email,
        description,
      };

      const url = `${URL}/contactus/edit/${id}`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("Saved details");
          navigate("/adminhome");
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
            <b>Get In Touch</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Title</h3>
            </label>
            <input  onChange={(e) => {
              setTitle(e.target.value)
            }}
              type="text"
              class="form-control"
              value={title}

              id="exampleFormControlInput1"
              width="500px"
            />
          </div>
          
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Mobile No</h3>
            </label>
            <input  onChange={(e) => {
              setMobileNo(e.target.value)
            }}
              type="number"
              value={mobileNo}
              class="form-control"
              id="exampleFormControlInput1"
              width="500px"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              <h3>Email</h3>
            </label>
            <input  onChange={(e) => {
              setEmail(e.target.value)
            }}
              type="text"
              value={email}

              class="form-control"
              id="exampleFormControlInput1"
              width="500px"
            />
            
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Description</h3>
            </label>
            

            <textarea onChange={(e) => {
              setDescription(e.target.value)
            }}
              class="form-control"
              value={description}

              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            
          </div>
          

          <div class="form-group">
            <button onClick={editContactUs}  type="button" class="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
