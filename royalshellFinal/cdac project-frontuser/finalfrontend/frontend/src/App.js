import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import UserMain from "./User/UserMain"
// import AdminMain from "./Admin/AdminMain"
// import LandingMain from "./Landing/LandingMain"

//user imports
import UserNavbar from "./User/components/UserNavbar/UserNavbar";
import UserHome from "./User/pages/Home/Home";
import UserRooms from "./User/pages/Rooms/Rooms";
import UserBooking from "./User/pages/Booking/Booking";
import UserFacilities from "./User/pages/Facilities/Facilities";
import UserFacilityCard from "./User/pages/Facilities/FacilityCard";
import UserProfile from "./User/pages/MyAccount/UserProfile";
import EditUserProfile from "./User/pages/MyAccount/EditUserProfile";
import UserChangePassword from "./User/pages/MyAccount/ChangePassword";
import { UserRoomFacility } from "./User/pages/Rooms/RoomsCard";
import UserRoomsCard from "./User/pages/Rooms/RoomsCard";
import UserBookRoom from "./User/pages/Booking/BookRoom";
import { UserBookRoomFacility } from "./User/pages/Booking/BookRoomsCard";
import UserBookRoomsCard from "./User/pages/Booking/BookRoomsCard";
import UserAddBooking from "./User/pages/Booking/AddBooking";
import UserContactUs from "./User/pages/ContactUs/ContactUs";
import UserEnquiry from "./User/pages/Enquiry/Enquiry";
import UserOffers from "./User/pages/Offers/Offers";
import UserOffersCard from "./User/pages/Offers/OffersCard";

//admin imports
import Sidebar from "./Admin/components/Sidebar";
import AdminHome from "./Admin/pages/Home/Home";

import EditAdminProfile from "./Admin/pages/MyAccount/EditAdminProfile";
import { AddCategory, ListCategory } from "./Admin/pages/Category/Category";
import UpdateCategory from "./Admin/pages/Category/UpdateCategory";
import { AddIdproof, ListIdproof } from "./Admin/pages/Idproof/Idproof";
import UpdateIdproof from "./Admin/pages/Idproof/UpdateIdproof";
import { AddFacility, ListFacility } from "./Admin/pages/Facility/Facility";
import UpdateFacility from "./Admin/pages/Facility/UpdateFacility";
import RoomList from "./Admin/pages/Rooms/RoomList";
import AddRoom from "./Admin/pages/Rooms/AddRoom";
import Rooms from "./Admin/pages/Rooms/Rooms";
import UpdateRoom from "./Admin/pages/Rooms/UpdateRoom";
import Booking from "./Admin/pages/Booking/Booking";
import Users from "./Admin/pages/User/Users";
import UserList from "./Admin/pages/User/UserList";
import EditUserRole from "./Admin/pages/User/EditUserRole";
import Enquiry from "./Admin/pages/Enquiry/Enquiry";
import SerchByUserId from "./Admin/pages/Search/SearchByUserId";
import SearchByBookingId from "./Admin/pages/Search/SearchByBookingId";
import SearchBookingByDate from "./Admin/pages/Search/SearchBookingByDates";
import { AddOffer, ListOffer } from "./Admin/pages/Offers/Offer";
import { OfferList } from "./Admin/pages/Offers/OfferList";
import UpdateOffer from "./Admin/pages/Offers/UpdateOffer";
import { ContactUs } from "./Admin/pages/ContactUs/ContactUs";
import { AdminProfile } from "./Admin/pages/MyAccount/MyAccount";
import AdminChangePassword from "./Admin/pages/MyAccount/ChangePassword";

//landing imports
import SignIn from "./Landing/SignIn";
import { SignOut } from "./Landing/SignIn";
import SignUp from "./Landing/SignUp";

function App() {
  // const role = sessionStorage.getItem("role");
  // const isAdmin = role === "admin" ? true : false;
  // const isUser = role === "user" ? true : false;

  // return (
  //   <div className="App">
  //     <UserMain />
  //     {isAdmin && <AdminMain />}
  //     {/* <LandingMain /> */}
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <UserMain />
  //     <AdminMain />
  //   </div>
  // );

  const role = sessionStorage.getItem("role");
  const isAdmin = role === "admin" ? true : false;
  const isUser = role === "user" ? true : false;

  return (
    <div>
      <BrowserRouter>
        {/* navbar routes */}
        {!isAdmin && <UserNavbar />}
        {isAdmin && <Sidebar />}
        <Routes>
          {/* home page routes */}
          <Route path="/" element={<UserHome />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/adminhome" element={<AdminHome />} />

          {/* user routes */}
          <Route path="/user/rooms" element={<UserRooms />} />
          <Route path="/user/rooms/roomscard" element={<UserRoomsCard />} />
          <Route
            path="/user/rooms/roomscard/roomfacility"
            element={<UserRoomFacility />}
          />
          <Route path="/user/booking" element={<UserBooking />} />
          <Route path="/user/booking/bookroom" element={<UserBookRoom />} />
          <Route
            path="/user/booking/bookroom/bookroomscard/bookroomfacility"
            element={<UserBookRoomFacility />}
          />
          <Route
            path="/user/booking/bookroom/bookroomscard"
            element={<UserBookRoomsCard />}
          />
          <Route
            path="/user/booking/bookroom/addbooking"
            element={<UserAddBooking />}
          />
          <Route path="/user/facilities" element={<UserFacilities />} />
          <Route
            path="/user/facilities/facilitycard"
            element={<UserFacilityCard />}
          />
          <Route path="/user/userprofile" element={<UserProfile />} />
          <Route path="/user/edituserprofile" element={<EditUserProfile />} />
          <Route path="/user/changepassword" element={<UserChangePassword />} />
          <Route path="/user/contactus" element={<UserContactUs />} />
          <Route path="/user/enquiry" element={<UserEnquiry />} />
          <Route path="/user/offers" element={<UserOffers />} />
          <Route path="/user/offers/offercards" element={<UserOffersCard />} />

          {/* Admin routes */}
          <Route path="/account/profile" exact element={<AdminProfile />} />
          <Route
            path="/account/profile/edit"
            exact
            element={<EditAdminProfile />}
          />
          <Route
            path="/account/changepassword"
            exact
            element={<AdminChangePassword />}
          />
          <Route path="/category/add" exact element={<AddCategory />} />
          <Route path="/category/update" exact element={<UpdateCategory />} />
          <Route path="/category/list" exact element={<ListCategory />} />
          <Route path="/idproof/add" exact element={<AddIdproof />} />
          <Route path="/idproof/update" exact element={<UpdateIdproof />} />
          <Route path="/idproof/list" exact element={<ListIdproof />} />
          <Route path="/facility/add" exact element={<AddFacility />} />
          <Route path="/facility/update" exact element={<UpdateFacility />} />
          <Route path="/facility/list" exact element={<ListFacility />} />
          <Route path="/rooms" exact element={<Rooms />} />
          <Route path="/rooms/add" exact element={<AddRoom />} />
          <Route path="/rooms/list" exact element={<RoomList />} />
          <Route path="/rooms/update" exact element={<UpdateRoom />} />
          <Route path="/booking" exact element={<Booking />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/users/list" exact element={<UserList />} />
          <Route
            path="/users/edit/changerole"
            exact
            element={<EditUserRole />}
          />
          <Route path="/enquiry" exact element={<Enquiry />} />
          <Route path="/offer/add" exact element={<AddOffer />} />
          <Route path="/offer" exact element={<ListOffer />} />
          <Route path="/offer/list" exact element={<OfferList />} />
          <Route path="/offer/update" exact element={<UpdateOffer />} />
          <Route path="/search/userid" exact element={<SerchByUserId />} />
          <Route
            path="/search/bookingid"
            exact
            element={<SearchByBookingId />}
          />
          <Route
            path="/search/bookingbydate"
            exact
            element={<SearchBookingByDate />}
          />
          <Route path="/contactus" exact element={<ContactUs />} />

          {/* landing page routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </div>
  );
}

export default App;
