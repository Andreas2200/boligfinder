
import React, { useEffect, useState } from 'react';

function FrontPage() {
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
        <section class="frontPage">
            <div class="grid">
                <div class="searchBar">
                    <form className="" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Where do you want to live?"
                            value={input}
                            name="text"
                            className="search-input"
                            onChange={handleChange}
                        //ref={inputRef}
                        />
                        <button Name="search-button"> Search</button>
                    </form>
                </div>
                <div className="shortcuts">

                </div>
                <div class="listings">
                </div>
            </div>
        </section>
    )
}

export default FrontPage