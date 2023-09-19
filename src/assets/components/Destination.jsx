import React from 'react'

function Destination() {
  return (
    <>
       <div>
      {/* Destination Title */}
      <div className="text-center mt-4 mb-4 f-s">
        <b>Destinations</b>
      </div>

      {/* Destination Content */}
      <div className="row m-0">
        <div className="des-des col-12">
          <div className="row m-0 po-rel">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img className="img-si" src="sid.png" alt="" />
            </div>
          </div>
          <div className="justify-content-center mb-5 d-flex">
            <div className="explore" style={{ width: '172px', padding: '12px' }}>
              <b>View all</b>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Content End */}
    </div>
    </>
  )
}

export default Destination
