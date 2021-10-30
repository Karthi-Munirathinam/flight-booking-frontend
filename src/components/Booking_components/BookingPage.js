import React, { useState } from 'react';
import './Booking.css'
import BookingReview from './BookingReview';
import BookingStep from './BookingStep';
import BookingTravellerDetails from './BookingTravellerDetails';
import FareSummary from './FareSummary';
import Payment from './Payment';
import { useLocation } from 'react-router-dom';
import axios from '../Connection';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function BookingPage() {
    let query = useQuery();
    // const [flightsData, setFlightsData] = useState([]);
    const queryDetails = {
        from: query.get('from'),
        to: query.get('to'),
        startDate: query.get('sdate'),
        returnDate: query.get('rdate'),
        travellers: query.get('p'),
        type: query.get('type'),
        fcode: query.get('fcode'),
        tcode: query.get('tcode'),
        flightno:query.get('fno')
    }
    const steps = [
        'Review',
        'Traveller Details',
        'Payment',
    ];
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
                            <Payment />
                        </div>) : (
                            <>
                                <div className='col-md-8'>
                                    {
                                        currentStep === 0 ? <BookingReview /> : (
                                            currentStep === 1 ? <BookingTravellerDetails /> : null
                                        )
                                    }
                                </div>
                                <div className='col-md-4'>
                                    {
                                        currentStep > 1 ? null : (<>
                                            <FareSummary />
                                            <div className='row mt-4'>
                                                <button className='col-12 btn btn-danger' onClick={nextStep}>{currentStep === 0 ? 'Continue' : 'Pay Securely'}</button>
                                            </div>
                                        </>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default BookingPage
