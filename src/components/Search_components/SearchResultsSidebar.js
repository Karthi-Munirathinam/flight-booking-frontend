import React from 'react'

function SearchResultsSidebar() {
    return (
        <div className='search-filter-container row'>
            <div className='col-12'>
                <div className='row'>
                    <p className='col-12'>52 of 52 flights <span>See all</span></p>
                </div>
                <div className='row'>
                    <p className='col-12'>Airlines</p>
                    <div class="col-12">
                        <input type="checkbox" value="indigo" className='mr-2' id='indigo' name="indigo" />
                        <label htmlFor='indigo'>Indigo</label>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-12'>One-way price</p>
                    <div class="col-12">
                        <div className="slidecontainer">
                            <input type="range" min="1" max="100" class="slider" id="myRange" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-12'>Stops</p>
                    <div class="col-12">
                        <input type="checkbox" value="indigo" className='mr-2' id='indigo' name="indigo" />
                        <label htmlFor='indigo'>Non-stop</label>
                    </div>
                    <div class="col-12">
                        <input type="checkbox" value="indigo" className='mr-2' id='indigo' name="indigo" />
                        <label htmlFor='indigo'>1 stop</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsSidebar
