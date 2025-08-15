import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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

const RemoveButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

const PanelOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PanelContent = styled.div`
  position: fixed;
  top: 2.5rem; /* top-10 */
  left: 50%;
  transform: translateX(-50%);
  width: 92vw;
  max-width: 42rem; /* max-w-2xl */
  background-color: #ffffff;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  z-index: 51;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const WishlistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f3f4f6;
    transform: translateY(-1px);
  }
`;

const CloseButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

export const WishlistPanel = ({ open, onClose, items, onRemove }) => {
  if (!open) return null;

  return (
    <>
      <PanelOverlay onClick={onClose} />

      <PanelContent>
        <PanelHeader>
          Wishlist
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
          </CloseButton>
        </PanelHeader>

        <ItemsWrapper>
          {items.length === 0 && <EmptyText>No items yet.</EmptyText>}

          {items.map((it) => (
            <WishlistItem key={it.id}>
              <ItemImage src={it.image} alt={it.title} />

              <ItemInfo>
                <ItemTitle>{it.title}</ItemTitle>
                <ItemPrice>${it.price}</ItemPrice>
              </ItemInfo>
              
              <RemoveButton onClick={() => onRemove(it.id)}>
                <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
              </RemoveButton>
            </WishlistItem>
          ))}
        </ItemsWrapper>
      </PanelContent>
    </>
  );
};
