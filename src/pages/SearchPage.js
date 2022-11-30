import React from 'react';
import { ApartmentListing } from '../components/ApartmentListing';
import "../styles/search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faElevator, faGraduationCap, faKitchenSet, faParking, faBath, faDog} from "@fortawesome/free-solid-svg-icons";

export default function SearchPage() {


    return (
        <>
            <section className='flex'>
                
                <div className='content-wrapper'>

                    <div className='sidebar'>

                    <div className='flex filter-box'>
                            <h1>Housing type</h1>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Apartments</label>
                                <input type="checkbox" name="lejligheder" id="apartments" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Rooms</label>
                                <input type="checkbox" name="værelser" id="rooms" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Houses</label>
                                <input type="checkbox" name="huse" id="houses" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Dorm rooms</label>
                                <input type="checkbox" name="rækkehuse" id="dorms" />
                            </div>
                        </div>


                        <div className='flex filter-box'>
                            {/* <div className='rent-input'> */}
                            <label htmlFor='rent'>Maximum Rent</label>
                            <input type="number" name="rent" id="rent" placeholder='price in DKK'/>
                            {/* </div> */}
                        </div>

                        <div className='flex filter-box'>
                            {/* <div className='size-input'> */}
                            <label htmlFor='rent'>Minimum Size</label>
                            <input type="number" name="size" id="size" placeholder='in m2'/>
                            {/* </div> */}
                        </div>

                        <div className='flex filter-box'>
                            {/* <div className='rooms-input'> */}
                            <label htmlFor='rooms'>Minimum Rooms</label>
                            <input type="number" name="rooms" id="rooms" placeholder='# of rooms'/>
                            {/* </div> */}
                        </div>


                        <div className='flex filter-box'>
                            <h1>Rent period</h1>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Less than a year</label>
                                <input type="checkbox" name="lejligheder" id="lessYear" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>1 year - 2 years</label>
                                <input type="checkbox" name="værelser" id="twoYears" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>2 years - 4 years</label>
                                <input type="checkbox" name="huse" id="fourYears" />
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>More than 5 years</label>
                                <input type="checkbox" name="rækkehuse" id="moreYears" />
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
                                    <FontAwesomeIcon icon={faDog} className="yellowStarBig"/>
                                    <label>Animals</label>
                                    
                                </div>
                                <input type="checkbox" name="animals" id="animals" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <FontAwesomeIcon icon={faBath} className="yellowStarBig"/>
                                    <label>Bath</label>
                                    
                                </div>
                                <input type="checkbox" name="bath" id="bath" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <FontAwesomeIcon icon={faParking} className="yellowStarBig"/>
                                    <label>Parking</label>
                                    
                                </div>
                                <input type="checkbox" name="parking" id="parking" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <FontAwesomeIcon icon={faKitchenSet}  className="yellowStarBig"/>
                                    <label>Kitchen</label>
                                </div>
                                <input type="checkbox" name="kitchen" id="kitchen" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <FontAwesomeIcon icon={faGraduationCap}  className="yellowStarBig"/>
                                    <label>Student</label>
                                    
                                </div>
                                <input type="checkbox" name="student" id="student" />
                            </div>

                            <div className='flex filter-checkbox'>
                                <div>
                                    <FontAwesomeIcon icon={faElevator}  className="yellowStarBig"/>
                                    <label>Elevator</label>

                                </div>
                                <input type="checkbox" name="elevator" id="elevator" />
                            </div>

                        </div>

                    </div>
                    <div className='search-results'>
                        <h1 className="center">BoligFinder search</h1>
                        <div className='search-bar'>
                            <input type="text" className='searchBar' id='searchBar' placeholder='Where do you want to live'></input>
                            <button>Search</button>
                        </div>
                        <ApartmentListing title={"2 værelses lejlighed"} id="Odense M" imagepath={"resources/dormroom.jpg"} city={"Odense M"} />
                        <ApartmentListing title={"4 værelses lejlighed"} id="Odense S" imagepath={"resources/studioapartment.jpeg"} city={"Odense S"} />
                        <ApartmentListing title={"4 værelses lejlighed"} id="Odense C" imagepath={"resources/studioapartment.jpeg"} city={"Odense C"} />
                        <ApartmentListing title={"2 værelses lejlighed"} id="Odense V" imagepath={"resources/dormroom.jpg"} city={"Odense V"} />

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