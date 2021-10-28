import React from 'react'

function Payment() {
    return (<>
        <div className='row payment-container'>
            <div className='col-12'>
                <div className='row payment-amount'>
                    <h6 className='col-12 text-right text-muted'>AMOUNT TO PAY &#8377; 3070</h6>
                </div>
            </div>
        </div>
        <div className='row payment-box'>
            <div className='col-3' style={{ borderRight: "1px solid #c1c1c1" }}>
                <div className='row payment-cc-dc'>
                    <h5 className='col-12'>
                        Credit / Debit Card
                    </h5>
                </div>
            </div>
            <div className='col-9'>
                <div className='row payment-card-details'>
                    <div className='col-8 mb-3'>
                        <label htmlFor='cardnumber' className='text-muted'>Card Number</label>
                        <input type="text" className='form-control' placeholder='Card Number' name="cardnumber" id="cardnumber" />
                    </div>
                    <div className='col-8 mb-3'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='row'>
                                    <div class="col-12">
                                        <label htmlFor='expiry' className='text-muted'>Expiry MM / YYYY</label>
                                        <input type="month" className='form-control col-10' placeholder='EXP MM' name="expiry" id="expiry" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='row'>
                                    <div class="col-12">
                                        <label htmlFor='cvv' className='text-muted'>CVV</label>
                                        <input type="number" minLength="3" maxLength="3" className='form-control col-10' placeholder='CVV' name="cvv" id="cvv" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <label htmlFor='cardname' className='text-muted'>Name on Card</label>
                        <input type="text" className='form-control' placeholder='Name on card' id="cardname" name="cardname" />
                    </div>
                    <div className='col-8 mt-4'>
                        <input type="button" className='btn btn-danger col-12' value="Pay Securely" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Payment
