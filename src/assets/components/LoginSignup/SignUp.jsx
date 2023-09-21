import React from 'react';

function SignUpForm() {
  return (
    <div className="d-flex margin-chanjed-sty" style={{ height: '100vh'}}>
      <div className="container contact-container">
        <form>
          <b>
            <h4 className="LoginTitle mt-md-3 mt-xl-3 mt-5">Welcome To Alsalaam</h4>
          </b>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="PasswordText">
              <b>Username</b>
            </label>
            <input type="text" placeholder="Enter Your Email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="PasswordText">
              <b>Full Name</b>
            </label>
            <br />
            <input type="text" placeholder="Enter Your Email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="PasswordText">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Your Email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="PasswordText">
              <b>Password</b>
            </label>
            <br />
            <input type="password" placeholder="Enter Your Password" className="form-control" />
          </div>

          <div className="d-flex">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="" id="" />
              <label>
                I confirmed that I have read and accepted the <a href="#">Privacy Policy</a>
              </label>
            </div>
          </div>
          <br />
          <div className="text-center">
            <button className="LoginButton">Create Account</button>
            <br />
            <p>
              Already have an account? <a href="#">Log in</a>
            </p>

            <div className="d-flex justify-content-center">
              <img src="ErrorBackground (3).png.png" className="OrLine" alt="" />
              <b>OR</b>
              <img src="ErrorBackground (3).png" alt="" className="OrLine" />
            </div>
          </div>

          <a href="#" className="GoogleText">
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-md-12 col-lg-6 google-button text-center p-2">
                <img src="ErrorBackground  (2).png" alt="" />
                Signup with Google
              </div>
            </div>
          </a>
        </form>
      </div>

      <div className="loginBg col-lg-6">
        <div className="mt-5">
          <div>
            <img className="women-with-tab-1" alt="" src="loginBackground.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
