import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addMonths from 'date-fns/addMonths';
import "react-datepicker/dist/react-datepicker.css";
import './SearchResults.css';
// import axios from '../Connection';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

function SearchResultsSearch({ queryDetails }) {

    const [startDate, setStartDate] = useState(new Date(queryDetails?.startDate));
    const [endDate, setEndDate] = useState(null);

    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            from: queryDetails.from,
            to: queryDetails.to,
            passenger: queryDetails.travellers
        }, enableReinitialize: true,
        validate: (values) => {
            let errors = {};
            if (!values.from) {
                errors.from = "Required"
            }
            if (!values.to) {
                errors.to = "Required"
            }
            if (values.to === values.from) {
                errors.to = "From and To can't be same"
            }
            return errors;
        },
        onSubmit: (values) => {
            history.push(`/flights?from=${values.from}&to=${values.to}&p=${values.passenger}&sdate=${startDate}&rdate=${endDate}&type=O`)
        }
    })
    return (
        <div className='pb-3'>
            <form onSubmit={formik.handleSubmit} className='search-results-search-container row'>
                <div className="col-md-4">
                    <div className="row mt-2">
                        <div className='col-6'>
                            <div className='row'>
                                <div className='from-content col-12'>
                                    From {
                                        formik.errors.from ? <span className="errors">{formik.errors.from}</span> : null
                                    }
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input type="text" className='form-control' name="from" id="from" onChange={formik.handleChange} value={formik.values.from} />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='to-content col-12'>
                                    To {
                                        formik.errors.to ? <span className="errors">{formik.errors.to}</span> : null
                                    }
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input type="text" className='form-control' name="to" id="to" onChange={formik.handleChange} value={formik.values.to} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row mt-2">
                        <div className='col-6'>
                            <div className='row'>
                                <div className='departure-content col-12'>
                                    Departure
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    {/* <input type="date" className='form-control' min={new Date()} /> */}
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        minDate={new Date()}
                                        maxDate={addMonths(new Date(), 5)}
                                        showDisabledMonthNavigation
                                        className='form-control'
                                        dateFormat="MMMM d, yyyy"
                                        placeholderText='Departure Date'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='return-content col-12'>
                                    Return
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    {/* <input type="date" className='form-control' /> */}
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        minDate={new Date()}
                                        maxDate={addMonths(new Date(), 5)}
                                        showDisabledMonthNavigation
                                        className='form-control'
                                        dateFormat="MMMM d, yyyy"
                                        placeholderText='return Date'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row search-results-row mt-2">
                        <div className='col-6'>
                            <div className='row'>
                                <div className='travellers-content col-12'>
                                    Travellers/Class
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input type="number" className='form-control' min="1" name="passenger" id="passenger" onChange={formik.handleChange} value={formik.values.passenger} />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='text-center'>
                                <input className='btn btn-primary col-12' type="submit" value="Search" />
                            </div>
                        </div>
                    </div>
                </div >
            </form>
        </div >
    )
}

export default SearchResultsSearch
