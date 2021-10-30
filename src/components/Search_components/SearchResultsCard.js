import React from 'react'
import ResultCard from './ResultCard'

function SearchResultsCard({ flightsData, queryDetails }) {
    return (
        <div className='search-results-card-container ml-2'>
            <div className='row'>
                <h5 className='text-muted text-center col-12'>Flights from {queryDetails.from.toUpperCase()} to {queryDetails.to.toUpperCase()}</h5>
            </div>
            <div className='row text-center mb-2 mt-2'>
                <div className='col-2 text-muted'>AIRLINES</div>
                <div className='col-2 text-muted'>DEPARTURE</div>
                <div className='col-2 text-muted'>DURATION</div>
                <div className='col-2 text-muted'>ARRIVAL</div>
                <div className='col-2 text-muted'>PRICE</div>
                <div className='col-md-2 text-muted extra-title'></div>
            </div>
            {
                flightsData[0]?.destination?.map(each => {
                    return <ResultCard key={each.flightno} details={each} queryDetails={queryDetails} />
                })
            }

        </div >
    )
}

export default SearchResultsCard
