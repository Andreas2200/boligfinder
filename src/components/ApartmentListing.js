import React from "react";
import "../styles/apartmentlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export function ApartmentListing(props) {

    console.log("props", props.title)

    return(
        <Link to="/apartment" class="link"  style={{textDecoration: 'none !important'}}>
            <div className="apartmentCard" id={props.id}>
                <img src={props.imagepath} alt="apartment"></img>
                <div>
                    <h1>{props.title}</h1>
                    <h4 className="city">{props.city}</h4>
                    <div className="starFlexBox">
                        <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                        <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                        <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                        <FontAwesomeIcon icon={faStar} className="yellowStarBig"/>
                        <FontAwesomeIcon icon={faStar} className="blackStarBig"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}