import React from 'react'

function TicketCard({ allBookings }) {
    return (
        <div className="col-12 mb-3">
            <div className='ticket-card-row-container row'>
                <div className='col-md-4 ticket-left'>
                    <div className='row'>
                        <div className='col-12'>
                            <span style={{ fontWeight: "bold" }} className="text-muted">PNR :</span> <span style={{ color: "#ff934f" }}>{allBookings?.PNR}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span style={{ fontWeight: "bold" }} className="text-muted">From :</span> <span style={{ color: "#ff934f" }}>{allBookings?.from}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span style={{ fontWeight: "bold" }} className="text-muted">To :</span> <span style={{ color: "#ff934f" }}>{allBookings?.to}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span style={{ fontWeight: "bold" }} className="text-muted">Date :</span> <span style={{ color: "#ff934f" }}>{allBookings?.date}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span style={{ fontWeight: "bold" }} className="text-muted">Departure Time :</span> <span style={{ color: "#ff934f" }}>{allBookings?.departure}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <span style={{ fontWeight: "bold" }} className="text-muted">Arrival Time :</span> <span style={{ color: "#ff934f" }}>{allBookings?.arrival}</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 '>
                    <div className='row'>
                        <h5 className='col-12 text-center'>
                            {allBookings?.airline} <span style={{ color: "#ff934f" }}>|</span> {allBookings?.flightno} <span style={{ color: "#ff934f" }}>|</span>
                            {allBookings?.travellersdetails.length} Passenger
                        </h5>
                    </div>
                    <div className='row text-center ticket-right'>
                        <div className='col-4 text-muted'>
                            FirstName
                        </div>
                        <div className='col-4 text-muted'>
                            LastName
                        </div>
                        <div className='col-4 text-muted'>
                            Nationality
                        </div>
                        {
                            allBookings?.travellersdetails.map(passenger => {
                                return <>
                                    <div className='col-4 mt-2'>
                                        {passenger.firstname}
                                    </div>
                                    <div className='col-4 mt-2'>
                                        {passenger.lastname}
                                    </div>
                                    <div className='col-4 mt-2'>
                                        {passenger.nationality}
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard
