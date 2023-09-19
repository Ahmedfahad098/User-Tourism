import React from 'react'

function Gallery() {
  return (
    <>
       <div>
      {/* gallery section start */}
      <div className="container-fluid mt-5">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 text-ch col-sm-12">
            <div>
              <b className="font-size-change">Our Gallery</b>
            </div>
            <div className="width-changed">
              <p className="font-size-change-small">
                We bring to the fore all our expertise to make your journey very comfortable.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="f-right">
              <div className='explore'>
                <b>Open Gallery</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div className="row m-0 mt-5 mb-5">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <img
            src="img-eight.png"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="img-7.png"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <img
            src="img-6.png"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0">
          <img
            src="img-five.png"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="img-four.png"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <img
            src="img-three.png"
            className="w-100 shadow-1-strong rounded mb-4 hei-cha"
            alt="Waves at Sea"
          />

          <div className="row d-flex hei-chj">
            <div className="col-12 d-flex">
              <div className="col-6 pl-0">
                <img
                  src="img-two.png"
                  className="w-100 shadow-1-strong rounded mb-4 hu"
                  alt="Yosemite National Park"
                />
              </div>
              <div className="col-6 pr-0">
                <img
                  src="img-one.png"
                  className="w-100 shadow-1-strong rounded mb-4 hu"
                  alt="Yosemite National Park"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      {/* gallery section end */}
    </div>
    </>
  )
}

export default Gallery
