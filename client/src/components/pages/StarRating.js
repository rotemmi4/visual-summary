import React, {useState} from "react";
import {FaStar} from "react-icons/all";
import './RankPage.css';


const StarRating = (props) =>{
    const [rating,setRating]= useState(null)
    const [hover,setHover]= useState(null)

    return(
        <div className="no-radio">
            {[...Array(10)].map((star,i) => {
                const ratingVal = i+1;
                return(
                    <label className="rated">
                        <div className="rate">
                        <input
                            type="no-radio"
                            name="rating"
                            value={ratingVal}
                            onClick={() => {setRating(ratingVal); props.parentCallback(ratingVal,props.type)}}
                        />
                     </div>
                        <FaStar
                            className="star"
                            color={ratingVal <= (hover || rating ) ? "#ffc107" : "#e4e5e9"}
                            size={20}
                            onMouseEnter={()=> setHover(ratingVal)}
                            onMouseLeave={()=> setHover(null)}
                            // onChange={(e)=>props.callback(ratingVal,props.type)}
                        />
                    </label>
                );
            })}
            <p>
                 {rating}
            </p>
        </div>
    );
};

export default StarRating;