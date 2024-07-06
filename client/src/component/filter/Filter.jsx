import './Filter.scss';

function Filter(){
  return (
    <div className='filter'>
        <h1>Search result for <b>London</b></h1>
        <div className='filter-container'>
            <div className='item'>
                <label htmlFor='city'>Location</label>
                <input 
                    type='text' 
                    id='city' 
                    placeholder='city Location' 
                />
            </div>
        </div>
        <div className='bottom'>
            <div className='item_bottom'>
                <label htmlFor='type'>Type</label>
                <select name="type" id="type">
                    <option value="">All</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor='property'>Property</label>
                <select name="property" id="property">
                    <option value="">All</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor='minPrice'>Min Price</label>
                <input 
                    type='number' 
                    id='minPrice'
                    name='minPrice' 
                    placeholder='any' 
                />
            </div>
            <div className='item'>
                <label htmlFor='maxPrice'>Max Price</label>
                <input 
                    type='number' 
                    id='maxPrice'
                    name='maxPrice' 
                    placeholder='any' 
                />
            </div>
            <div className='item'>
                <label htmlFor='bedroom'>BedRoom</label>
                <input 
                    type='number' 
                    id='bedroom'
                    name='bedroom' 
                    placeholder='any' 
                />
            </div>
            <button>
                <img src='/search.png' alt='' />
            </button>
        </div>
    </div>
  )
}

export default Filter;