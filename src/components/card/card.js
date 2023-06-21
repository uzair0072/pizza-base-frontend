import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './card.css';
import { Link } from 'react-router-dom';
import Buttons from '../buttons/buttons';

const Card = ({ imageSrc, itemName, rating, price, linkPath }) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarHover = (hoveredStar) => {
        setHoveredRating(hoveredStar);
    };

    return (
        <div className="card">
            <Link to={linkPath}>
                <img src={imageSrc} alt={itemName} className="card-image" />
            </Link>
            <div className="card-content">
                <Link to={linkPath} style={{ textDecoration: 'none' }}>
                    <h4 className="card-item-name">{itemName}</h4>
                </Link>
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
                    id = {"add-to-cart-btn"}
                    label = {"Add To Cart"}
                    width = {166}
                    height = {42}
                />
                <div className="favorite-button">
                    <FaHeart className="add-icon" />
                </div>
            </div>
        </div>
    );
};

export default Card;
