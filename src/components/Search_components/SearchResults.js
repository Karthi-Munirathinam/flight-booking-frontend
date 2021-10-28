import React from 'react'
import SearchResultsCard from './SearchResultsCard'
import SearchResultsSearch from './SearchResultsSearch'
import SearchResultsSidebar from './SearchResultsSidebar'

function SearchResults() {
    return (
        <>
            <div className="container-fluid search-result-search-container">
                <div className='row'>
                    <div className="col-12">
                        <SearchResultsSearch />
                    </div>
                </div>
            </div>
            <div className='container-lg search-results-container mt-4'>
                <div className='row'>
                    <div className='col-3'>
                        <SearchResultsSidebar />
                    </div>
                    <div className='col-9'>
                        <SearchResultsCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResults
