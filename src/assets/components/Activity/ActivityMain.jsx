import React from 'react'

function ActivityMain() {
  return (
    <>
      <div className="back-colr">
      {/* header content start */}
      <div className="row m-0 mt-5">
        <div className="col-12 text-center">
          <div><b className="font-sid-ch">The World is Yours</b></div>
          <div><b className="font-sid-ch">To Explore</b></div>
        </div>
      </div>
      {/* header content end */}
      {/* header images start */}
      <div className="row m-0 position-relative">
        <div className="col-lg-6 mt-5 col-md-12 col-sm-12">
          <img className="img-pof" src="activity-two.png" alt="" />
        </div>
        <div className="col-lg-6 mt-5 col-md-12 col-sm-12">
          <img className="img-pof change-zindex" src="activity-one.png" alt="" />
        </div>
      </div>
      {/* header images end */}
    </div>
    </>
  )
}

export default ActivityMain
