import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "../../components/modal.component";
import { Rating } from "../components/rating.component";
import styled from "styled-components";
import { COLORS, VIETNAMESE_CURRENCY } from "../../utilities/constant";
import { Space } from "../../components/space.component";
import { FormatVietnameseCurrency } from "../../utilities/services/formatVietnameseCurrency";
import { WishListButton } from "./wish-list-button.component";
import PropTypes from "prop-types";

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ModalBody = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 1rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: ${COLORS.SLATE_GRAY};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const AddCartButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  background-color: ${COLORS.CHARCOAL_BLUE};
  color: white;
  padding: 0.5rem 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.DARK_GRAY};
    transform: translateY(-1px);
    box-shadow: 0 6px 15px ${COLORS.BLACK_10};
  }
`;

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

export const ProductDetailModal = ({
  productDetail,
  isWishedProduct,
  onCloseProductDetailModal,
  onAddProductToCart,
  onToggleWishList,
}) => {
  return (
    <Modal
      open={productDetail}
      onCancel={onCloseProductDetailModal}
      footer={null}
      centered
      width={800}
      zIndex={2000}
    >
      {productDetail && (
        <>
          <ModalHeader>
            <Title>{productDetail.title}</Title>
          </ModalHeader>

          <ModalBody>
            <ImageWrapper>
              <ProductImage
                src={productDetail.image}
                alt={productDetail.title}
              />
            </ImageWrapper>

            <Space direction="vertical" size="large">
              <Price>
                {FormatVietnameseCurrency(productDetail.price)}{" "}
                {VIETNAMESE_CURRENCY}
              </Price>

              <Rating value={productDetail.rating} />

              <Description>{productDetail.description}</Description>

              <Actions>
                <AddCartButton
                  onClick={() => onAddProductToCart(productDetail)}
                >
                  <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
                  Add to cart
                </AddCartButton>

                <WishListButton
                  isWishedProduct={isWishedProduct}
                  productDetail={productDetail}
                  onToggleWishList={onToggleWishList}
                />
              </Actions>
            </Space>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

ProductDetailModal.propTypes = {
  productDetail: PropTypes.object.isRequired,
  isWishedProduct: PropTypes.func.isRequired,
  onCloseProductDetailModal: PropTypes.func.isRequired,
  onAddProductToCart: PropTypes.func.isRequired,
  onToggleWishList: PropTypes.func.isRequired,
};
