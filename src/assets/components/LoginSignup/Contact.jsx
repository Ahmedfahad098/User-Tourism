import React from 'react';


function ContactForm() {
    return (

          <>
            <div className="back-colr mb-5" style={{marginTop:"-50px"}}>
      {/* header content start */}
      <div className="row m-0 mt-5">
        <div className="col-12 text-center" style={{marginTop:"8rem"}}>
          <div className='mt-5'><b className="font-sid-ch ">Contact Us</b></div>
          <div className='mb-5'><p><b>To Explore</b></p></div>
        </div>
      </div>
      {/* header content end */}
    
    </div>
        <div>
            
            {/* Hero */}
            <div className="bg-contact"></div>
            {/* Hero end */}

            {/* Google Map */}
            <div className="container-fluid">
                <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '500px' }}>
                    <iframe
                        src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        style={{ border: '0' }}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            {/* Google Map end */}

            {/* Form */}
            <div className="container first-contact mt-4 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                        <div className="bg-img">
                            <h2 className="text-light pl-5 pt-4">
                                <b>Contact Information</b>
                            </h2>
                            <h5 className="pl-4 pl-5 reach-contact">Here’s how you can reach us.</h5>
                            <div className="d-flex mt-5">
                                <img className="icon-contact ml-5" src="call.png" alt="" />
                                <span className="text-light hm pl-3">+971 4 320 5652</span>
                            </div>

                            <div className="d-flex mt-4">
                                <img className="icon-contact ml-5" src="email.png" alt="" />
                                <span className="text-light hm pl-3">info@alsalaamtourism.com</span>
                            </div>

                            <div className="d-flex mt-4">
                                <i className="fa-solid fa-location-dot pl-5 " style={{ color: 'white', fontSize: '23px' }}></i>
                                <span className="text-light  pl-3 ">
                                    Office 17, Awazel Building, Ras Al Khor 2 Manama St, Dubai, UAE.
                                </span>
                            </div>
                            <div className="d-flex justify-content-end">
                                <img className="shape-contact mt-5" src="shapes.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <form>
                            {/* Form Inputs */}
                            {/* You can use state variables to manage form input values */}
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="firstName" className="mt-5">
                                            First Name
                                        </label>
                                        <input
                                            className="form-control input-contact"
                                            id="firstName"
                                            placeholder="Write name here"
                                            type="text"
                                            required
                                        />
                                        <div className="invalid-feedback">Please provide a valid first name.</div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="lastName" className="mt-5">
                                            Last Name
                                        </label>
                                        <input
                                            className="form-control input-contact"
                                            id="lastName"
                                            placeholder="Write name here"
                                            type="text"
                                            required
                                        />
                                        <div className="invalid-feedback">Please provide a valid last name.</div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="form-control input-contact"
                                            id="email"
                                            placeholder="Write email here"
                                            type="email"
                                            required
                                        />
                                        <div className="invalid-feedback">Please provide a valid email address.</div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input
                                            className="form-control input-contact"
                                            id="phoneNumber"
                                            placeholder="Write phone number here"
                                            type="tel"
                                            required
                                        />
                                        <div className="invalid-feedback">Please provide a valid phone number.</div>
                                    </div>
                                </div>
                            </div>
                            {/* End of Form Inputs */}
                            <div className="form-group">
                                <label htmlFor="message" className="mt-4">
                                    Message
                                </label>
                                <input
                                    className="form-control input-contact"
                                    id="message"
                                    placeholder="Write your message"
                                    type="text"
                                    required
                                />
                                <div className="invalid-feedback">Please provide a message.</div>
                            </div>
                            <div className="justify-content-end d-flex pt-3">
                                <button type="submit" className="btn btn-primary button-contact">
                                    Send message
                                </button>
                            </div>
                        </form>
                        <div className="justify-content-center d-flex">
                            <img src="arrow.png" className="arrow-contact" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Form end */}
        </div>
        </>
    );
}

export default ContactForm;
