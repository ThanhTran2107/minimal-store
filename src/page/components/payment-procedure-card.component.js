import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/button.component";
import { FormatVietnameseCurrency } from "../../utilities/services/formatVietnameseCurrency";
import { WishListButton } from "./wish-list-button.component";
import { isEmpty, map } from "lodash";
import { COLORS, VIETNAMESE_CURRENCY } from "../../utilities/constant";
import PropTypes from "prop-types";

const PaymentProcedureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 53.5%;
  height: 50%;
`;

const CartItem = styled.div`
  display: flex;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 0.75rem;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.VERY_LIGHT_GRAY};
    transform: translateY(-1px);
  }
`;

const ItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 50vh;
  overflow-y: auto;
`;

const EmptyText = styled.div`
  color: ${COLORS.SLATE_GRAY};
`;

const QuantityControl = styled.div`
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 0.25rem 0.5rem;
`;

const ItemImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemTitle = styled.div`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.SLATE_GRAY};
`;

const SubtotalWrapper = styled.div`
  border-top: 1px solid ${COLORS.LIGHT_GRAY};
  padding-top: 0.75rem;
  margin-top: 1rem;
`;

const CheckoutButton = styled.button`
  margin-top: 0.75rem;
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${COLORS.ORANGE_YELLOW};
  color: white;
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

const RemoveItemButton = styled(Button)`
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

export const PaymentProcedureCard = ({
  cartItems,
  isWishedProduct,
  onToggleWishList,
  onOpenProductDetailModal,
  onRemoveCartItem,
  onUpdateQuantity,
}) => {
  return (
    <PaymentProcedureWrapper>
      <ItemsWrapper>
        {isEmpty(cartItems) && <EmptyText>Cart is empty.</EmptyText>}

        {map(cartItems, (item) => (
          <CartItem key={item.id}>
            <ItemImage
              src={item.image}
              alt={item.title}
              onClick={() => onOpenProductDetailModal(item)}
            />

            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>

              <ItemPrice>
                {FormatVietnameseCurrency(item.price)} {VIETNAMESE_CURRENCY}
              </ItemPrice>

              <QuantityControl>
                <Button onClick={() => onUpdateQuantity(item.id, -1)}>
                  <FontAwesomeIcon icon={faMinus} className="h-4 w-4" />
                </Button>

                <span>{item.quantity}</span>

                <Button onClick={() => onUpdateQuantity(item.id, +1)}>
                  <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                </Button>
              </QuantityControl>
            </ItemInfo>

            <RemoveItemButton
              type="default"
              size="large"
              danger
              onClick={() => onRemoveCartItem(item.id)}
              icon={<FontAwesomeIcon icon={faTrash} className="h-4 w-4" />}
            />

            <WishListButton
              isWishedProduct={isWishedProduct}
              productDetail={item}
              onToggleWishList={onToggleWishList}
            />
          </CartItem>
        ))}
      </ItemsWrapper>

      <SubtotalWrapper>
        <CheckoutButton>Continue Check Out</CheckoutButton>
      </SubtotalWrapper>
    </PaymentProcedureWrapper>
  );
};

PaymentProcedureCard.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  isWishedProduct: PropTypes.func.isRequired,
  onToggleWishList: PropTypes.func.isRequired,
  onOpenProductDetailModal: PropTypes.func.isRequired,
  onRemoveCartItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};
