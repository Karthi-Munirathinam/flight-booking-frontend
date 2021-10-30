import React from 'react'

function SearchResultsSidebar({ flightsData }) {
    const totalAirlines = flightsData[0]?.destination.map(each => {
        return each.airline
    })
    const stopsDetails = flightsData[0]?.destination.map(each => {
        return each.stop
    })
    const stops = [...new Set(stopsDetails)];
    const airlines = [...new Set(totalAirlines)];
    return (
        <div className='search-filter-container row'>
            <div className='col-12'>
                <div className='row'>
                    <p className='col-12'>52 of {flightsData[0]?.destination.length} flights <span>See all</span></p>
                </div>
                <div className='row'>
                    <p className='col-12'>Airlines</p>
                    {
                        airlines.map((air) => {
                            return <div className="col-12" key={air}>
                                <input type="checkbox" value={air} className='mr-2' id={air} name={air} />
                                <label htmlFor={air}>{air}</label>
                            </div>
                        })
                    }
                </div>
                <div className='row'>
                    <p className='col-12'>One-way price</p>
                    <div className="col-12">
                        <div className="slidecontainer">
                            <input type="range" min="1" max="100" className="slider" id="myRange" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-12'>Stops</p>
                    {
                        stops.map(each => {
                            return <div className="col-12" key={each}>
                                <input type="checkbox" value={each} className='mr-2' id={each} name={each} />
                                <label htmlFor={each}>{each}</label>
                            </div>
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default SearchResultsSidebar
