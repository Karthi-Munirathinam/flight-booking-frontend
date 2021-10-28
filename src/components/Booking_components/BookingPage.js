import React, { useState } from 'react';
import './Booking.css'
import BookingReview from './BookingReview';
import BookingStep from './BookingStep';
import BookingTravellerDetails from './BookingTravellerDetails';
import FareSummary from './FareSummary';

function BookingPage() {
    const steps = [
        'Review',
        'Traveller Details',
        'Payment',
    ];
    const [currentStep, SetCurrentStep] = useState(0);
    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            SetCurrentStep(currentStep + 1)
        }
    }
    const previousStep = () => {
        if (currentStep > 0) {
            SetCurrentStep(currentStep - 1)
        }
    }
    return (
        <>
            <div className='container-fluid stepper-container'>
                <div className='row'>
                    {/* <div className='col-2'>
                    </div> */}
                    <div className='col-12'>
                        <BookingStep steps={steps} currentStep={currentStep} />
                    </div>
                    {/* <div className='col-2'>
                    </div> */}
                </div>
            </div>
            <div className='container-lg'>
                <div className='row'>
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
                </div>
            </div>
        </>
    )
}

export default BookingPage
