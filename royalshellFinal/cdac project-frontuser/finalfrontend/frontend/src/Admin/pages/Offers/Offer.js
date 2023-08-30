import React from 'react';
import {OfferList} from "./OfferList";
import axios from 'axios'
import { useEffect,useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../../../config'




export const AddOffer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timePeriod, setTimePeriod] = useState("");


  const navigate = useNavigate();

  const saveOffer = () => {
    if (title.length === 0) {
      toast.warning("please enter title");
    } else if (description.length === 0) {
      toast.warning("please enter description");
    }else if (timePeriod.length === 0) {
      toast.warning("please enter timePeriod");
    }
     else {
      const body = {
        title,
        description,
        timePeriod
      };

      const url = `${URL}/offers/add`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("added new facility..");
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
    <div className='addf'>
<div className="container">
  <br/>
  <br/>
        <form className="shadow-lg p-3 mb-5 bg-body rounded-3">
          <h2 className="text-center">
            <b>Add Offer</b>
          </h2>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              <h3>Offer Title</h3>
            </label>
            <input onChange={(e) => {
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
            <label for="exampleFormControlSelect1">
              <h3>Time Period</h3>
            </label>
            <textarea  onChange={(e) => {
              setTimePeriod(e.target.value)
            }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Time Duration"
            ></textarea>
          </div>
          
          <div class="form-group">
            <button onClick={saveOffer} type="button" class="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>    </div>
  );
};



export const ListOffer = () => {
  const [offerList, setOfferList] = useState([]);
  const navigate = useNavigate();

  const getOfferList = () => {
    const url = `${URL}/offers/alloffers`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setOfferList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(()=>{
    getOfferList()
  },[])

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
              <th scope="col">Duration</th>
              <th scope="col">Duration</th>
              <th scope="col">Duration</th>

              
              
              
            </tr>
          </thead>
          <tbody>
              {
                  offerList.map((offerList)=>{
                      return <OfferList offerList = {offerList}/>
                  })
              }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};


