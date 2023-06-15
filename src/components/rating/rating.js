import React from "react";
import { FaStar } from "react-icons/fa";
import "./rating.css";

const RatingSection = () => {
  return (
    <div className="rating-section">
      <div className="rating-column">
        <div className="overall-rating">4.2</div>
        <div className="star-rating">
          <FaStar className="star-filled" />
          <FaStar className="star-filled" />
          <FaStar className="star-filled" />
          <FaStar className="star-filled" />
          <FaStar />
        </div>
        <div className="people-rated">500 people rated</div>
      </div>
      <div className="bar-column">
        <div className="rating-bar">
          <div className="colored-bar" style={{ width: "184px" }}></div>
          <div className="total-bar"></div>
          <div className="rating-bar-label">5 stars</div>
        </div>
        <div className="rating-bar">
          <div className="colored-bar" style={{ width: "209px" }}></div>
          <div className="total-bar"></div>
          <div className="rating-bar-label">4 stars</div>
        </div>
        <div className="rating-bar">
          <div className="colored-bar" style={{ width: "124px" }}></div>
          <div className="total-bar"></div>
          <div className="rating-bar-label">3 stars</div>
        </div>
        <div className="rating-bar">
          <div className="colored-bar" style={{ width: "84px" }}></div>
          <div className="total-bar"></div>
          <div className="rating-bar-label">2 stars</div>
        </div>
        <div className="rating-bar">
          <div className="colored-bar" style={{ width: "51px" }}></div>
          <div className="total-bar"></div>
          <div className="rating-bar-label">1 star</div>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
