import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './card.css';
import Buttons from '../buttons/buttons';

const Card = ({ imageSrc, itemName, rating, price, onClick }) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarHover = (hoveredStar) => {
        setHoveredRating(hoveredStar);
    };

    return (
        <div onClick={onClick} className="card">
            <img src={imageSrc} alt={itemName} className="card-image" />
            <div className="card-content">
                <h4 className="card-item-name">{itemName}</h4>
                <div className="card-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${star <= (hoveredRating || rating)
                                ? 'filled-star'
                                : 'empty-star'
                                }`}
                            onMouseEnter={() => handleStarHover(star)}
                            onMouseLeave={() => handleStarHover(rating)}
                        >
                            &#9733;
                        </span>
                    ))}
                    <span className="rating-value">{rating}</span>
                </div>
                <p className="card-price">{price}</p>
                <Buttons
                    variant={"cart-btn"}
                    id={"add-to-cart-btn"}
                    label={"Add To Cart"}
                    width={166}
                    height={42}
                />
                <div className="favorite-button">
                    <FaHeart className="add-icon" />
                </div>
            </div>
        </div>
    );
};

export default Card;
