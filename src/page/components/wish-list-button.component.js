import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS } from '../../utilities/constant';

const WishButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid ${({ isWished }) => (isWished ? COLORS.WHITE : COLORS.LIGHT_GRAY)};
  background-color: ${({ isWished }) => (isWished ? COLORS.SOFT_YELLOW : COLORS.WHITE)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isWished }) => (isWished ? COLORS.WARM_YELLOW : COLORS.VERY_LIGHT_GRAY)};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }

  .heart-icon {
    color: ${({ isWished }) => (isWished ? COLORS.RED : COLORS.BLACK)};
  }
`;

export const WishListButton = ({ productDetail, onToggleWishList, isWishedProduct }) => {
  return (
    <WishButton isWished={isWishedProduct(productDetail)} onClick={() => onToggleWishList(productDetail)}>
      <FontAwesomeIcon className="heart-icon" isWished={isWishedProduct(productDetail)} icon={faHeart} />
    </WishButton>
  );
};

WishListButton.propTypes = {
  productDetail: PropTypes.object.isRequired,
  onToggleWishList: PropTypes.func.isRequired,
  isWishedProduct: PropTypes.func.isRequired,
};
