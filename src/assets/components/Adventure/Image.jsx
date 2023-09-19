import React from 'react'

function Image() {
  return (
    <>
       <div className="container-fluid mt-5">
      <div className="row m-0">
        <div className="col-12 back-image-boot">
          <img
            src="rectangle-867@2x.png"
            style={{ width: '100%', position: 'relative' }}
            alt=""
          />
          <div className="container-fluid row m-0 position-changed-rel-diff">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col position-changed-rel">
              <img
                style={{ width: '60%' }}
                className="mt-2"
                src="mask-group@2x.png"
                alt=""
              />
              <img
                style={{ width: '60%' }}
                className="mt-2"
                src="mask-group1@2x.png"
                alt=""
              />
              <img
                style={{ width: '60%' }}
                className="mt-2"
                src="image-3@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Image
