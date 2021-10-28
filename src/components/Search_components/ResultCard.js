import React from 'react'

function ResultCard() {
    return (
        <div className='row result-card-container mb-2'>
            <div className='col-2'>Indigo</div>
            <div className='col-2'>
                <div className='row'>
                    <h5 className='col-12 text-center'>05:45</h5>
                </div>
                <div className='row'>
                    <small className='col-12 text-center'>New Delhi</small>
                </div>
            </div>
            <div className='col-2'>02h 35m</div>
            <div className='col-2'>
                <div className='row'>
                    <h5 className='col-12 text-center'>08:20</h5>
                </div>
                <div className='row'>
                    <small className='col-12 text-center'>Bengaluru</small>
                </div>
            </div>
            <div className='col-2'>&#8377; 7,424</div>
            <div className='col-2'>
                <div className='row'>
                    <button className='col-12 btn btn-danger'>Book</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
