import React from 'react'

function SearchPacka() {
  return (
    <>
        <div>
      <div className="text-center mt-5">
        <b className="our-ser">Our Packages</b>
        <p>We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.</p>
      </div>

      <div className="row m-0 mt-5">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="search mt-4">
            <div className="main">
              {/* Actual search box */}
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          {/* Add content for the middle column if needed */}
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex chang-juf">
          <div>
            <div>
              <select name="" id="" style={{ border: 'none', borderBottom: '1px solid !important', width: '100%', padding: '3px' }}>
                <option value="">Sorting</option>
                <option value="">Two</option>
                <option value="">Three</option>
              </select>
            </div>
            <div className="border mt-3" style={{ width: '100%', padding: '8px' }}>
              Default Sorting
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchPacka
