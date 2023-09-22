import React from 'react'

function Inbox() {
  return (
    <>
      <div className="col-md-12 col-sm-12 ">
      <div className="x_panel">
        <div className="x_title">
          <h2>Inbox</h2>
          <ul className="nav navbar-right panel_toolbox">
            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
            </li>

            
          </ul>
          <div className="clearfix"></div>
        </div>
        <div className="x_content">
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box table-responsive">
                <div className="d-flex justify-content-end">
                  <div className="input-group mb-3 w-25">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="bx bx-search-alt-2"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                </div>
                <table id="datatable-checkbox" className="table table-striped table-bordered bulk_action" style={{width:"100%"}}>
                  <thead>
                    <tr>
                      <th>
                      </th><th><input type="checkbox" id="check-all"/></th>
                      
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>


                  <tbody>
                    <tr>
                      <td>
                      </td><th><input type="checkbox" id="check-all"/></th>
                      
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>
                      </td><th><input type="checkbox" id="check-all"/></th>
                      
                      <td>Garrett Winters</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>63</td>
                      <td>2011/07/25</td>
                      <td>$170,750</td>
                    </tr>
                    <tr>
                      <td>
                      </td><th><input type="checkbox" id="check-all"/></th>
                      
                      <td>Ashton Cox</td>
                      <td>Junior Technical Author</td>
                      <td>San Francisco</td>
                      <td>66</td>
                      <td>2009/01/12</td>
                      <td>$86,000</td>
                    </tr>
                    <tr>
                      <td>
                      </td><th><input type="checkbox" id="check-all"/></th>
                      
                      <td>Cedric Kelly</td>
                      <td>Senior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>2012/03/29</td>
                      <td>$433,060</td>
                    </tr>
                    <tr>
                      <td>
                      </td><th><input type="checkbox" id="check-all"/></th>
                      
                      <td>Airi Satou</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>33</td>
                      <td>2008/11/28</td>
                      <td>$162,700</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inbox
