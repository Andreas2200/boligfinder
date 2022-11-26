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
                        <h1>BoligFinder</h1>
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
                            <a target="_blank" href="/search">
                                <img src="resources/OdenseISE.jpg" class="shortcutImage"></img>
                            </a>
                        </div>
                        <div className="shortcut2">
                            <a target="_blank" href="/search">
                                <img src="resources/aarhusISE.jpeg" class="shortcutImage"></img>
                            </a>
                        </div>
                        <div className="shortcut3">
                            <a target="_blank" href="/search">
                                <img src="resources/københavnISE.jpg" class="shortcutImage"></img>
                            </a>
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