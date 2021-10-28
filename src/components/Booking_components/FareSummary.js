import React from 'react'

function FareSummary() {
    return (
        <div className='row fare-container'>
            <div className='col-12'>
                <div className="row fare-title">
                    <h6 className='col-12 text-center'>Fare Summary (1 traveller)</h6>
                </div>
                <div className='row fare-content'>
                    <div className='col-6'>
                        Fare type
                    </div>
                    <div className='col-6 text-center'>
                        Partially refundable
                    </div>
                </div>
                <div className='row fare-content'>
                    <div className='col-6'>
                        Base fare
                    </div>
                    <div className='col-6 text-center'>
                        &#8377; 2801
                    </div>
                </div>
                <div className='row fare-content'>
                    <div className='col-6'>
                        Taxes & Fees
                    </div>
                    <div className='col-6 text-center'>
                        &#8377; 560
                    </div>
                </div>
                <hr />
                <div className='row fare-content'>
                    <h6 className='col-6'>
                        Amount Payable
                    </h6>
                    <div className='col-6 text-center'>
                        &#8377; 2761
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FareSummary
