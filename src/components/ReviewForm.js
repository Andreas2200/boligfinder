//import "../styles/Form.css"
import React, {useState} from "react";
import "../styles/review.css";

export function ReviewForm({ addReview }) {

    const [review, setReview] = useState({
        id: "",
        name: "",
        text: "",
    });

    function handleText(e) {
        setReview({...review, name: "sofie", text: e.target.value})
    }
    function handleStars(e) {
        setReview({...review, stars: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(review.text.trim()) {
            addReview({...review, id: 3});
            //reset input
            setReview({...review, text: "", stars: ""});
        }
    }

    return(
        <form className="reviewForm" onSubmit={handleSubmit}>
            <label>Give stars</label>
            <input type="text" className="textField" onChange={handleStars} value={review.stars}></input>
            <label>Give review</label>
            <input type="text" placeholder="Add review..." className="textField" onChange={handleText} value={review.text}/>
            <button type="submit" className="add-btn">Add</button>
        </form>
    )
}