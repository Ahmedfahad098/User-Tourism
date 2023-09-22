import React from 'react'

function WishList() {
  return (
    <>
      
      {/* <!--whish list start--> */}

<section className="Whistlist" style={{backgroundColor:"white"}}>
    <div>
        <h3 className="font-weight-bold">Wishlist</h3>
    </div>
    <div className="col-12 justify-content-end d-flex mt-4 tabe-cent">
        <select className="sizeing mr-3">
            <option>Activity</option>
            <option></option>
            <option></option>
        </select>
    </div>
    <div className="container-fluid py-5">
        <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border-0 ">
                    <div className="card-body  p-0">
                        <div className="row">
                            <div className="col-md-12 col-lg-5 col-xl-5 mb-4 mb-lg-0 p-0">
                                <div>
                                    <img src="card-img.png" className=" w-100"
                                        style={{borderRadius: "25px 0px 0px 25px "}}/>
                                    <a href="#!">
                                        <div className="hover-overlay">
                                            <div className="mask"
                                                style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <h4 className="mt-5 font-weight-bold">Fantastic Dubai Wedding Package with Camping
                                    in the Desert(5D/4N)
                                </h4>
                                <p className="text-secondary">On a fantastic honeymoon trip to Dubai, spend your
                                    first moments as a
                                    married couple and commemorate ...</p>

                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start ">
                                <div className="text-danger d-flex justify-content-end"><i className='bx bx-x'></i>
                                </div>
                                <h4 className="font-weight-bold    text-center">City Trips</h4>
                                <div className="d-flex flex-column mt-4 ">
                                    <div className="d-flex justify-content-center">
                                        <i className='bx bx-time-five mt-2 text-secondary'></i>
                                        <span className="ml-1 mt-1 ">4 nights 5 Days</span>
                                    </div>
                                    <div className="justify-content-center d-flex">
                                        <button type="button" className="btn btn-dark  w-75  mt-5"
                                            style={{borderRadius: "20px"}}>View
                                            Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border-0 ">
                    <div className="card-body  p-0">
                        <div className="row">
                            <div className="col-md-12 col-lg-5 col-xl-5 mb-4 mb-lg-0 p-0">
                                <div>
                                    <img src="card-img.png" className=" w-100"
                                        style={{borderRadius:" 25px 0px 0px 25px "}}/>
                                    <a href="#!">
                                        <div className="hover-overlay">
                                            <div className="mask"
                                                style={{backgroundColor:" rgba(253, 253, 253, 0.15)"}}></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <h4 className="mt-5 font-weight-bold">Fantastic Dubai Wedding Package with Camping
                                    in the Desert(5D/4N)
                                </h4>
                                <p className="text-secondary">On a fantastic honeymoon trip to Dubai, spend your
                                    first moments as a
                                    married couple and commemorate ...</p>

                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start ">
                                <div className="text-danger d-flex justify-content-end"><i className='bx bx-x'></i>
                                </div>
                                <h4 className="font-weight-bold   mt-3 text-center">City Trips</h4>
                                <div className="d-flex flex-column mt-4 ">
                                    <div className="d-flex justify-content-center">
                                        <i className='bx bx-time-five mt-2 text-secondary'></i>
                                        <span className="ml-1 mt-1 ">4 nights 5 Days</span>
                                    </div>
                                    <div className="justify-content-center d-flex">
                                        <button type="button" className="btn btn-dark  w-75  mt-5"
                                            style={{borderRadius:" 20px"}}>View
                                            Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</section>

{/* <!--whish list send--> */}
    </>
  )
}

export default WishList
