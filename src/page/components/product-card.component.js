import PropTypes from "prop-types";
import { COLORS, VIETNAMESE_CURRENCY } from "../../utilities/constant";
import { FormatVietnameseCurrency } from "../../utilities/services/formatVietnameseCurrency";
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
    box-shadow: 0 12px 25px ${COLORS.BLACK_10};
  }
`;

const CardWrapper = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${COLORS.BLACK_10};
  }
`;

const TitlePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
`;

const BrandRating = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 0.75rem;
  color: ${COLORS.SLATE_GRAY};
`;

const Info = styled.div`
  padding: 0.75rem;
`;

const ImageWrapper = styled.div`
  border-radius: 1rem;
  border: 1px solid ${COLORS.VERY_LIGHT_GRAY};
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const ProductCard = ({ product, onOpenProductDetailModal }) => {
  return (
    <CardButton onClick={() => onOpenProductDetailModal(product)}>
      <CardWrapper>
        <ImageWrapper>
          <ProductImage src={product.image} alt={product.title} />
        </ImageWrapper>

        <Info>
          <TitlePrice>
            <Title>{product.title}</Title>
          </TitlePrice>

          <BrandRating>
            <Brand>{product.brand}</Brand>
            <Rating value={product.rating} />
          </BrandRating>

          <Price>
            {FormatVietnameseCurrency(product.price)} {VIETNAMESE_CURRENCY}
          </Price>
        </Info>
      </CardWrapper>
    </CardButton>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onOpenProductDetailModal: PropTypes.func.isRequired,
};
