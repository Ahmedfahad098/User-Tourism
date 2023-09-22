import React from 'react'

function PersonalInfo() {
  return (
    <>
      <div id="SettingForm">
      <h3>Settings</h3>
      <div className="opocity mt-3 pb-4">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 ">
              <h4 className="Personal-conatct mt-4 text-center">Personal Information</h4>
              <div className="justify-content-center d-flex">
                <img src="profile.png" className="profil" alt=""/>
              </div>
              <h5 className="text-center font-weight-bold">Edite Profile</h5>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label className="form mt-5 d-block ml-4">Username</label>
                  <input type="text" className="input-conttr ml-4" style={{border: "1px solid black"}}/>

                  <label className="form mt-3 d-block ml-4">Phone Number</label>
                  <input type="number" className="input-conttr ml-4" style={{border: "1px solid black"}}/>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label className="form mt-5 d-block ml-4">Email</label>
                  <input type="email" className="input-conttr ml-4" style={{border: "1px solid black"}}/>

                  <label className="form mt-3 d-block ml-4">About Yourself</label>
                  <textarea className="text-area ml-4" style={{border: "1px solid black"}}></textarea>

                </div>


              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-check mt-5 mr-2">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                  <label className="form-check-label" for="defaultCheck1">
                    Show email and phone number to other account
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 centtyt">
              <div className="mt-5 d-flex justify-content-end mr-3 ">
                <button type="button" className="btn btn-info font-weight-bold  ">Save Change</button>
              </div>
            </div>
            <div className="col-12">
              <h4 className="Personal-conatct mt-5">Location</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <label className="form mt-4 ml-4 d-block ">Home Airpot</label>
              <input type="text" className="input-conttr ml-4 " style={{border: "1px solid black"}}/>

              <label className="form mt-3 d-block ml-4 ">City</label>
              <input type="text" className="input-conttr ml-4" style={{border: "1px solid black"}}/>


              <label className="form mt-3 d-block ml-4">Zip/Postal Code</label>
              <input type="text" className="input-conttr ml-4" style={{border: "1px solid black"}}/>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <label className="form mt-4  d-block ml-4">Address</label>
              <input type="text" className="input-conttr ml-4" style={{border: "1px solid black"}} />

              <label className="form mt-3 d-block ml-4">State/province/Regin</label>
              <input type="text" className="input-conttr ml-4" style={{border: "1px solid black"}} />


              <label className="form mt-3 d-block ml-4">Country</label>
              <input type="text" className="input-conttr ml-4" style={{border: "1px solid black"}}/>
            </div>

            <div className="col-12 centtyt">
              <div className=" d-flex justify-content-end mr-3 " style={{marginTop:" 7rem"}}>
                <button type="button" className="btn btn-info font-weight-bold ">Save Change</button>
              </div>
            </div>

            <div className="col-12">
              <h4 className="Personal-conatct  mt-4">Change Password</h4>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <label className="form mt-4 ml-4 d-block ">Current Password</label>
              <input type="password" className="input-conttr ml-4 " style={{border: "1px solid black"}}/>

              <label className="form mt-3 d-block ml-4 ">Re-Enter Password</label>
              <input type="password" className="input-conttr ml-4" style={{border: "1px solid black"}}/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <label className="form mt-4 ml-4 d-block ">New Password</label>
              <input type="password" className="input-conttr ml-4 " style={{border: "1px solid black"}}/>

            </div>

            <div className="col-12 centtyt">
              <div className="mt-5 d-flex justify-content-end mr-3 ">
                <button type="button" className="btn btn-info font-weight-bold ">Save Change</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default PersonalInfo
