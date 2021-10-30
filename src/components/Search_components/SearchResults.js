import React, { useEffect, useState } from 'react'
import SearchResultsCard from './SearchResultsCard'
import SearchResultsSearch from './SearchResultsSearch'
import SearchResultsSidebar from './SearchResultsSidebar'
import { useLocation } from 'react-router-dom';
import axios from '../Connection';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    let query = useQuery();
    const [flightsData, setFlightsData] = useState([]);
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
                const flights = await axios.post('/flights', {
                    from: query.get('fcode'),
                    to: query.get('tcode'),
                })
                setFlightsData([...flights.data.flightdetails])

            } catch (error) {
                console.log(error);
            }
        }
        getFlights()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
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
                    <div className='col-md-3'>
                        <SearchResultsSidebar flightsData={flightsData} />
                    </div>
                    <div className='col-md-9'>
                        <SearchResultsCard flightsData={flightsData} queryDetails={queryDetails} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResults
