import React from 'react'

function Footer() {
  return (
    <>
       <div>
      {/* Footer start */}
      <div className="row m-0 d-c">
        <div className="col-12 d">
          <div className="sss"> <img src="call2.png" className="s" alt="" /> Call on +971524928120 </div>
          <div className="sss"> <img src="gmail.png" className="s" alt="" /> info@alsalaamtourism.com </div>
        </div>
      </div>
      {/* Footer end */}
      
      {/* Second Footer */}
      <div className="row d-c">
        <div className="col-12 sty-col">
          <div className="row font-size">
            <div className="col-lg-3 mb-3 col-md-6 col-sm-6 justify-content-center display-g">
              <div className="justify-content-center d-flex"> <img className="icon-res" src="call2.png" alt="" /></div>
              <div>Here for you</div>
            </div>
            <div className="col-lg-3 mb-3 col-md-6 col-sm-6 justify-content-center display-g">
              <div className="justify-content-center d-flex"><img className="icon-res" src="tick.png" alt="" /></div>
              <div>Best Price Guarantee</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 justify-content-center display-g">
              <div className="justify-content-center d-flex"><img className="icon-res" src="per.png" alt="" /></div>
              <div>Exclusive offers</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 justify-content-center display-g">
              <div className="justify-content-center d-flex"><img className="icon-res" src="dia.png" alt="" /></div>
              <div>New Finds Every Month</div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Footer end */}
      
      {/* Copyright */}
      <div className="row display-gridd">
        <div className="col-12" style={{ backgroundImage: 'url(header.png)' }}>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
              <img className="width-i" src="tourisum.png" alt="" />
              <div className="color-text mt-3">
                Al Salaam Tourism is a customer-oriented organization offering
                professional, world-class tourism solutions.
              </div>
              <div className="icon-display mt-3">
                <img className="icon-res" src="instagram.png" alt="" />
                <img className="icon-res" src="facebook.png" alt="" />
                <img className="icon-res" src="twiter.png" alt="" />
                <img className="icon-res" src="youtube.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 mt-5">
              <ul className="list-style">
                <li>Home</li>
                <li>Tours</li>
                <li>Packages</li>
                <li>Our Partner</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 mt-5">
              <ul className="list-style">
                <li>Our Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
              <div><b className="text-light">Subscribe to our Newsletter</b></div>
              <div><p className="text-light">
                Get special offers, and more from Al Salaam
              </p></div>
              <div className="d-flex gap" >
                <div><input className="footer-input" type="email" placeholder="Input your email here" /></div>
                <div> <img className="send-arrow" src="send.png" alt="" /></div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="text-light">Copyright by Alsalaam @2023</div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright end */}
    </div>
    </>
  )
}

export default Footer
