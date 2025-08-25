import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isEmpty, map } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../components/button.component';
import { Modal } from '../../components/modal.component';
import { COLORS, VIETNAMESE_CURRENCY } from '../../utilities/constant';
import { FormatVietnameseCurrency } from '../../utilities/services/formatVietnameseCurrency';

const ItemsWrapper = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 60vh;
  overflow-y: auto;
`;

const EmptyText = styled.div`
  color: ${COLORS.SLATE_GRAY};
`;

const ItemImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  object-fit: cover;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;

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

const RemoveButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

const WishlistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 1rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.VERY_LIGHT_GRAY};
    transform: translateY(-1px);
  }
`;

export const WishListModal = ({
  wishItems,
  hasOpenWishList,
  onOpenProductDetailModal,
  onCloseWishListModal,
  onRemoveWishItem,
}) => {
  return (
    <Modal title="Wish List" open={hasOpenWishList} onCancel={onCloseWishListModal} footer={null}>
      <ItemsWrapper>
        {isEmpty(wishItems) && <EmptyText>No items yet.</EmptyText>}

        {map(wishItems, item => (
          <WishlistItem key={item.id}>
            <ItemImage src={item.image} alt={item.title} onClick={() => onOpenProductDetailModal(item)} />

            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              
              <ItemPrice>
                {FormatVietnameseCurrency(item.price)} {VIETNAMESE_CURRENCY}
              </ItemPrice>
            </ItemInfo>

            <RemoveButton
              type="default"
              danger
              onClick={() => onRemoveWishItem(item.id)}
              icon={<FontAwesomeIcon icon={faTrash} className="h-4 w-4" />}
            />
          </WishlistItem>
        ))}
      </ItemsWrapper>
    </Modal>
  );
};

WishListModal.propTypes = {
  wishItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  hasOpenWishList: PropTypes.bool,
  onOpenProductDetailModal: PropTypes.func.isRequired,
  onCloseWishListPanel: PropTypes.func.isRequired,
  onRemoveWishItem: PropTypes.func.isRequired,
};
