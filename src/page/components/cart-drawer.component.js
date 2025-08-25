import { reduce } from 'lodash';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Modal } from '../../components/modal.component';
import { COLORS } from '../../utilities/constant';
import { OrderSummaryCard } from './order-summary-card.component';
import { PaymentProcedureCard } from './payment-procedure-card.component';

const CartModal = styled(Modal)`
  margin-top: -3rem;
`;

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
  onDeleteAllCartItems,
}) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [hasShowShippingForm, setHasShowShippingForm] = useState(false);

  const priceTotal = useMemo(
    () => reduce(cartItems, (initValue, item) => initValue + item.price * item.quantity, 0),
    [cartItems],
  );

  useEffect(() => {
    if (!hasOpenCartDrawer) {
      setHasShowShippingForm(false);
      setIsCheckout(false);
    }
  }, [hasOpenCartDrawer]);

  return (
    <CartModal
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
          isCheckout={isCheckout}
          hasShowShippingForm={hasShowShippingForm}
          onHideShippingForm={() => setHasShowShippingForm(false)}
          onShowShippingForm={() => setHasShowShippingForm(true)}
          onContinueCheckout={() => setIsCheckout(true)}
          onBackToCart={() => setIsCheckout(false)}
          onToggleWishList={onToggleWishList}
          onOpenProductDetailModal={onOpenProductDetailModal}
          onRemoveCartItem={onRemoveCartItem}
          onUpdateQuantity={onUpdateQuantity}
          onDeleteAllCartItems={onDeleteAllCartItems}
        />

        <OrderSummaryCard cartItems={cartItems} totalPrice={priceTotal} isCheckout={isCheckout} />
      </CartWrapper>
    </CartModal>
  );
};

CartDrawer.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  hasOpenCartDrawer: PropTypes.bool,
  isWishedProduct: PropTypes.func.isRequired,
  onCloseCartDrawer: PropTypes.func.isRequired,
  onToggleWishList: PropTypes.func.isRequired,
  onOpenProductDetailModal: PropTypes.func.isRequired,
  onRemoveCartItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onDeleteAllCartItems: PropTypes.func.isRequired,
};
