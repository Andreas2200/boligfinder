import React from "react";
import "../styles/apartmentlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export function ApartmentListing(props) {

    console.log("props", props.title)

    return(
        <div className="apartmentCard">
            <img src={props.imagepath} alt="apartment"></img>
            <div>
                <h1>{props.title}</h1>
                <h4>{props.city}</h4>
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