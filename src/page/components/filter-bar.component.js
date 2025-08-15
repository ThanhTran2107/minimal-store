import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { CATEGORIES, BRANDS } from "../../utilities/constants";

const FilterTitle = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  color: #6b7280;
`;

const FilterButton = styled.button`
  border-radius: 9999px;
  border: 1px solid ${({ active }) => (active ? "#111827" : "#e5e7eb")};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: ${({ active }) => (active ? "#111827" : "#4b5563")};
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fef3c7;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const RangeInput = styled.input`
  width: 100%;
  accent-color: #fbbf24;
`;

const RangeValue = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.25rem;
`;

const Aside = styled.aside`
  @media (min-width: 768px) {
    width: 18rem;
    flex-shrink: 0;
  }
`;

const MobileFilterWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
`;

const MobileContent = styled.div`
  position: absolute;
  inset-inline: 0;
  top: 1rem;
  margin: 1rem;
  border-radius: 2rem;
  border: 1px solid #e5e7eb;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: sticky;
    top: 72px;
  }
`;

const CloseButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
`;

export const FilterBar = ({
  category,
  setCategory,
  brand,
  setBrand,
  price,
  setPrice,
  mobileOpen,
  setMobileOpen,
}) => {
  const content = (
    <ContentWrapper>
      <div>
        <FilterTitle>Category</FilterTitle>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <FilterButton
              key={c}
              active={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </FilterButton>
          ))}
        </div>
      </div>

      <div>
        <FilterTitle>Brand</FilterTitle>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {BRANDS.map((b) => (
            <FilterButton
              key={b}
              active={brand === b}
              onClick={() => setBrand(b)}
            >
              {b}
            </FilterButton>
          ))}
        </div>
      </div>

      <div>
        <FilterTitle>Price</FilterTitle>

        <RangeInput
          type="range"
          min={0}
          max={200}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <RangeValue>Up to ${price}</RangeValue>
      </div>
    </ContentWrapper>
  );

  return (
    <Aside>
      <MobileFilterWrapper>
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
            borderRadius: "1rem",
            border: "1px solid #e5e7eb",
            padding: "0.5rem 0.75rem",
            backgroundColor: "white",
          }}
        >
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1rem" }} />
          Filters
        </button>

        {mobileOpen && (
          <MobileOverlay>
            <MobileContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ fontWeight: 500 }}>Filters</div>
                <CloseButton onClick={() => setMobileOpen(false)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ fontSize: "1rem" }}
                  />
                </CloseButton>
              </div>
              {content}
            </MobileContent>
          </MobileOverlay>
        )}
      </MobileFilterWrapper>
      
      <DesktopWrapper>{content}</DesktopWrapper>
    </Aside>
  );
};
