import React, { useEffect, useState } from 'react';
import './Booking.css'
import BookingReview from './BookingReview';
import BookingStep from './BookingStep';
import BookingTravellerDetails from './BookingTravellerDetails';
import Payment from './Payment';
import { useLocation } from 'react-router-dom';
import axios from '../Connection';
import Randomstring from 'randomstring';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function BookingPage() {
    let query = useQuery();
    const [pnrNumber, setPnrNumber] = useState('');
    const [flightsData, setFlightsData] = useState([]);
    const [airports, setAirports] = useState([]);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const queryDetails = {
        from: query.get('from'),
        to: query.get('to'),
        startDate: query.get('sdate'),
        returnDate: query.get('rdate'),
        travellers: query.get('p'),
        type: query.get('type'),
        fcode: query.get('fcode'),
        tcode: query.get('tcode'),
        flightno: query.get('fno')
    }
    useEffect(() => {
        const getFlightDetails = async () => {
            try {
                let flightDetailsThruFno = await axios.post('/flightdetails', {
                    flightno: query.get('fno')
                })
                setFlightsData([...flightDetailsThruFno.data.flightdetails])
                // console.log(...flightDetailsThruFno.data.flightdetails)
            } catch (error) {
                console.log(error)
            }
        }
        const getAirports = async () => {
            try {
                let airportdata = await axios.get('/airports')
                setAirports([...airportdata.data.allairports])
            } catch (error) {
                console.log(error)
            }
        }
        getAirports()
        getFlightDetails();
        let pnr = Randomstring.generate(7);
        setPnrNumber(pnr)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const steps = [
        'Review',
        'Traveller Details',
        'Payment',
    ];
    const fromAirport = airports?.filter((each) => each.code === query.get('fcode'));
    const toAirport = airports?.filter((each) => each.code === query.get('tcode'));
    const [pay, setPay] = useState(false);
    const [currentStep, SetCurrentStep] = useState(0);
    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            SetCurrentStep(currentStep + 1);
        }
        if (currentStep === steps.length - 2) {
            setPay(true);
        }
    }
    // const previousStep = () => {
    //     if (currentStep > 0) {
    //         SetCurrentStep(currentStep - 1)
    //     }
    // }
    return (
        <>
            <div className='container-fluid stepper-container'>
                <div className='row'>
                    <div className='col-12'>
                        <BookingStep steps={steps} currentStep={currentStep} />
                    </div>
                </div>
            </div>
            <div className='container-lg'>
                <div className='row'>
                    {
                        pay ? (<div className='col-12'>
                            <Payment flightsData={flightsData[0]} queryDetails={queryDetails} pnr={pnrNumber} />
                        </div>) : (
                            <>
                                {/* <div className='col-md-12'> */}
                                {
                                    currentStep === 0 ? <BookingReview flightsData={flightsData[0]} queryDetails={queryDetails} fromAirport={fromAirport} toAirport={toAirport} currentStep={currentStep} nextStep={nextStep} setPhone={setPhone} setEmail={setEmail} /> : (
                                        currentStep === 1 ? <BookingTravellerDetails flightsData={flightsData[0]} queryDetails={queryDetails} fromAirport={fromAirport} toAirport={toAirport} currentStep={currentStep} nextStep={nextStep} phone={phone} email={email} pnr={pnrNumber} /> : null
                                    )
                                }
                                {/* </div> */}
                                {/* <div className='col-md-4'>
                                    {
                                        currentStep > 1 ? null : (<>
                                            <FareSummary flightsData={flightsData[0]} queryDetails={queryDetails} />
                                            <div className='row mt-4'>
                                                <button className='col-12 btn btn-danger' onClick={nextStep}>{currentStep === 0 ? 'Continue' : 'Pay Securely'}</button>
                                            </div>
                                        </>
                                        )
                                    }
                                </div> */}
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default BookingPage
