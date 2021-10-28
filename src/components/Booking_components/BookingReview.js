import React from 'react'

function BookingReview() {
    return (
        <>
            <div className='review-container row'>
                <div className='col-12'>
                    <div className='row review-title-row'>
                        <div className='col-6'>
                            <h6>Chennai to Bengaluru</h6>
                        </div>
                        <div className='col-6'>
                            <h6>Wed, 20 Oct <span className='dot'>|</span> 1hr 10min</h6>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-9'>
                            <h6>Logo Spicejet SG3467 <span className='dot'>|</span> Boeing 747 <span className='dot'>|</span> Economy</h6>
                        </div>
                        <div className='col-3'>
                            <small>Usually on time</small>
                        </div>
                    </div>
                    <hr className='mb-0 mt-0' />
                    <div className='row p-4'>
                        <div className='col-4'>
                            <div className='row'>
                                <h5 className='col-12'>MAA 19:50</h5>
                                <div className='col-12'>Wed, 20 Oct</div>
                                <div className='col-12'>Chennai Airport</div>
                                <div className='col-12'>Chennai</div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="row">
                                <h6 className='col-12'>
                                    1hr 10min
                                </h6>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <h5 className='col-12'>BLR 21:00</h5>
                                <div className='col-12'>Wed, 20 Oct</div>
                                <div className='col-12'>Kempegowda Airport</div>
                                <div className='col-12'>Bengaluru</div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-0 mb-0' />
                    <div className='row p-2'>
                        <h6 className='col-12 text-muted'>Baggage</h6>
                    </div>
                    <div className='row p-2 text-center'>
                        <div className='col-4'>
                            <h6 className=''>Flight</h6>
                            <div className=''>MAA - BLR</div>
                            <div className=''>Spicejet SG3467</div>
                        </div>
                        <div className='col-4'>
                            <h6>Cabin Baggage</h6>
                            <div>7 kg</div>
                        </div>
                        <div className='col-4'>
                            <h6>Check-in Baggage</h6>
                            <div>15 kg</div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='contact-details-container row'>
                <div className='col-12'>
                    <div className='row contact-details-row'>
                        <h6 className='col-12'>Contact details (Your ticket & flight info will be sent here)</h6>
                    </div>
                    <div className='row p-4'>
                        <div className='col-6'>
                            <div className='phone-title'>Mobile Number</div>
                            <input type='phone' className='form-control' minLength="10" maxLength="10" required />
                        </div>
                        <div className='col-6'>
                            <div className='email-title'>Email Address</div>
                            <input type='email' className='form-control' required />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingReview
