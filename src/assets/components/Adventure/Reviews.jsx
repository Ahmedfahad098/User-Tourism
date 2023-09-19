import React from 'react'

function Reviews() {
  return (
    <>
      <div className="container-fluid container-space mb-5">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 mt-5">
          <h2 className="font-weight-bold pt-2 pb-2 cent-contact">Reviews</h2>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="d-flex mt-3 cent-contact">
                <h2 className="font-weight-bold mt-2">0.0</h2>
                <img src="star.svg" className="ml-3" alt="" />
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 mt-2">
              <div className="d-flex justify-content-center">
                <p className="height-digit ml-2">5</p>
                <div className="rateing-line mt-1 ml-2"></div>
                <p className="ml-2 height-digit">0.0%</p>
              </div>

              <div className="d-flex justify-content-center">
                <p className="height-digit ml-2">4</p>
                <div className="rateing-line mt-1 ml-2"></div>
                <p className="ml-2 height-digit">0.0%</p>
              </div>

              <div className="d-flex justify-content-center">
                <p className="height-digit ml-2">3</p>
                <div className="rateing-line mt-1 ml-2"></div>
                <p className="ml-2 height-digit">0.0%</p>
              </div>

              <div className="d-flex justify-content-center">
                <p className="height-digit ml-2">2</p>
                <div className="rateing-line mt-1 ml-2"></div>
                <p className="ml-2 height-digit">0.0%</p>
              </div>

              <div className="d-flex justify-content-center">
                <p className="height-digit ml-2">1</p>
                <div className="rateing-line mt-1 ml-2"></div>
                <p className="ml-2 height-digit">0.0%</p>
              </div>
            </div>
          </div>

          <div className="border-contact mt-4"></div>
          <div className="justify-content-between d-flex">
            <p className="click-contact">Click the button to add a review</p>
            <p className="revieww">
              <span>
                <i className="fa-solid fa-plus mt-2 me-2 revieww"></i>
              </span>
              Add Review
            </p>
          </div>

          <div>
            <textarea className="review-message p-2 mt-2">
              Write Your Review.....
            </textarea>
          </div>

          <div className="row">
            <div className=" col-lg-7 col-md-7 col-sm-12">
              <div className="d-flex  mt-4 cent">
                <img src="vector167.svg" alt="" />
                <img src="vector167.svg" className="ml-2" alt="" />
                <img src="vector167.svg" className="ml-2" alt="" />
                <img src="vector167.svg" className="ml-2" alt="" />
                <img src="vector167.svg" className="ml-2" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <a href="#">
                <button
                  type="button"
                  className="btn btn-dark btnn-contact mt-3"
                >
                  Submit
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 mt-5">
          <h3 className="font-weight-bold pt-2 pb-2">Activity’s Location</h3>
          {/* Google map */}
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
            style={{ height: '500px' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen
            ></iframe>
          </div>
          {/* Google Maps */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Reviews
