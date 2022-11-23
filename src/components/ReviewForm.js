//import "../styles/Form.css"
import React, {useState} from "react";
import "../styles/review.css";
import {v4 as uuid} from "uuid";
import Select from 'react-select'


export function ReviewForm({ addReview }) {

    const [review, setReview] = useState({
        id: "",
        name: "",
        text: "",
    });

    const options = [
        { value: 1, text: 1 },
        { value: 2, text: 2},
        { value: 3, text: 3 },
        { value: 4, text: 4},
        { value: 5, text: 5}
      ];
    
    const [selected, setSelected] = useState(options[0].value);

    function handleText(e) {
        setReview({...review, name: "sofie", text: e.target.value})
    }
    function handleStars(e) {
        setSelected(e.target.value);
        setReview({...review, stars: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(review.text.trim()) {
            addReview({...review, id: uuid()});
            //reset input
            setReview({...review, text: "", stars: ""});
        }
    }

    return(
        <form className="reviewForm" onSubmit={handleSubmit}>
            <label>Give stars</label>
            <select value={selected} onChange={handleStars} className="textField">
                {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            <label>Give review</label>
            <input type="text" placeholder="Add review..." className="textField" onChange={handleText} value={review.text}/>
            <button type="submit" className="add-btn">Add</button>
        </form>
    )
}