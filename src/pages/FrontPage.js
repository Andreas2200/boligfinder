
import React, { useEffect, useState } from 'react';
import { ApartmentListing } from "../components/ApartmentListing";



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
        <>
            <section class="frontPage">
                <div class="grid">
                    <div class="title">
                        <h1>BoligFinder</h1>
                    </div>
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
                        <div className="shortcut1">
                            <h1>Odense shortcut</h1>
                        </div>
                        <div className="shortcut2">
                            <h1>Aarhus shortcut</h1>
                        </div>
                        <div className="shortcut3">
                            <h1>København shortcut</h1>
                        </div>
                    </div>
                    <div class="listings">
                        <ApartmentListing title={"2 værelses lejlighed"} imagepath={"resources/dormroom.JPG"} city={"Odense M"} />
                        <ApartmentListing title={"4 værelses lejlighed"} imagepath={"resources/studioapartment.JPeG"} city={"Ringkøbing"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FrontPage