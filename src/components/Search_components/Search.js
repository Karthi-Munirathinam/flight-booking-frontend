import React, { useState, useEffect } from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import addMonths from 'date-fns/addMonths';
import "react-datepicker/dist/react-datepicker.css";
import axios from '../Connection';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading';

function Search() {
    const [airportslist, setAirportsList] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            from: '',
            to: '',
            passenger: 1
        },
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
            setIsLoading(true);
            const fromdata = values.from.split(" - ");
            const todata = values.to.split(' - ');
            // console.log(startDate)
            const sdate = startDate.toString().split(" ");
            const qdate = `${sdate[2]} ${sdate[1]} ${sdate[3]}`;
            // Sat Oct 30 2021 19:00:27 GMT+0530 (India Standard Time)
            setIsLoading(false);
            history.push(`/flights?fcode=${fromdata[1]}&tcode=${todata[1]}&from=${fromdata[0]}&to=${todata[0]}&p=${values.passenger}&sdate=${qdate}&rdate=${endDate}&type=O`)

        }
    })

    useEffect(() => {
        const getAirports = async () => {
            try {
                setIsLoading(true);
                let airportdata = await axios.get('/airports')
                setAirportsList([...airportdata.data.allairports])
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error)
            }
        }
        getAirports()
    }, [])

    return (
        <>
            {
                isLoading ? <Loading /> : (
                    <div className="container-fluid-md search-container mt-5 p-3">
                        <div className='row p-2'>
                            <div className='col-12 text-center'>
                                <h1>Search Flights</h1>
                                <small>Fly anywhere. Fly everywhere.</small>
                            </div>
                        </div>
                        <div className="row search-input-container p-2 mt-3">
                            <form className='col-12' onSubmit={formik.handleSubmit}>
                                {/* <div className='row pl-4'>
                                    <div className='col-12'>
                                        <div className="text-left search-radio-container">
                                            <div className='radio-container pr-3'>
                                                <input type="radio" value="oneway" name="trip" id="oneway" />
                                                <label htmlFor='oneway' className='text-muted ml-2 radio-text'>ONEWAY</label>
                                            </div>
                                            <div className='radio-container pl-lg-4 pr-3'>
                                                <input type="radio" value="roundtrip" name="trip" id="roundtrip" />
                                                <label htmlFor='roundtrip' className='text-muted ml-2 radio-text'>ROUNDTRIP</label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className='col-lg-5 search-from-container'>
                                        <div className='from-container col-6'>
                                            <div className='row'>
                                                <div className='from-content col-12'>
                                                    From {
                                                        formik.errors.from ? <span className="errors">{formik.errors.from}</span> : null
                                                    }
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <input list="fromairports" name="from" id="from" className='form-control' onChange={formik.handleChange} placeholder='eg. Chennai' value={formik.values.from} />
                                                    <datalist id="fromairports">
                                                        {
                                                            airportslist.map((airport) => {
                                                                return <option key={airport.code} value={`${airport.place} - ${airport.code}`} />
                                                            })
                                                        }
                                                    </datalist>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='to-container col-6'>
                                            <div className='row'>
                                                <div className='to-content col-12'>
                                                    To {
                                                        formik.errors.to ? <span className="errors">{formik.errors.to}</span> : null
                                                    }
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <input list="toairports" name="to" id="to" className='form-control' placeholder='eg. Bengaluru' onChange={formik.handleChange} value={formik.values.to} />
                                                    <datalist id="toairports">
                                                        {
                                                            airportslist.map((airport) => {
                                                                return <option key={airport.code} value={`${airport.place} - ${airport.code}`} />
                                                            })
                                                        }
                                                    </datalist>
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
                                                        disabled
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
                                                    <input type="number" className='form-control' min="1" value={formik.values.passenger} onChange={formik.handleChange} name="passenger" id="passenger" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3 search-button-container'>
                                    <div className='col-12 text-center mt-3'>
                                        <input className='btn btn-primary col-3' value="Search" type="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Search
