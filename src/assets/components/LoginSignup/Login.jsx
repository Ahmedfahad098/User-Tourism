import React from 'react';

function Login() {
  return (
    <div className="d-flex" style={{ height: '100vh',margintop:"-20px" }}>
      <div className="container contact-container">
        <form>
          <b>
            <h4 className="LoginTitle">LOGIN</h4>
          </b>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="text-contact">
              <b>Email/Username</b>
            </label>
            <input type="text" placeholder="Enter Your Email" className="Input form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="PasswordText">
              <b>Password</b>
            </label>
            <br />
            <input type="password" placeholder="Enter Your Password" className="Input form-control" />
          </div>
          <br />
          <div className="d-flex">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="" id="" />
              <label>Remember me</label>
            </div>
            <div>
              <a href="" style={{ marginLeft: '177px' }}>
                Forgot Password?
              </a>
            </div>
          </div>
          <br />
          <div className="text-center">
            <button className="LoginButton">Login</button>
            <br />
            <br />
            <p>
              Don’t have an account? <a href="">Signup</a>
            </p>
            <br />
            <div className="d-flex justify-content-center">
              <img
                src="ErrorBackground (3).png 1.png"
                alt=""
                style={{
                  width: '149px',
                  margin: '11px',
                  height: '1px',
                  backgroundColor: 'black',
                }}
              />
              <b>OR</b>
              <img
                src="ErrorBackground (3).png 1.png"
                alt=""
                style={{
                  width: '149px',
                  margin: '11px',
                  height: '1px',
                  backgroundColor: 'black',
                }}
              />
            </div>
          </div>
          <br />
          <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-md-12 col-lg-6 google-button text-center p-2">
                <img src="ErrorBackground  (2).png" alt="" />
                Login with Google
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

export default Login;
