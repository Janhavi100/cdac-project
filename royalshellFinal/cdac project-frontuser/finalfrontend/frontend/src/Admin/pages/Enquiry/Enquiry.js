import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EnquiryList from "./EnquiryList"
import {URL} from "../../../config"
function Enquiry() {
  const [enquiryList, setEnquiryList] = useState([]);
  // const navigate = useNavigate();

  const getEnquiryList = () => {
    const url = `${URL}/enquiry/allenquiry`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        setEnquiryList(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(()=>{
    getEnquiryList()
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
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Email</th>
              <th scope="col">Remark</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            
              {
                  enquiryList.map((enquiryList)=>{
                      return <EnquiryList enquiryList = {enquiryList}/>
                  })
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enquiry;
