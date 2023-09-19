import React from 'react'

function Aboutheader() {
  return (
    <>
        <div className="row posi-re m-0">
      <div className="col-lg-7 mt-5 col-md-12 col-sm-12 res-tex mt-5">
        <div className='mt-5'>
          <b className="font-sii ">About Alsalaam</b>
        </div>
        <div>
          <p className="para-font-siz">
            Al Salaam Tourism is a customer-oriented organization offering
            professional, world-class tourism solutions. We enjoy a stellar
            reputation of excellence in Dubai's tourism sector. We place the
            needs of our clients first and go the extra mile in ensuring our
            customer’s travel experience is laced with comfort and beautiful
            memories that endure for a lifetime.
          </p>
        </div>
        <div className="jus">
          <div className="explore">
            <b>Explore Destinations</b>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 col-sm-12 img-rrrs">
        <div className="play "><img className="img-siii" src="plus.png" alt="" /></div>
        <img src="car.png" className="wid-img" alt="" />
      </div>
    </div>
    </>
  )
}

export default Aboutheader;
