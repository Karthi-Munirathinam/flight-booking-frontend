import React from 'react'
import ResultCard from './ResultCard'

function SearchResultsCard() {
    return (
        <div className='search-results-card-container ml-2'>
            <div className='row'>
                <h5 className='text-muted text-center col-12'>Flights from NEW DELHI to BENGALURU</h5>
            </div>
            <div className='row text-center mb-2 mt-2'>
                <div className='col-2 text-muted'>AIRLINES</div>
                <div className='col-2 text-muted'>DEPARTURE</div>
                <div className='col-2 text-muted'>DURATION</div>
                <div className='col-2 text-muted'>ARRIVAL</div>
                <div className='col-2 text-muted'>PRICE</div>
                <div className='col-2 text-muted'></div>
            </div>
            <ResultCard />
            <ResultCard />
        </div >
    )
}

export default SearchResultsCard
