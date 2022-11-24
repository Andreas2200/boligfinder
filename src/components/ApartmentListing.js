import React from "react";
import "../styles/apartmentlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export function ApartmentListing() {

    return(
        <div className="apartmentCard">
            <img src="resources/dormroom.JPG" alt="apartment image"></img>
            <div>
                <h1>2 værelses lejlighed</h1>
                <h4>Odense M</h4>
                <div className="starFlexBox">
                    <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                    <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                    <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                    <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                    <FontAwesomeIcon icon={faStar} className="blackStarBig"/>
                </div>
            </div>
        </div>
    )
}