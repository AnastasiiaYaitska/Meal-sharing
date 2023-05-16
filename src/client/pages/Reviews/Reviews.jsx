import React, { useEffect, useState } from "react";
import { fetchAllReview } from "../../utils/fetchAPI/fetchReview";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allReviews = async () => {
      const response = await fetchAllReview();
      console.log(response);
      setReviews(response);
    };
    allReviews();
  }, []);

  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.Id}>
            <ReviewCard review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
