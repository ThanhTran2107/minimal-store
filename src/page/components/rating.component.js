import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarRegular,
  faStarHalfAlt,
} from "@fortawesome/free-regular-svg-icons";

import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const RatingValue = styled.span`
  font-size: 0.625rem;
  color: #6b7280;
`;

export const Rating = ({ value }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <RatingWrapper aria-label={`Rating ${value}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={
            i < full
              ? faStarSolid
              : half && i === full
              ? faStarHalfAlt
              : faStarRegular
          }
          style={{ color: "#fbbf24" }}
        />
      ))}
      <RatingValue>{value}</RatingValue>
    </RatingWrapper>
  );
};
