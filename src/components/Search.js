import React, { useState } from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import addMonths from 'date-fns/addMonths';
import "react-datepicker/dist/react-datepicker.css";
function Search() {
    // const [minDate, setinDate] = useState(null);
    // useEffect(() => {
    //     const today = new Date();

    // }, [])
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <div className="container-fluid-md search-container mt-5 p-3">
            <div className='row p-2'>
                <div className='col-12 text-center'>
                    <h1>Search Flights</h1>
                    <small>Fly anywhere. Fly everywhere.</small>
                </div>
            </div>
            <div className="row search-input-container p-2 mt-3">
                <div className='col-12'>
                    <div className='row pl-4'>
                        <div className='col-12'>
                            <form className="text-left search-radio-container">
                                <div className='radio-container pr-3'>
                                    <input type="radio" value="oneway" name="trip" id="oneway" />
                                    <label htmlFor='oneway' className='text-muted ml-2 radio-text'>ONEWAY</label>
                                </div>
                                <div className='radio-container pl-lg-4 pr-3'>
                                    <input type="radio" value="roundtrip" name="trip" id="roundtrip" />
                                    <label htmlFor='roundtrip' className='text-muted ml-2 radio-text'>ROUNDTRIP</label>
                                </div>
                                <div className='radio-container pl-lg-4'>
                                    <input type="radio" value="multicity" name="trip" id="multicity" />
                                    <label htmlFor='multicity' className='text-muted ml-2 radio-text'>MULTICITY</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-5 search-from-container'>
                            <div className='from-container col-6'>
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
                            <div className='to-container col-6'>
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
                        <div className='col-lg-5 search-departure-container'>
                            <div className='departure-container col-6'>
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
                            <div className='return-container col-6'>
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
                        <div className='col-lg-2'>
                            <div className='travellers-container col-6'>
                                <div className='row'>
                                    <div className='travellers-content col-12'>
                                        Travellers/Class
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <input type="number" className='form-control ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3 search-button-container'>
                        <div className='col-12 text-center mt-3'>
                            <button className='btn btn-primary col-3'>Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Search
