import React from "react";
import { StyledStar } from "./StarVoting.styled";

const StarVoting = ({ setRating, rating }) => {
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleStarClick(star)}>
          <StyledStar star={star} rating={rating} />
        </span>
      ))}
    </div>
  );
};

export default StarVoting;
