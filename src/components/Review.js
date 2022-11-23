import React from "react";
import "../styles/review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export function Review({review}) {

    return (
        <>
            <div className="review">
                <div className="reviewInner">
                    <img src="resources/sofprofilepic.JPG"></img>
                    <div>
                        <p>{review.name}</p>
                        <div className="starFlexBoxSmall">
                            <FontAwesomeIcon icon={faStar} className={review.stars >= 1 ? "yellowStarSmall" : "blackStarSmall"}/>
                            <FontAwesomeIcon icon={faStar} className={review.stars >= 2 ? "yellowStarSmall" : "blackStarSmall"}/>
                            <FontAwesomeIcon icon={faStar} className={review.stars >= 3 ? "yellowStarSmall" : "blackStarSmall"}/>
                            <FontAwesomeIcon icon={faStar} className={review.stars >= 4 ? "yellowStarSmall" : "blackStarSmall"}/>
                            <FontAwesomeIcon icon={faStar} className={review.stars >= 5 ? "yellowStarSmall" : "blackStarSmall"}/>
                        </div>
                    </div>
                </div>
                <p className="reviewBread">{review.text}</p>
            </div>
        </>
        
    )
}