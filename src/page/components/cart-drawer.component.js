import { useMemo } from "react";
import styled from "styled-components";
import { reduce } from "lodash";
import { COLORS } from "../../utilities/constant";
import { Modal } from "../../components/modal.component";
import PropTypes from "prop-types";
import { OrderSummaryCard } from "./order-summary-card.component";
import { PaymentProcedureCard } from "./payment-procedure-card.component";

const CartTitle = styled.p`
  background: ${COLORS.LIGHT_GRAY};
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  width: 51.5%;
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CartDrawer = ({
  cartItems,
  hasOpenCartDrawer,
  isWishedProduct,
  onCloseCartDrawer,
  onToggleWishList,
  onOpenProductDetailModal,
  onRemoveCartItem,
  onUpdateQuantity,
}) => {
  const priceTotal = useMemo(
    () =>
      reduce(
        cartItems,
        (initValue, item) => initValue + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <Modal
      title={<CartTitle>Your Cart</CartTitle>}
      open={hasOpenCartDrawer}
      onCancel={onCloseCartDrawer}
      closeIcon={false}
      footer={null}
      width={1500}
    >
      <CartWrapper>
        <PaymentProcedureCard
          cartItems={cartItems}
          isWishedProduct={isWishedProduct}
          onToggleWishList={onToggleWishList}
          onOpenProductDetailModal={onOpenProductDetailModal}
          onRemoveCartItem={onRemoveCartItem}
          onUpdateQuantity={onUpdateQuantity}
        />

        <OrderSummaryCard totalPrice={priceTotal} />
      </CartWrapper>
    </Modal>
  );
};

CartDrawer.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  hasOpenCartDrawer: PropTypes.bool,
  isWishedProduct: PropTypes.func.isRequired,
  onCloseCartDrawer: PropTypes.func.isRequired,
  onToggleWishList: PropTypes.func.isRequired,
  onOpenProductDetailModal: PropTypes.func.isRequired,
  onRemoveCartItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};
