import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addMonths from 'date-fns/addMonths';
import "react-datepicker/dist/react-datepicker.css";
import './SearchResults.css';

function SearchResultsSearch() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <div className='search-results-search-container row pb-3'>
            <div className="col-md-4">
                <div className="row mt-2">
                    <div className='col-6'>
                        <div className='row'>
                            <div className='from-content col-12'>
                                From
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='to-content col-12'>
                                To
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <input type="text" className='form-control' />
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
                                <input type="number" className='form-control' min="1" defaultValue="1" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='text-center'>
                            <button className='btn btn-primary col-12'>Search</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SearchResultsSearch
