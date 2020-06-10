import React, { useState } from 'react'

const SearchForm = () => {
    const [query, setQuery] = useState('')
    return(
        <div>
        <input 
            type='text'
            value={query}
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value)}
        />
        </div>
    )
}

export default SearchForm