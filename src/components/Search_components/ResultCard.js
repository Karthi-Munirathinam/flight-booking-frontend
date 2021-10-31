import React from 'react';
import { useHistory } from 'react-router-dom';

function ResultCard({ details, queryDetails }) {
    const history = useHistory();
    const handlebooking = () => {
        history.push(`/booking?fcode=${queryDetails.fcode}&tcode=${queryDetails.tcode}&from=${queryDetails.from}&to=${queryDetails.to}&p=${queryDetails.travellers}&sdate=${queryDetails.startDate}&rdate=${queryDetails.returnDate}&type=O&fno=${details.flightno}`)
    }
    return (
        <div className='row result-card-container mb-2'>
            <div className='col-2'>{details.airline}</div>
            <div className='col-2'>
                <div className='row'>
                    <h5 className='col-12 text-center'>{details.departuretime}</h5>
                </div>
                <div className='row'>
                    <small className='col-12 text-center'>{queryDetails.fcode}</small>
                </div>
            </div>
            <div className='col-2'>{details.duration}</div>
            <div className='col-2'>
                <div className='row'>
                    <h5 className='col-12 text-center'>{details.arrivaltime}</h5>
                </div>
                <div className='row'>
                    <small className='col-12 text-center'>{details.to}</small>
                </div>
            </div>
            <div className='col-2'>&#8377; {details.totalfare}</div>
            <div className='col-md-2'>
                <div className='row'>
                    <button className='col-12 btn btn-danger' onClick={() => handlebooking()}>Book</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
