import React from 'react';
import { URL } from '../../../config'
import FeaturedInfo from './FeaturedInfo'
import "./Home.css"

function Home() {
  return (
    <div className='container'>
      <br/>
      <div className="text-center"><h1>DashBoard</h1></div>
      <br/>
      <FeaturedInfo/>
    </div>
  );
}

export default Home;
