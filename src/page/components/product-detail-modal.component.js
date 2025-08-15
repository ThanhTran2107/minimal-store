import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Rating } from "../components/rating.component";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 50rem;
  background-color: white;
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid #e5e7eb;
  transform: scale(0.95);
  opacity: 0;
  animation: modalIn 0.25s forwards ease-out;
  @keyframes modalIn {
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
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
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: #4b5563;
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
  background-color: #111827;
  color: white;
  padding: 0.5rem 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1f2937;
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const WishlistButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid ${({ wished }) => (wished ? "#111827" : "#e5e7eb")};
  background-color: ${({ wished }) => (wished ? "#fef3c7" : "white")};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ wished }) => (wished ? "#fde68a" : "#f3f4f6")};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

export const ProductDetailModal = ({
  product,
  onClose,
  onAddCart,
  onToggleWish,
  wished,
}) => {
  if (!product) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <Title>{product.title}</Title>

          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ImageWrapper>
            <ProductImage src={product.image} alt={product.title} />
          </ImageWrapper>

          <ProductInfo>
            <Price>${product.price}</Price>

            <Rating value={product.rating} />

            <Description>
              A minimal, modern product designed to fit seamlessly into your
              daily life. Durable, lightweight, and beautifully crafted.
            </Description>

            <Actions>
              <AddCartButton onClick={() => onAddCart(product)}>
                <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
                Add to cart
              </AddCartButton>
              
              <WishlistButton
                wished={wished}
                onClick={() => onToggleWish(product)}
              >
                <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
                {wished ? "Wishlisted" : "Wishlist"}
              </WishlistButton>
            </Actions>
          </ProductInfo>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};
