import { isEmpty, map } from "lodash";
import { COLORS } from "../../utilities/constant";
import { ProductCard } from "./product-card.component";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EmptyMessage = styled.div`
  color: ${COLORS.SLATE_GRAY};
`;

export const ProductGrid = ({ filteredProducts, onOpenProductDetailModal }) => {
  return isEmpty(filteredProducts) ? (
    <EmptyMessage>No products found.</EmptyMessage>
  ) : (
    <GridWrapper>
      {map(filteredProducts, (product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenProductDetailModal={onOpenProductDetailModal}
        />
      ))}
    </GridWrapper>
  );
};

ProductGrid.propTypes = {
  filteredProducts: PropTypes.object.isRequired,
  onOpenProductDetailModal: PropTypes.func.isRequired,
};
