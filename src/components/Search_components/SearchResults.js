import React, { useEffect, useState } from 'react'
import SearchResultsCard from './SearchResultsCard'
import SearchResultsSearch from './SearchResultsSearch'
import SearchResultsSidebar from './SearchResultsSidebar'
import { useLocation } from 'react-router-dom';
import axios from '../Connection';
import Loading from '../Loading';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    let query = useQuery();
    const [flightsData, setFlightsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const queryDetails = {
        from: query.get('from'),
        to: query.get('to'),
        startDate: query.get('sdate'),
        returnDate: query.get('rdate'),
        travellers: query.get('p'),
        type: query.get('type'),
        fcode: query.get('fcode'),
        tcode: query.get('tcode')
    }
    useEffect(() => {
        const getFlights = async () => {
            try {
                setIsLoading(true)
                const flights = await axios.post('/flights', {
                    from: query.get('fcode'),
                    to: query.get('tcode'),
                })
                setFlightsData([...flights.data.flightdetails])
                setIsLoading(false);
                // console.log(flights.data.flightdetails)

            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }
        getFlights()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                isLoading ? <Loading /> : (
                    <>
                        <div className="container-fluid search-result-search-container">
                            <div className='row'>
                                <div className="col-12">
                                    <SearchResultsSearch queryDetails={queryDetails} />
                                </div>
                            </div>
                        </div>
                        <div className='container-lg search-results-container mt-4'>
                            <div className='row'>
                                {/* <div className='col-md-3'>
                                    <SearchResultsSidebar flightsData={flightsData} />
                                </div> */}
                                {
                                    flightsData.length > 0 ? (
                                        <div className='col-md-12'>
                                            <SearchResultsCard flightsData={flightsData} queryDetails={queryDetails} />
                                        </div>
                                    ) : <h4 className='col-md-12' style={{ color: '#ff934f', minHeight: "53vh" }}>
                                        No Flights Found..
                                    </h4>
                                }

                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default SearchResults
