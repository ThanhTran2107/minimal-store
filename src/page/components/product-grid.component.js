import { ProductCard } from "./product-card.component";
import styled from "styled-components";

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
  color: #6b7280;
`;

export const ProductGrid = ({ items, onOpen }) => {
  if (!items.length) return <EmptyMessage>No products found.</EmptyMessage>;

  return (
    <GridWrapper>
      {items.map((p) => (
        <ProductCard key={p.id} p={p} onOpen={onOpen} />
      ))}
    </GridWrapper>
  );
};
