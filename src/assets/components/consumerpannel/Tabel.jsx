import React from 'react'

function Tabel() {
  return (
    <>
      
      <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="x_panel">
          <div className="row">
            <div className="x_title d-flex col-lg-6 col-md-6 col-sm-12 alignt">
              <h2>Booking History</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 justify-content-end d-flex centot">
              <button type="button" className="btn btn-info">
                Download Invoice
              </button>
            </div>
            <div className="col-12 justify-content-end d-flex mt-4 tabe-cent">
              <select className="sizeing mr-3">
                <option>Activity</option>
                <option></option>
                <option></option>
              </select>
              <select className="sizeing">
                <option>All</option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="x_content">
            <div className="row">
              <div className="col-sm-12">
                <div className="card-box table-responsive">
                  <table
                    id="datatable"
                    className="table table-striped table-bordered mt-5"
                    style={{ width: '100%' }}
                  >
                    <thead>
                      <tr className="distance">
                        <th>#</th>
                        <th>Booking Id</th>
                        <th>Date</th>
                        <th>Categories</th>
                        <th>No. of Passengers</th>
                        <th>Amount</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-light distance">
                        <td>1</td>
                        <td>1710</td>
                        <td>04-08-2023</td>
                        <td>Tour</td>
                        <td>10</td>
                        <td className="text-primary">AED 22</td>
                        <td>Credit card</td>
                        <td>
                          <span className="badge badge-success">Completed</span>
                        </td>
                        <td>View</td>
                      </tr>
                      <tr className="bg-light distance">
                        <td>2</td>
                        <td>1710</td>
                        <td>04-08-2023</td>
                        <td>Package</td>
                        <td>10</td>
                        <td className="text-primary">Null</td>
                        <td>Credit card</td>
                        <td>
                          <span className="badge badge-danger">Cancelled</span>
                        </td>
                        <td>View</td>
                      </tr>
                      <tr className="bg-light distance">
                        <td>3</td>
                        <td>1710</td>
                        <td>04-08-2023</td>
                        <td>Tour</td>
                        <td>10</td>
                        <td className="text-primary">AED 22</td>
                        <td>Credit card</td>
                        <td>
                          <span className="badge badge-success">Completed</span>
                        </td>
                        <td>View</td>
                      </tr>
                      <tr className="bg-light distance">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="bg-light distance">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    </>
  )
}

export default Tabel
