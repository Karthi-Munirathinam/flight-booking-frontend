import React from 'react'

function FareSummary({ flightsDatas, queryDetail }) {
    return (
        <div className='row fare-container'>
            <div className='col-12'>
                <div className="row fare-title">
                    <h6 className='col-12 text-center'>Fare Summary ({queryDetail.travellers} traveller)</h6>
                </div>
                <div className='row fare-content'>
                    <div className='col-6'>
                        Fare type
                    </div>
                    <div className='col-6 text-right'>
                        {flightsDatas?.faretype}
                    </div>
                </div>
                <div className='row fare-content'>
                    <div className='col-6'>
                        Base fare
                    </div>
                    <div className='col-6 text-center'>
                        &#8377; {flightsDatas?.basefare * queryDetail.travellers}
                    </div>
                </div>
                <div className='row fare-content'>
                    <div className='col-6'>
                        Taxes & Fees
                    </div>
                    <div className='col-6 text-center'>
                        &#8377; {flightsDatas?.taxesandfees * queryDetail.travellers}
                    </div>
                </div>
                {
                    flightsDatas?.discount ? (
                        <div className='row fare-content'>
                            <div className='col-6'>
                                Discount
                            </div>
                            <div className='col-6 text-center'>
                                &#8377; {flightsDatas?.discount * queryDetail.travellers}
                            </div>
                        </div>
                    ) : null
                }
                <hr />
                <div className='row fare-content'>
                    <h6 className='col-6'>
                        Amount Payable
                    </h6>
                    <div className='col-6 text-center'>
                        &#8377; {(flightsDatas?.totalfare - flightsDatas?.discount) * queryDetail.travellers}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FareSummary
