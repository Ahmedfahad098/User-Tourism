import React from 'react';
function IndexHeader() {
  return (
    <div>
      {/* Background Header Image */}
      <div style={{zIndex:"-1",position:"relative",top:"-21px"}}>
        <img src="header.png" className="Head-img" alt="" />
      </div>

      {/* Header Content */}
      <div className="row positionmain">
        <div className="col-lg-6 col-md-12 col-sm-12 position">
          <b className="dream">Dream | Explore | Discover</b>
          <div className="get">
            <p>Get the best prices on all excursions and activities across UAE.</p>
          </div>
          <span className="but-cen">
            <div className="explore">
              <b>Explore Now</b>
            </div>
          </span>
        </div>
        <div className="col-lg-6 col-md-12 sec col-sm-12">
          <img className="img-wid" src="img-head.png" alt="" />
        </div>
      </div>
      {/* Header Content End */}
    </div>
  );
}

export default IndexHeader;
