import React from "react";
import "../styles/review.css";

export function Review({review}) {

    return (
        <>
            <div className="review">
                <div className="reviewInner">
                    <img src="resources/sofprofilepic.JPG"></img>
                    <div>
                        <p>{review.name}</p>
                        <p>{review.stars}</p>
                    </div>
                </div>
                <p className="reviewBread">{review.text}</p>
            </div>
        </>
        
    )
}