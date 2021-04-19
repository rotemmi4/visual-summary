import React, {useState} from "react";
import {FaStar} from "react-icons/all";
import './HomePage.css';

const StarRating = () =>{
    const [rating,setRaing]= useState(null)
    const [hover,setHover]= useState(null)

    return(
        <div>
            {[...Array(10)].map((star,i) => {
                const ratingVal = i+1;
                return(
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingVal}
                            onClick={() => setRaing(ratingVal)}

                        />
                        <FaStar
                            className="star"
                            color={ratingVal <= (hover || rating ) ? "#ffc107" : "#e4e5e9"}
                            size={20}
                            onMouseEnter={()=> setHover(ratingVal)}
                            onMouseLeave={()=> setHover(null)}

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