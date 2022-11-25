import React from 'react';
import { ApartmentListing } from '../components/ApartmentListing';
import "../styles/search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faElevator, faGraduationCap, faKitchenSet, faParking, faBath, faDog} from "@fortawesome/free-solid-svg-icons";

export default function SearchPage() {


    return (
        <>
            <section className='flex'>
                <div className='search-bar'>
                    <label className='search-label' htmlFor='searchBar'>Search</label>
                    <input type="text" name='searchBar' id='searchBar' placeholder='Where do you want to live'></input>
                </div>
                <div className='content-wrapper'>

                    <div className='sidebar'>

                        <div className='flex filter-box'>
                            <h1>Boligtype</h1>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Lejligheder</label>
                                <input type="checkbox" name="lejligheder" id="lejligheder" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Værelser</label>
                                <input type="checkbox" name="værelser" id="værelser" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Huse</label>
                                <input type="checkbox" name="huse" id="huse" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Rækkehuse</label>
                                <input type="checkbox" name="rækkehuse" id="rækkehuse" />
                            </div>
                        </div>


                        <div className='flex filter-box'>
                            {/* <div className='rent-input'> */}
                            <label htmlFor='rent'>Rent</label>
                            <input type="number" name="rent" id="rent" />
                            {/* </div> */}
                        </div>

                        <div className='flex filter-box'>
                            {/* <div className='size-input'> */}
                            <label htmlFor='rent'>Size</label>
                            <input type="number" name="size" id="size" />
                            {/* </div> */}
                        </div>

                        <div className='flex filter-box'>
                            {/* <div className='rooms-input'> */}
                            <label htmlFor='rooms'>Minimum Rooms</label>
                            <input type="number" name="rooms" id="rooms" />
                            {/* </div> */}
                        </div>


                        <div className='flex filter-box'>
                            <h1>Rent period</h1>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Lejligheder</label>
                                <input type="checkbox" name="lejligheder" id="lejligheder" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Værelser</label>
                                <input type="checkbox" name="værelser" id="værelser" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Huse</label>
                                <input type="checkbox" name="huse" id="huse" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Rækkehuse</label>
                                <input type="checkbox" name="rækkehuse" id="rækkehuse" />
                            </div>
                        </div>


                        <div className='flex filter-box'>
                            {/* <div className='rent-input'> */}
                            <label htmlFor='rent'>Takeover date</label>
                            <input type="date" name="takover" id="takeover" />
                            {/* </div> */}
                        </div>


                        <div className='flex filter-box'>
                            <h1>Other filters</h1>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <label htmlFor='lejligheder'>Animals</label>
                                    <FontAwesomeIcon icon={faDog} className="yellowStarBig"/>
                                </div>
                                <input type="checkbox" name="animals" id="animals" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <label htmlFor='lejligheder'>Bath</label>
                                    <FontAwesomeIcon icon={faBath} className="yellowStarBig"/>
                                </div>
                                <input type="checkbox" name="bath" id="bath" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <label htmlFor='lejligheder'>Parking</label>
                                    <FontAwesomeIcon icon={faParking} className="yellowStarBig"/>
                                </div>
                                <input type="checkbox" name="parking" id="parking" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <label htmlFor='lejligheder'>Kitchen</label>
                                    <FontAwesomeIcon icon={faKitchenSet} />
                                </div>
                                <input type="checkbox" name="kitchen" id="kitchen" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <label htmlFor='lejligheder'>Student</label>
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                <input type="checkbox" name="student" id="student" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <label htmlFor='lejligheder'>Elevator</label>
                                    <FontAwesomeIcon icon={faElevator} />
                                </div>
                                <input type="checkbox" name="elevator" id="elevator" />
                            </div>

                        </div>

                    </div>
                    <div className='search-results'>
                        <ApartmentListing title={"2 værelses lejlighed"} imagepath={"resources/dormroom.JPG"} city={"Odense M"} />
                        <ApartmentListing title={"4 værelses lejlighed"} imagepath={"resources/studioapartment.JPeG"} city={"Ringkøbing"} />
                        <ApartmentListing title={"4 værelses lejlighed"} imagepath={"resources/studioapartment.JPeG"} city={"Nordby"} />
                        <ApartmentListing title={"2 værelses lejlighed"} imagepath={"resources/dormroom.JPG"} city={"Amager"} />

                        <div className='page-selector'>
                        <button className='prev-next'>
                                <span>Previous</span>
                            </button>

                            <button className='page-number'>
                                <span>1</span>
                            </button>

                            <button className='page-number'>
                                <span>2</span>
                            </button>

                            <button className='page-number'>
                                <span>3</span>
                            </button>

                            <button className='page-number'>
                                <span>4</span>
                            </button>

                            <button className='page-number'>
                                <span>5</span>
                            </button>

                            <button className='page-number'>
                                <span>6</span>
                            </button>

                            <button className='prev-next'>
                                <span>Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}