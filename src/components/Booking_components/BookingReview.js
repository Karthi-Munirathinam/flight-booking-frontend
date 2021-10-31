import React from 'react';
import { useFormik } from 'formik';
import FareSummary from './FareSummary';
function BookingReview({ flightsData, queryDetails, fromAirport, toAirport, currentStep, nextStep, setPhone, setEmail }) {
    const formik = useFormik({
        initialValues: {
            phone: '',
            email: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.phone) {
                errors.phone = "Required"
            } else if (!/^[0-9]{10}$/.test(values.phone)) {
                errors.phone = "Enter valid phone no."
            }
            if (!values.email) {
                errors.email = "Required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values) => {
            setPhone(values.phone);
            setEmail(values.email);
            nextStep()
        }
    })
    return (
        <>
            <div className='col-md-8'>
                <div className='review-container row'>
                    <div className='col-12'>
                        <div className='row review-title-row'>
                            <div className='col-6'>
                                <h6>{queryDetails.from} to {queryDetails.to}</h6>
                            </div>
                            <div className='col-6 text-right'>
                                <h6>{queryDetails.startDate} <span className='dot'>|</span> {flightsData?.duration}</h6>
                            </div>
                        </div>
                        <div className='row p-2'>
                            <div className='col-9'>
                                <h6>{flightsData?.airline} {flightsData?.flightno} <span className='dot'>|</span> {flightsData?.flightmodel} <span className='dot'>|</span> Economy</h6>
                            </div>
                            <div className='col-3 text-right'>
                                <small>Usually on time</small>
                            </div>
                        </div>
                        <hr className='mb-0 mt-0' />
                        <div className='row p-4'>
                            <div className='col-4'>
                                <div className='row text-left'>
                                    <h5 className='col-12'>{queryDetails.fcode} {flightsData?.departuretime}</h5>
                                    <div className='col-12'>{queryDetails.startDate}</div>
                                    <div className='col-12'>{fromAirport[0]?.airportname}</div>
                                    <div className='col-12'>{fromAirport[0]?.place}</div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className="row text-center duration-review-container">
                                    <h6 className='col-12'>
                                        {flightsData?.duration}
                                    </h6>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='row text-right'>
                                    <h5 className='col-12'>{queryDetails.tcode} {flightsData?.arrivaltime}</h5>
                                    <div className='col-12'>{queryDetails.startDate}</div>
                                    <div className='col-12'>{toAirport[0]?.airportname}</div>
                                    <div className='col-12'>{toAirport[0]?.place}</div>
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
                                <div className=''>{queryDetails.fcode} - {queryDetails.tcode}</div>
                                <div className=''>{flightsData?.airline} {flightsData?.flightno}</div>
                            </div>
                            <div className='col-4'>
                                <h6>Cabin Baggage</h6>
                                <div>{flightsData?.cabinbaggage}</div>
                            </div>
                            <div className='col-4'>
                                <h6>Check-in Baggage</h6>
                                <div>{flightsData?.checkinbaggage}</div>
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
                                <div className='phone-title'>Mobile Number{
                                    formik.errors.phone ? <span className="errors"> {formik.errors.phone}</span> : null
                                }
                                </div>
                                <input type='phone' className='form-control' name="phone" onChange={formik.handleChange} value={formik.values.phone} required />
                            </div>
                            <div className='col-6'>
                                <div className='email-title'>Email Address{
                                    formik.errors.email ? <span className="errors"> {formik.errors.email}</span> : null
                                }</div>
                                <input type='email' className='form-control' name="email" onChange={formik.handleChange} value={formik.values.email} required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                {
                    currentStep > 1 ? null : (<>
                        <FareSummary flightsDatas={flightsData} queryDetail={queryDetails} />
                        <div className='row mt-4'>
                            <button className='col-12 btn btn-danger' onClick={formik.handleSubmit}>Continue</button>
                        </div>
                    </>
                    )
                }
            </div>
        </>
    )
}

export default BookingReview
