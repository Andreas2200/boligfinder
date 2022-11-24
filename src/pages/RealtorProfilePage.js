import "../styles/realtor.css";
import React, {useState, useEffect} from 'react';
import { ReviewList } from "../components/ReviewList";
import { ReviewForm } from "../components/ReviewForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


export default function RealtorProfilePage() {

    const STORAGE_KEY = "unique";

    const [reviews, setReviews] = useState([{id: 1, name: "sofie", stars: 4, text: "This man is a very nice realtor, I would recommend"},{id: 1, name: "Martin", stars: 3, text: "Not very cool guy :(("}])

    function addReview(review) {
        setReviews([review, ...reviews]);
    }

    return(
        <>
            <section class="contentPage">
                <div class="grid">
                    <img src="resources/sofprofilepic.JPG" alt="logo" class="realtorProfileImg"></img>
                    <div class="info">
                        <h1>Jens Jensen</h1>
                        <h3>Hovedgaden 13, 6720 Fanø</h3>
                        <h4>Contact info:</h4>
                        <div style={{display: "flex"}}>
                            <h4 style={{marginRight: 20}}>Mail: Jens@jensen.dk</h4>
                            <h4>Phone: 30303030</h4>
                        </div>
                    </div>
                    <div className="reviewBox">
                        <div className="starFlexBox">
                            <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                            <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                            <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                            <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                            <FontAwesomeIcon icon={faStar} className="blackStarBig"/>
                        </div>
                        <ReviewList reviews={reviews} />
                        <div className="reviewSeeMoreBtn">
                            <button>See more reviews</button>
                        </div>
                        <ReviewForm addReview={addReview}/>
                    </div>
                    <div class="listings">
                        <p>listings</p>
                    </div>
                </div>
            </section>
        </>
    )
}