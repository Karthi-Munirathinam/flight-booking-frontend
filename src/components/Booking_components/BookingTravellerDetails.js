import React from 'react'

function BookingTravellerDetails() {
    return (
        <>
            <div className='row traveller-details-container'>
                <div className='col-12'>
                    <div className='row ticket-details'>
                        <div className='col-1'>
                            LOGO
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                <div className='col-12 text-center'>
                                    <h6 className='text-uppercase'>SpiceJet</h6>
                                    <small>SG 3467</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                <h6 className='col-12'>MAA 19:50</h6>
                                <small className='col-12'>Wed, 20 Oct</small>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                <h6 className='col-12'>BLR 21:00</h6>
                                <small className='col-12'>Wed, 20 Oct</small>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                <h6 className='col-12'>1hr 10min</h6>
                                <small className='col-12'>non-stop</small>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='row details'>
                                <h6 className='col-12'>+91-7305805670</h6>
                                <div className='col-12'>karthiraja268@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='traveller-container row'>
                <div className='col-12'>
                    <div className='row traveller-content'>
                        <h6 className='col-12'>Enter traveller details</h6>
                    </div>
                    <div className='row details-content'>
                        <h5 className='col-12'>Adult 1</h5>
                    </div>
                    <div className='row details-form text-center'>
                        <div className='col-12'>
                            <div className="table-responsive text-center">
                                <table className="table table-borderless" width="100%">
                                    <thead>
                                        <tr>
                                            <th className='text-muted' scope="col">FirstName</th>
                                            <th className='text-muted' scope="col">LastName</th>
                                            <th className='text-muted' scope="col">Nationality</th>
                                            <th className='text-muted' scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Mark</th>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><input type="button" value="add" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <input type="text" className='form-control' />
                                            </th>
                                            <td><input type="text" className='form-control' /></td>
                                            <td><input type="text" className='form-control' /></td>
                                            <td><input type="button" value="add" className='btn btn-success' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookingTravellerDetails
