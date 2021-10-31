import React, { useState } from 'react';
import FareSummary from './FareSummary';
import { useFormik } from 'formik';
import axios from '../Connection';


function BookingTravellerDetails({ flightsData, queryDetails, pnr, nextStep, phone, email }) {
    const [travellers, setTravellers] = useState([]);
    let travellersCount = queryDetails.travellers;
    const [travellersDetailError, setTravellersDetailError] = useState(false);
    const [disableAdd, setDisableAdd] = useState(false);

    const handleCurrentvalue = async () => {
        let token = window.localStorage.getItem("app-token");
        if (travellers.length >= travellersCount - 1) {
            setTravellersDetailError(false)
            await axios.post('/bookingdetails', {
                from: queryDetails.fcode,
                to: queryDetails.tcode,
                airline: flightsData.airline,
                flightno: flightsData.flightno,
                departure: flightsData.departuretime,
                arrival: flightsData.arrivaltime,
                date: queryDetails.startDate,
                travellersdetails: travellers,
                pnr: pnr
            }, {
                headers: {
                    "authorization": token,
                    "Content-type": "application/json"
                }
            })
            nextStep()
        } else {
            setTravellersDetailError(true)
        }
    }
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            nationality: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.firstname) {
                errors.firstname = "Required"
            } else if (values.firstname.length < 3) {
                errors.firstname = "Enter valid firstname"
            }
            if (!values.lastname) {
                errors.lastname = "Required"
            }
            if (!values.nationality) {
                errors.nationality = "Required"
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            if (travellers.length >= travellersCount - 1) {
                setDisableAdd(true)
            }
            let passengers = [{
                firstname: values.firstname,
                lastname: values.lastname,
                nationality: values.nationality
            }]
            setTravellers([...travellers, ...passengers])
            resetForm()
        }
    })

    return (
        <>
            <div className='col-md-8'>
                <div className='row traveller-details-container'>
                    <div className='col-12'>
                        <div className='row ticket-details'>
                            <div className='col-1'>
                                <img src={flightsData?.logo} width="40px" height="40px" alt="logo" />
                            </div>
                            <div className='col-2'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <h6 className='text-uppercase'>{flightsData?.airline}</h6>
                                        <small>{flightsData?.flightno}</small>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row'>
                                    <h6 className='col-12'>{queryDetails?.fcode} {flightsData?.departuretime}</h6>
                                    <small className='col-12'>{queryDetails?.startDate}</small>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row'>
                                    <h6 className='col-12'>{queryDetails?.tcode} {flightsData?.arrivaltime}</h6>
                                    <small className='col-12'>{queryDetails?.startDate}</small>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row'>
                                    <h6 className='col-12'>{flightsData?.duration}</h6>
                                    <small className='col-12'>{flightsData?.stop}</small>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='row details'>
                                    <h6 className='col-12'>+91-{phone}</h6>
                                    <div className='col-12'>{email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='traveller-container row'>
                    <div className='col-12'>
                        <div className='row traveller-content'>
                            <h6 className='col-12'>Enter traveller details</h6>
                        </div>
                        <div className='row details-content'>
                            <h5 className='col-12'>Adult {queryDetails.travellers}</h5>
                        </div>
                        <div className='row details-form text-center'>
                            <div className='col-12'>
                                <div className="table-responsive text-center">
                                    <table className="table table-borderless" width="100%">
                                        <thead>
                                            <tr>
                                                <th className='text-muted' scope="col">FirstName</th>
                                                <th className='text-muted' scope="col">LastName</th>
                                                <th className='text-muted' scope="col">Nationality</th>
                                                <th className='text-muted' scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                travellers?.map(each => {
                                                    return <tr key={each.firstname}>
                                                        <th scope="row">{each.firstname}</th>
                                                        <td>{each.lastname}</td>
                                                        <td>{each.nationality}</td>
                                                    </tr>
                                                })
                                            }

                                            <tr>
                                                <th scope="row">
                                                    <input type="text" name="firstname" className='form-control' value={formik.values.firstname} onChange={formik.handleChange} />
                                                </th>
                                                <td><input type="text" name="lastname" className='form-control' value={formik.values.lastname} onChange={formik.handleChange} /></td>
                                                <td><input type="text" name="nationality" className='form-control' value={formik.values.nationality} onChange={formik.handleChange} /></td>
                                                <td><input type="button" value="add" onClick={formik.handleSubmit} className='btn btn-success' disabled={disableAdd} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <FareSummary flightsDatas={flightsData} queryDetail={queryDetails} />
                <div className='row mt-4'>{
                    travellersDetailError ? <div className='errors col-12 text-center mb-2'>Please fill travellers details.</div> : null
                }
                    <button className='col-12 btn btn-danger' onClick={() => handleCurrentvalue()}>Pay securely</button>
                </div>
            </div>
        </>
    )
}

export default BookingTravellerDetails
