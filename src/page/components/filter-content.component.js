import styled from "styled-components";
import {
  CATEGORIES,
  BRANDS,
  COLORS,
  VIETNAMESE_CURRENCY,
} from "../../utilities/constant";
import { Space } from "../../components/space.component";
import { map } from "lodash";
import { FILTER_PRODUCT_PRICES } from "../../utilities/constant";
import { FormatVietnameseCurrency } from "../../utilities/services/formatVietnameseCurrency";
import PropTypes from "prop-types";

const FilterTitle = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  color: ${COLORS.MEDIUM_GRAY};
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
`;

const FilterButton = styled.button`
  border-radius: 9999px;
  border: 1px solid
    ${({ active }) => (active ? COLORS.MEDIUM_GRAY : COLORS.VERY_LIGHT_GRAY)};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: ${({ active }) => (active ? COLORS.CHARCOAL_BLUE : COLORS.SLATE_GRAY)};
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.SOFT_YELLOW};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

const RangeInput = styled.input`
  width: 100%;
  accent-color: ${COLORS.ORANGE_YELLOW};
`;

const RangeValue = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.SLATE_GRAY};
  margin-top: 0.25rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: -5rem;
`;

const { MIN, MAX } = FILTER_PRODUCT_PRICES;

export const FilterContent = ({
  category,
  brand,
  filterPrice,
  setCategory,
  setBrand,
  setFilterPrice,
}) => {
  return (
    <ContentWrapper>
      <Space direction="vertical" size="small">
        <Title>Explore Items</Title>

        <FilterTitle>Category</FilterTitle>

        <Space style={{ display: "flex", flexWrap: "wrap" }}>
          {map(CATEGORIES, (item) => (
            <FilterButton
              key={item}
              active={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </FilterButton>
          ))}
        </Space>
      </Space>

      <Space direction="vertical" size="small">
        <FilterTitle>Brand</FilterTitle>

        <Space style={{ display: "flex", flexWrap: "wrap" }}>
          {map(BRANDS, (item) => (
            <FilterButton
              key={item}
              active={brand === item}
              onClick={() => setBrand(item)}
            >
              {item}
            </FilterButton>
          ))}
        </Space>
      </Space>

      <Space direction="vertical" size="small">
        <FilterTitle>Price</FilterTitle>

        <RangeInput
          type="range"
          min={MIN}
          max={MAX}
          value={filterPrice}
          onChange={(e) => setFilterPrice(Number(e.target.value))}
        />

        <RangeValue>
          Up to {FormatVietnameseCurrency(filterPrice)} {VIETNAMESE_CURRENCY}
        </RangeValue>
      </Space>
    </ContentWrapper>
  );
};

FilterContent.propTypes = {
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  filterPrice: PropTypes.number.isRequired,
  setCategory: PropTypes.func.isRequired,
  setBrand: PropTypes.func.isRequired,
  setFilterPrice: PropTypes.func.isRequired,
};
