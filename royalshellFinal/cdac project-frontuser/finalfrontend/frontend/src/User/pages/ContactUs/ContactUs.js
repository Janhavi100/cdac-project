import React from "react";
import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UserContactUs() {
  const [contactUs, setContactUs] = useState({});

  const getContactUs = () => {
    const url = `${URL}/contactus`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setContactUs(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getContactUs();
  }, []);

  return (
    <span class="border border-secondary">
      <br/>
      <br/>
      <div className="p-5 text-center bg-light shadow-lg p-3 mb-5 bg-body rounded-3">
        <h1 class="mb-3">{contactUs.title}</h1>

        <div class="row">
          <div class="col"></div>
          <div class="col">
            <h3 className="mb-3">{contactUs.email}</h3>
            <h3 className="mb-3">{contactUs.mobileNo}</h3>
          </div>
          <div class="col"></div>
        </div>
        <h4 className="mb-3 ">{contactUs.description}</h4>

        {/* <a className="btn btn-primary" href="" role="button">Call to action</a> */}
      </div>
    </span>
  );
}

export default UserContactUs;
