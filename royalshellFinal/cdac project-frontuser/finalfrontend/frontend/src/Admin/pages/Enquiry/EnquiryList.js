import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from '../../../config'

const EnquiryList = (props) => {
  const { enquiryList } = props;
  const refreshPage=()=> {
    window.location.reload(false);
  }
const DeleteEnquiry=()=>{
  const url = `${URL}/enquiry/delete/${enquiryList.enquiryId}`;
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
}

  return (

    <tr>
         <td>{enquiryList.enquiryId}</td>

      <td>{enquiryList.firstName}</td>
      <td>{enquiryList.lastName}</td>
      <td>{enquiryList.mobile}</td>
      <td>{enquiryList.email}</td>
      <td>{enquiryList.remark}</td>

      <td>

        <button onClick={DeleteEnquiry} type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EnquiryList;
