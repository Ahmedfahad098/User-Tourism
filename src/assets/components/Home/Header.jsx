import React, { useState } from 'react';
import Cart from './Cart';


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
                        <li><a className="col-b font-s" href="/">Home</a></li>
                        <li><a className="text-light font-s" href="/activity">Activity</a></li>
                        <li><a className="text-light font-s" href="/packages">Packages</a></li>
                        <li><a className="text-light font-s" href="/contact">Contact Us</a></li>
                        <li><a className="text-light font-s" href="/about">About Us</a></li>
                    </ul>
                </div>
                <div className="mdicart-outline-parent d-flex">
                    <img className="mdicart-outline-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt="" src="mdicartoutline.svg" />
                    <div className="dropdown-menu row" aria-labelledby="dropdownMenuButton" style={{ padding: '1%', width: '26%' }}>
      <div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-sm-12 mb-3">
            <img src="rectangle-3847@2x.png" style={{ width: '100%' }} alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <h4 style={{ fontSize: '16px' }}>Al Ain City Tours</h4>
            <b style={{ fontSize: '13px' }}>699.00 AED</b>
          </div>
        </div>
        <hr style={{ border: '1px solid gray' }} />
        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <p>Subtotal</p>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <b>699.00 AED</b>
          </div>
        </div>
        <div className="col-12 butn-stylid mt-3 mb-2">
          <b>Checkout</b>
        </div>
      </div>
    </div>
                   <Cart/>
                </div>
            </div>
            <div className={`side-nav ${isSideNavActive ? 'active' : ''}`} style={{zIndex:"111"}}>
                <button className="close-btn" onClick={closeSideNav}><i className="bi bi-x"></i></button>
                <ul className="m-t">
                    <li><a className=" font-s col-b" href="#hero">Home</a></li>
                    <li><a className="text-light font-s" href="/activity">Activity</a></li>
                    <li><a className="text-light font-s"  href="/packages">Packages</a></li>
                    <li><a className="text-light font-s" href="/contact">Contact Us</a></li>
                    <li><a className="text-light font-s" href="/about">About Us</a></li>
                </ul>
                <div className="mdicart-outline-parent colum d-flex">
                    <img className="mdicart-outline-icon"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt=""  src="mdicartoutline.svg" />
                    <div className="dropdown-menu row" aria-labelledby="dropdownMenuButton" style={{ padding: '4%', width: '26%' }}>
      <div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-sm-12 mb-3">
            <img src="rectangle-3847@2x.png" style={{ width: '100%' }} alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <h4 style={{ fontSize: '16px' }}>Al Ain City Tours</h4>
            <b style={{ fontSize: '13px' }}>699.00 AED</b>
          </div>
        </div>
        <hr style={{ border: '1px solid gray' }} />
        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <p>Subtotal</p>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <b>699.00 AED</b>
          </div>
        </div>
        <div className="col-12 butn-stylid mt-3 mb-2">
          <b>Checkout</b>
        </div>
      </div>
    </div>
                    
                   <Cart/>
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
