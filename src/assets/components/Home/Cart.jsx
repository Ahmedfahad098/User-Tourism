import React from 'react'

function Cart() {
  return (
    <div>
       <img className="mdicart-outline-icon"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt="" src="codiconaccount.svg" />
                    <div className="dropdown-menu row" aria-labelledby="dropdownMenuButton" style={{ padding: '1%', width: '26%' }}>
      <div className='p-3'>
        <div className="row">
          <div className="col-md-12 col-lg-5 col-sm-12 mb-3 pr-0">
            <img src="ellipse-1141@2x.png" style={{ width: '74%' }} alt="" />
          </div>
          <div className="col-md-12 chang-text-dir col-lg-7 col-sm-12 pl-0 text-center" style={{ display: 'flex', alignItems: 'center' }}>
            <b>Ali Murtaza</b>
          </div>
        </div>
        <hr style={{ border: '1px solid gray' }} />
        <div className="row">
          <div className="col-lg-2">
            <img src="bxsdashboard.svg" alt="" />
          </div>
          <div className="col-lg-10">
            <p>Dashboard</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
