import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 300px;
  height: 350px;
  overflow: scroll;
  padding: 10px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

export const SpanDate = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledStar = styled(AiFillStar)`
  fill: rgba(245, 206, 39, 0.8);
`;
