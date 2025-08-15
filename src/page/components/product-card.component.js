import { Rating } from "./rating.component";
import styled from "styled-components";

const CardButton = styled.button`
  text-align: left;
  display: block;
  background: none;
  border: none;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  ${CardButton}:hover & {
    transform: scale(1.1);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  }
`;

const CardWrapper = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const TitlePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
`;

const BrandRating = styled.div`
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const Info = styled.div`
  padding: 0.75rem;
`;

const ImageWrapper = styled.div`
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProductCard = ({ p, onOpen }) => {
  return (
    <CardButton onClick={() => onOpen(p)}>
      <CardWrapper>
        <ImageWrapper>
          <ProductImage src={p.image} alt={p.title} />
        </ImageWrapper>

        <Info>
          <TitlePrice>
            <Title>{p.title}</Title>
            <Price>${p.price}</Price>
          </TitlePrice>

          <BrandRating>
            <Brand>{p.brand}</Brand>
            <Rating value={p.rating} />
          </BrandRating>
        </Info>
      </CardWrapper>
    </CardButton>
  );
};
