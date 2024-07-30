import React from 'react';
import './_star-rating.scss';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Convert rating to an array of boolean values indicating if a star should be filled or not
  const stars = Array.from(
    { length: 5 },
    (_, index) => index < Math.round(rating),
  );

  return (
    <div className="star-rating">
      <span className="visibility-hidden">Rating: {rating} out of 5 stars</span>
      {stars.map((isFilled, index) => (
        <span
          key={index}
          className={isFilled ? 'star filled' : 'star'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
