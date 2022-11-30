import React from "react";
import styles from "./Apartmentpage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/realtor.css";

export default function ApartmentPage() {
  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.pictureCara}>
          <img
            src="resources/rectStudioApartment.png"
            alt="Header Image"
            className={styles.picture}
          />
          <div className={styles.pictureOverlay}>
            <div className={styles.pictureInnerOverlay}>
              <h1> &lt; </h1>
            </div>
            <div style={{ width: "50%" }} />
            <div className={styles.pictureInnerOverlay}>
              <h1> &gt; </h1>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.centerContent}>
            <h1>2-Room Apartment in Odense</h1>
            <p>
              <h2>Address:</h2> Some Road Name 51, 1. TV, 5000 Odense C
            </p>

            <p>
              A Nice newly renovated appartment from 2018 located in the central
              Odense. The appartment is a part of a complex consisting of 16
              appartments in total. The main room has big windows which allow
              for lots of natural light to enter the appartment, making it ideal
              for everyday living.
            </p>
          </div>
          <div className={styles.sidebarContent}>
            <h1>Monthly Price: 8000</h1>
            <h2>Acconto: 1200</h2>
            <h2>Prepaid: 30000</h2>
            <h5>*All numbers are in DKK and non-negotiable</h5>
          </div>
        </div>
        <div className={styles.mainContent2}>
          <div className={styles.centerContent2}>
            <h1>Apartment Details</h1>
            <div className={styles.centerContent2Inner}>
              <div style={{ width: "50%" }}>
                <p>
                  <b>Apartment type:</b> Student
                </p>
                <p>
                  <b>Rooms:</b> 2
                </p>
                <p>
                  <b>Animals allowed:</b> Yes
                </p>
                <p>
                  <b>Washing facilities</b> Yes
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <p>
                  <b>Street:</b> Some Road Name
                </p>
                <p>
                  <b>Number:</b> 51
                </p>
                <p>
                  <b>Floor:</b> 1st Floor
                </p>
                <p>
                  <b>Garden:</b> No
                </p>
              </div>
            </div>
            <h1>Floorplan:</h1>
            <img
            src="resources/floorplan.png"
            alt="Header Image"
            className={styles.picture}
          />
          </div>
          <div className={styles.sidebarContent2}>
            <h1>Landlord information:</h1>
            <div className="starFlexBox">
              <FontAwesomeIcon icon={faStar} className="yellowStarBig" />
              <FontAwesomeIcon icon={faStar} className="yellowStarBig" />
              <FontAwesomeIcon icon={faStar} className="yellowStarBig" />
              <FontAwesomeIcon icon={faStar} className="yellowStarBig" />
              <FontAwesomeIcon icon={faStar} className="blackStarBig" />
            </div>
            <h2 id="realtorContact" >
              <a href="/realtor">Jens Jensen</a>
            </h2>
            <p>
              <h3>Estates for sale:</h3> 24
            </p>
            <p>
              <h3>Estates for rent:</h3> 40
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
