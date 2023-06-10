import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import "./card.css";

const Card = ({ imageSrc, itemName, rating, price }) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarHover = (hoveredStar) => {
        setHoveredRating(hoveredStar);
    };

    return (
        <>
            <div className="card">
                <img src={imageSrc} alt={itemName} className="card-image" />
                <div className="card-content">
                    <h4 className="card-item-name">{itemName}</h4>
                    <div className="card-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${star <= (hoveredRating || rating) ? "filled-star" : "empty-star"}`}
                                onMouseEnter={() => handleStarHover(star)}
                                onMouseLeave={() => handleStarHover(rating)}
                            >
                                &#9733;
                            </span>
                        ))}
                        <span className="rating-value">{rating}</span>
                    </div>
                    <p className="card-price">{price}</p>
                    <div className="favorite-button">
                        <FaPlusCircle className="add-icon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
