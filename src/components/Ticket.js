import React, { useEffect, useState } from 'react';
import './Ticket.css';
import axios from './Connection';
import { useHistory, useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function Ticket() {
    let query = useQuery();
    const pnr = query.get('pnr');
    const [ticketDetails, setTicketDetails] = useState([]);
    const history = useHistory();
    useEffect(() => {
        let getTicketdetails = async () => {
            try {
                let token = window.localStorage.getItem("app-token");
                if (!token) {
                    history.push('/login')
                } else {
                    let details = await axios.post('/sendticket', {
                        pnr: pnr
                    }, {
                        headers: {
                            "authorization": token,
                            "Content-type": "application/json"
                        }
                    })
                    setTicketDetails([...details.data.ticketdetails])
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTicketdetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='ticket-container'>
            <div className='container ticket-container-row'>
                <h4 className='p-3 text-center text-muted'>Congratulations! Your ticket has been booked!</h4>
                <hr />
                <div className='row'>
                    <div className='col-12'>
                        <div className='ticket-row-container row'>
                            <div className='col-md-4 ticket-left'>
                                <div className='row ticket-content'>
                                    <div className='col-12'>
                                        <span style={{ fontWeight: "bold" }} className="text-muted">PNR :</span> <span style={{ color: "#ff934f" }}>{ticketDetails[0]?.mybookings.PNR}</span>
                                    </div>
                                </div>
                                <div className='row ticket-content'>
                                    <div className='col-12'>
                                        <span style={{ fontWeight: "bold" }} className="text-muted">From :</span> <span style={{ color: "#ff934f" }}>{ticketDetails[0]?.mybookings.from}</span>
                                    </div>
                                </div>
                                <div className='row ticket-content'>
                                    <div className='col-12'>
                                        <span style={{ fontWeight: "bold" }} className="text-muted">To :</span> <span style={{ color: "#ff934f" }}>{ticketDetails[0]?.mybookings.to}</span>
                                    </div>
                                </div>
                                <div className='row ticket-content'>
                                    <div className='col-12'>
                                        <span style={{ fontWeight: "bold" }} className="text-muted">Date :</span> <span style={{ color: "#ff934f" }}>{ticketDetails[0]?.mybookings.date}</span>
                                    </div>
                                </div>
                                <div className='row ticket-content'>
                                    <div className='col-12'>
                                        <span style={{ fontWeight: "bold" }} className="text-muted">Departure Time :</span> <span style={{ color: "#ff934f" }}>{ticketDetails[0]?.mybookings.departure}</span>
                                    </div>
                                </div>
                                <div className='row ticket-content'>
                                    <div className='col-12'>
                                        <span style={{ fontWeight: "bold" }} className="text-muted">Arrival Time :</span> <span style={{ color: "#ff934f" }}>{ticketDetails[0]?.mybookings.arrival}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8 '>
                                <div className='row'>
                                    <h5 className='col-12 ticket-content text-center'>
                                        {ticketDetails[0]?.mybookings.airline} <span style={{ color: "#ff934f" }}>|</span> {ticketDetails[0]?.mybookings.flightno} <span style={{ color: "#ff934f" }}>|</span>
                                        {ticketDetails[0]?.mybookings.travellersdetails.length} Passenger
                                    </h5>
                                </div>
                                <div className='row text-center ticket-content ticket-right'>
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
                                        ticketDetails[0]?.mybookings.travellersdetails.map(passenger => {
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
                </div>
            </div >
        </div>
    )
}

export default Ticket
