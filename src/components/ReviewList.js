import React from "react";
import { Review } from "./Review";
import "../styles/review.css";

export function ReviewList({reviews}) {

    return(
        <table className="reviewTable">
            {reviews.map(review => (
                <tr>
                    <Review key={review.id} review={review}/>
                </tr>
            ))}
        </table>
    )
}