
import React, { useEffect, useState } from 'react';

function SearchBar() {
    const [input, setInput] = useState('');

    //const inputRef = useRef(null);

    /*useEffect(() => {
        inputRef.current.focus()
    });*/

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSearch = e => {
        e.preventDefault();
        setInput('')
    };

    return (
        <form className="" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search real estate"
                value={input}
                name="text"
                className="search-input"
                onChange={handleChange}
                //ref={inputRef}
            />
            <button Name="search-button"> Search</button>
        </form>
    )
}

export default SearchBar