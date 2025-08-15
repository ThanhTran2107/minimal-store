import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "./header.component";
import { useMemo } from "react";
import styled from "styled-components";

const CloseButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

const CartItem = styled.div`
  display: flex;
  gap: 0.75rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f9fafb;
    transform: translateY(-1px);
  }
`;

const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.2);
`;

const DrawerContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 24rem;
  background-color: #ffffff;
  border-left: 1px solid #e5e7eb;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 51;
  overflow-y: auto;
`;

const ItemsWrapper = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
`;

const EmptyText = styled.div`
  color: #6b7280;
`;

const QtyControl = styled.div`
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.25rem 0.5rem;
`;

const ItemImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  object-fit: cover;
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
  color: #6b7280;
`;

const SubtotalWrapper = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 0.75rem;
`;

const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

const CheckoutButton = styled.button`
  margin-top: 0.75rem;
  width: 100%;
  border-radius: 1rem;
  background-color: #111827;
  color: white;
  padding: 0.5rem;
`;

const RemoveButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

export const CartDrawer = ({ open, onClose, items, setItems }) => {
  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );
  const updateQty = (id, delta) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );
  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  if (!open) return null;

  return (
    <>
      <DrawerOverlay onClick={onClose} />

      <DrawerContent>
        <Header>
          Your Cart
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
          </CloseButton>
        </Header>

        <ItemsWrapper>
          {items.length === 0 && <EmptyText>Cart is empty.</EmptyText>}
          {items.map((it) => (
            <CartItem key={it.id}>
              <ItemImage src={it.image} alt={it.title} />
              <ItemInfo>
                <ItemTitle>{it.title}</ItemTitle>
                <ItemPrice>${it.price}</ItemPrice>
                <QtyControl>
                  <button onClick={() => updateQty(it.id, -1)}>
                    <FontAwesomeIcon icon={faMinus} className="h-4 w-4" />
                  </button>
                  <span>{it.qty}</span>
                  <button onClick={() => updateQty(it.id, +1)}>
                    <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                  </button>
                </QtyControl>
              </ItemInfo>
              <RemoveButton onClick={() => remove(it.id)}>
                <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
              </RemoveButton>
            </CartItem>
          ))}
        </ItemsWrapper>

        <SubtotalWrapper>
          <SubtotalRow>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SubtotalRow>
          
          <CheckoutButton>Checkout</CheckoutButton>
        </SubtotalWrapper>
      </DrawerContent>
    </>
  );
};
