import React from 'react';
import axios from '../Connection';
import { useHistory } from 'react-router-dom';

function Payment({ flightsData, queryDetails, pnr }) {
    const history = useHistory();
    let totalAmount = (flightsData?.totalfare - flightsData?.discount) * (queryDetails.travellers);
    const bookTicket = async () => {
        try {
            let token = window.localStorage.getItem("app-token");
            await axios.post('/bookticket', {
                pnr: pnr
            }, {
                headers: {
                    "authorization": token,
                    "Content-type": "application/json"
                }
            })
            history.push(`/ticket?pnr=${pnr}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (<>
        <div className='row payment-container'>
            <div className='col-12'>
                <div className='row payment-amount'>
                    <h6 className='col-12 text-right text-muted'>AMOUNT TO PAY &#8377; {totalAmount}</h6>
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
                        <input type="text" className='form-control' placeholder='Card Number' name="cardnumber" id="cardnumber" disabled />
                    </div>
                    <div className='col-8 mb-3'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className="col-12">
                                        <label htmlFor='expiry' className='text-muted'>Expiry MM / YYYY</label>
                                        <input type="month" className='form-control col-10' placeholder='EXP MM' name="expiry" id="expiry" disabled />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className="col-12">
                                        <label htmlFor='cvv' className='text-muted'>CVV</label>
                                        <input type="number" minLength="3" maxLength="3" className='form-control col-10' placeholder='CVV' name="cvv" id="cvv" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <label htmlFor='cardname' className='text-muted'>Name on Card</label>
                        <input type="text" className='form-control' placeholder='Name on card' id="cardname" name="cardname" disabled />
                    </div>
                    <div className='col-8 mt-4'>
                        <div className='col-12 mb-2 errors'>All inputs are disabled for demo purpose. Click pay securely to book ticket</div>
                        <input type="button" onClick={bookTicket} className='btn btn-danger col-12' value="Pay Securely" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Payment
