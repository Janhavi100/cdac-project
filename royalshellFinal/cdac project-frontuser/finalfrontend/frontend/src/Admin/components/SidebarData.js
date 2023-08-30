import React from 'react';
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
  {
    title: 'Home',
    path: '/adminhome',
    cName: 'nav-text'
    
  },
  {
    title: 'My Account',
    path: '/account/profile',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,

    subNav:[{
      title: 'Profile',
    path: '/account/profile',
    cName: 'nav-text'
    },
    {
      title: 'Change Password',
    path: '/account/changepassword',
    cName: 'nav-text'
    }
  ]
  },
  {
    title: 'Idproof',
    path: '/idproof/list',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[{
      title: 'Add Idproof',
    path: '/idproof/add',
    cName: 'nav-text'
    },
    
    {
      title: 'List of Idproof',
    path: '/idproof/list',
    cName: 'nav-text'
    }
  ]
  },
  {
    title: 'Room Category',
    path: '/category/list',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[{
      title: 'Add Room Category',
    path: '/category/add',
    cName: 'nav-text'
    },
    
    {
      title: 'List of Room Category',
    path: '/category/list',
    cName: 'nav-text'
    }
  ]
  },
  {
    title: 'Facility',
    path: '/facility/list',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[{
      title: 'Add Facility',
    path: '/facility/add',
    cName: 'nav-text'
    },
 
    {
      title: 'List of Facility',
    path: '/facility/list',
    cName: 'nav-text'
    }
  ]
  },
  {
    title: 'Room',
    path: '/rooms',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[{
      title: 'Add Room',
    path: '/rooms/add',
    cName: 'nav-text'
    },
   
    {
      title: 'List of Rooms',
    path: '/rooms',
    cName: 'nav-text'
    }
  ]
  },
  {
    title: 'Booking',
    path: '/booking',
    cName: 'nav-text'
  },
  {
    title: 'Registered Users',
    path: '/users',
    cName: 'nav-text'
  },
  {
    title: 'Enquiry',
    path: '/enquiry',
    cName: 'nav-text'
  },
  {
    title: 'Offers',
    path: '/offer',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[{
      title: 'Add Offer',
    path: '/offer/add',
    cName: 'nav-text'
    },
 
    {
      title: 'List of Offers',
    path: '/offer',
    cName: 'nav-text'
    }
  ]

  },
  {
    title: 'Search',
    path: '/search/bookingbydate',
    cName: 'nav-text',
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[{
      title: 'Search User By Id',
    path: '/search/userid',
    cName: 'nav-text'
    },
    {
      title: 'Search Booking By Id',
    path: '/search/bookingid',
    cName: 'nav-text'
    },
    {
      title: 'Search Booking By Date',
    path: '/search/bookingbydate',
    cName: 'nav-text'
    }
  ]
  }
  // ,
  // {
  //   title: 'SignOut',
  //   path: '/',
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'SignIn',
  //   path: '/signin',
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'SignUp',
  //   path: '/signup',
  //   cName: 'nav-text'
  // }
  ,
  {
    title: 'ContactUs',
    path: '/contactus',
    cName: 'nav-text'
  }

];
