import React, { useState } from 'react';


function Header() {
    const [isSideNavActive, setIsSideNavActive] = useState(false);
  
    // Open the side nav
    const openSideNav = () => {
      setIsSideNavActive(true);
    };
  
    // Close the side nav
    const closeSideNav = () => {
      setIsSideNavActive(false);
    };


  return (
    <>
    
         {/* <!-- navbar start --> */}
    <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a className="logo d-flex align-items-center">
                {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                <img width="50%" alt="Al Salaam" decoding="async" src="tourisum.png" />

            </a>
            <div className="main-sub-nav">
                <div className="nav-laptop ml-auto">
                    <ul className="laptop-parent ">
                        <li><a className="col-b font-s" href="index.html">Home</a></li>
                        <li><a className="text-light font-s" href="activities.html">Activity</a></li>
                        <li><a className="text-light font-s" href="packages.hrml">Packages</a></li>
                        <li><a className="text-light font-s" href="contactUs.html">Contact Us</a></li>
                        <li><a className="text-light font-s" href="aboutus.html">About Us</a></li>
                    </ul>
                </div>
                <div className="mdicart-outline-parent">
                    <img className="mdicart-outline-icon" alt="" src="mdicartoutline.svg" />
                    <img className="mdicart-outline-icon" alt="" src="codiconaccount.svg" />
                </div>
            </div>
            <div className={`side-nav ${isSideNavActive ? 'active' : ''}`} style={{zIndex:"111"}}>
                <button className="close-btn" onClick={closeSideNav}><i className="bi bi-x"></i></button>
                <ul className="m-t">
                    <li><a className=" font-s col-b" href="#hero">Home</a></li>
                    <li><a className="text-light font-s" href="About-Us.html">Activity</a></li>
                    <li><a className="text-light font-s" href="#services">Packages</a></li>
                    <li><a className="text-light font-s" href="#portfolio">Contact Us</a></li>
                    <li><a className="text-light font-s" href="our-team.html">About Us</a></li>
                </ul>
                <div className="mdicart-outline-parent colum">
                    <img className="mdicart-outline-icon" alt="" src="mdicartoutline.svg" />

                    <img className="mdicart-outline-icon" alt="" src="codiconaccount.svg" />
                </div>
            </div>
            {/* <!-- side icon --> */}
            <i className="mobile-nav-toggle cursor bi bi-list"  onClick={openSideNav}></i>
            {/* <!-- / side icon --> */}
        </div>
    </header>
    {/* <!-- navbar end --> */}
    </>
  );
}

export default Header
