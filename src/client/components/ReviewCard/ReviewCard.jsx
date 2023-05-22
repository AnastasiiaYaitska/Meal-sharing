import React from "react";
import { normalizeDate } from "../../utils/normalizeDate";
import { FcCalendar } from "react-icons/fc";
import { CardWrap, StyledStar, SpanDate } from "./ReviewCard.styled";
// import { AiOutlineStar } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  const { Title, Description, Stars, Created_date, Meal_title } = review;
  let startsArr = [];

  for (let index = 1; index <= Stars; index++) {
    startsArr.push(<StyledStar />);
  }

  return (
    <CardWrap>
      <h3>{Meal_title}</h3>
      <SpanDate>
        <FcCalendar />
        {normalizeDate(Created_date)}
      </SpanDate>
      <span>{startsArr.map((star) => star)}</span>
      <p>{Title}</p>
      <p>{Description}</p>
    </CardWrap>
  );
};

export default ReviewCard;
