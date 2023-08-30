import React from "react";
import { useEffect } from "react";
import "./Home.css";
import CarouselContainer from "./CarouselContainer"

function UserHome() {


  return (
    <div>

    <div class="jumbotron">
      <h1 class="display-4"><CarouselContainer /></h1>
      <p align="center" class="lead">"Journey with Grace: Your Stay, Your Way"</p>
      <hr class="my-4"></hr>

      <a class="btn btn-primary btn-lg" href="/signup" role="button">check it out</a>

      
    </div>
    


  
   
<footer class="footer-10">
<div class="container">
<div class="row mb-5 pb-3 no-gutters">
<div class="col-md-4 mb-md-0 mb-4 d-flex">
</div>
<div class="col-md-4 mb-md-0 mb-4 d-flex">
  <div class="con con-3 w-100 py-5">
    <div class="con-info w-100 text-center">
      <div class="icon d-flex align-items-center justify-content-center">
        <span class="ion-ios-pin"></span>
      </div>
      <div class="text">
        <span><a href="https://twitter.com/i/flow/signup" class="d-block">Follow us</a></span>
      </div>
    </div>
  </div>
</div>
</div>
<div class="row">
{/* <div class="col-md-7">
  <div class="row">
    <div class="col-md-4 mb-md-0 mb-4">
    
      <ul class="list-unstyled">
      <h2 class="footer-heading"> <li><a href="#" class="d-block">INSTAGRAM</a></li></h2>
      </ul>
    </div>
    <div class="col-md-4 mb-md-0 mb-4">
      <ul class="list-unstyled">
      <h2 class="footer-heading"> <li><a href="#" class="d-block">FACEBOOK</a></li></h2>
      </ul>
    </div>


    <div class="col-md-4 mb-md-0 mb-4">
      <ul class="list-unstyled">
      <h2 class="footer-heading"> <li><a href="#" class="d-block">TWITTER</a></li></h2>
      </ul>
    </div>
  </div>
</div> */}
{/* <div class="col-md-5 mb-md-0 mb-4">
  <h2 class="footer-heading">Subscribe</h2>
  <form action="#" class="subscribe-form">
    <div class="form-group d-flex">
      <input type="text" class="form-control rounded-left" placeholder="Enter email address"></input>
      <button type="submit" class="form-control submit rounded-right">Subscribe</button>
    </div>
    <span class="subheading">Get digital marketing updates in your mailbox</span>
  </form>
</div> */}
</div>
<div class="row mt-5 pt-4 border-top">
<div class="col-md-6 col-lg-8 mb-md-0 mb-4">
 
</div>

</div>
</div>
</footer>


</div>

  );
}

export default UserHome;

// <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
