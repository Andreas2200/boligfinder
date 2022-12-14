import "../styles/frontPage.css";
import React, { useEffect, useState } from 'react';
import { ApartmentListing } from "../components/ApartmentListing";
import { Link } from 'react-router-dom';



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
                <div class="frontpageGrid">
                    <div class="frontpageTitle">
                        <a href="https://youtu.be/6o7I73spdUY?t=17" style={{textDecoration: 'none', color:'black'}}>
                        <h1>BoligFinder</h1>
                        </a>
                    </div>
                    <div class="frontsearchBar">
                        <form className="frontpageBar" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Where do you want to live?"
                                value={input}
                                name="text"
                                className="search-input"
                                onChange={handleChange}
                            //ref={inputRef}
                            />
                            <Link to="/search">
                                <button className="front-search-button"> Search</button>
                            </Link>
                        </form>
                    </div>
                    <div className="shortcuts">
                        <div className="shortcut1">
                            <Link to="/search">
                                <img src="resources/OdenseISE.jpg" class="shortcutImage"></img>
                            </Link>
                        </div>
                        <div className="shortcut2">
                            <Link to="/search">
                                <img src="resources/aarhusISE.jpeg" class="shortcutImage"></img>
                            </Link>
                        </div>
                        <div className="shortcut3">
                            <Link to="/search">
                                <img src="resources/k??benhavnISE.jpg" class="shortcutImage"></img>
                            </Link>
                        </div>
                    </div>
                    <div class="listings">
                        <ApartmentListing title={"2 v??relses lejlighed"} id="listing1" imagepath={"resources/dormroom.jpg"} city={"Odense M"} />
                        <ApartmentListing title={"4 v??relses lejlighed"} id="listing2" imagepath={"resources/studioapartment.jpeg"} city={"Ringk??bing"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FrontPage