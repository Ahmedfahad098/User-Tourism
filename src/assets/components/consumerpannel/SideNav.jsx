import React, { useState } from 'react';

function SideNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (event) => {
    // Add logic here to handle link click
    // For example, you can set the active link using state
  };

  return (
    <>
      <header className={`header ${isNavOpen ? 'body-pd' : ''}`} id="header">
        <div className="header_toggle" onClick={toggleNavbar}>
          <i className={`bx ${isNavOpen ? 'bx-x' : 'bx-menu'}`} id="header-toggle"></i>
        </div>
        <div className="header_img">
          <img src="profile.png" alt="" />
        </div>
      </header>
      <div className={`l-navbar ${isNavOpen ? 'show' : ''}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo">
              <img src="alsalaam logo.png" className="nav_logo-name" />
            </a>
            <div className="nav_list">
              <a href="#SettingForm" className="nav_link active" onClick={handleLinkClick}>
                <i className="bx bxs-cog nav_icon"></i>
                <span className="nav_name">Setting</span>
              </a>
              <a href="table.html" className="nav_link" onClick={handleLinkClick}>
                <i className="bx bx-history nav_icon"></i>
                <span className="nav_name">Booking History</span>
              </a>
              <a href="whistlist.html" className="nav_link" onClick={handleLinkClick}>
                <i className="bx bx-purchase-tag nav_icon"></i>
                <span className="nav_name">Wishlist</span>
              </a>
              <a href="#" className="nav_link" onClick={handleLinkClick}>
                <i className="bx bxs-inbox nav_icon"></i>
                <span className="nav_name">Inbox</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link" onClick={handleLinkClick}>
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
