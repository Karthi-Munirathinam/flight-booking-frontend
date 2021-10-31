import React, { useEffect, useState } from 'react';
import './MyBooking.css';
import { useHistory } from 'react-router-dom';
import axios from './Connection';
import TicketCard from './TicketCard';
import Loading from './Loading';

function MyBooking() {
    const history = useHistory();
    const [allBookings, setAllBookings] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        let getAllRecords = async () => {
            try {
                let token = window.localStorage.getItem("app-token");
                if (!token) {
                    history.push('/login')
                } else {
                    setIsLoading(true);
                    let details = await axios.get('/getbookings', {
                        headers: {
                            "authorization": token,
                            "Content-type": "application/json"
                        }
                    })
                    setAllBookings([...details.data.bookingsdetail])
                    setIsLoading(false);
                    // console.log(details.data.bookingsdetail)
                }
            } catch (error) {
                setIsLoading(false);
                console.log(error)
            }
        }
        getAllRecords()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {
                isLoading ? <Loading /> : (
                    <div className="my-booking-container container">
                        <div className="row">
                            <div className='col-12'>
                                <div className='row'>
                                    <h4 className='col-12 text-center' style={{ color: '#ff934f', paddingBottom: '1rem' }}>
                                        Your Bookings!
                                    </h4>
                                </div>
                                <div className="row">
                                    {
                                        allBookings[0]?.mybookings ? (
                                            allBookings[0]?.mybookings.filter(eachdetail => {
                                                return eachdetail.bookingstatus === true
                                            }).map(each => {
                                                return <TicketCard allBookings={each} />
                                            })
                                        ) : (
                                            <h4 className='col-md-12' style={{ color: '#ff934f', minHeight: "53vh" }}>
                                                No Bookings Found..
                                            </h4>
                                        )

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default MyBooking
