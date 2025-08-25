import { map } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Space } from '../../components/space.component';
import { COLORS, VIETNAMESE_CURRENCY } from '../../utilities/constant';
import { FILTER_PRODUCT_PRICES } from '../../utilities/constant';
import { FormatVietnameseCurrency } from '../../utilities/services/formatVietnameseCurrency';

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
  border: 1px solid ${({ active }) => (active ? COLORS.MEDIUM_GRAY : COLORS.VERY_LIGHT_GRAY)};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: ${({ active }) => (active ? COLORS.CHARCOAL_BLUE : COLORS.SLATE_GRAY)};
  background-color: ${({ active }) => (active ? COLORS.SOFT_YELLOW : COLORS.WHITE)};
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
  categories,
  brands,
  categoryName,
  brandName,
  filterPrice,
  setCategoryName,
  setBrandName,
  setFilterPrice,
}) => {
  return (
    <ContentWrapper>
      <Space direction="vertical" size="small">
        <Title>Explore Items</Title>

        <FilterTitle>Category</FilterTitle>

        <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
          {map(categories, item => (
            <FilterButton
              key={item}
              active={categoryName === item}
              onClick={() => {
                setCategoryName(item);
                console.log(categoryName);
              }}
            >
              {item}
            </FilterButton>
          ))}
        </Space>
      </Space>

      <Space direction="vertical" size="small">
        <FilterTitle>Brand</FilterTitle>

        <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
          {map(brands, item => (
            <FilterButton key={item} active={brandName === item} onClick={() => setBrandName(item)}>
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
          onChange={e => setFilterPrice(Number(e.target.value))}
        />

        <RangeValue>
          Up to {FormatVietnameseCurrency(filterPrice)} {VIETNAMESE_CURRENCY}
        </RangeValue>
      </Space>
    </ContentWrapper>
  );
};

FilterContent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  brands: PropTypes.arrayOf(PropTypes.string),
  categoryName: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  filterPrice: PropTypes.number.isRequired,
  setCategoryName: PropTypes.func.isRequired,
  setBrandName: PropTypes.func.isRequired,
  setFilterPrice: PropTypes.func.isRequired,
};
