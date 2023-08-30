import React from "react";
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {URL} from '../../../config'

const UserBookingList = (props) => {

    const {bookingList} = props

    const navigate = useNavigate()

  return (
    <tr>
      
      <td>{bookingList.bookingId}</td>
      <td>{bookingList.roomId}</td>
      <td>{bookingList.bookingDate}</td>
      <td>{bookingList.checkIn}</td>
      <td>{bookingList.checkOut}</td>
      <td>{bookingList.remark}</td>
      <td>{bookingList.status}</td>
      <td>{bookingList.payment}</td>
    </tr>
  );
}

export default UserBookingList;
