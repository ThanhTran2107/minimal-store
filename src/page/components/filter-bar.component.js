import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { COLORS } from "../../utilities/constant";
import { Button } from "../../components/button.component";
import { FilterContent } from "./filter-content.component";
import PropTypes from "prop-types";

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
  background-color: ${COLORS.GRAY_55};
  backdrop-filter: blur(4px);
`;

const MobileContent = styled.div`
  position: absolute;
  inset-inline: 0;
  top: 1rem;
  margin: 1rem;
  border-radius: 2rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  background-color: white;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const DesktopWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: sticky;
    top: 72px;
    left: 0;
  }
`;

const CloseButton = styled.button`
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 0.5rem;
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const HeaderTitle = styled.div`
  font-weight: 500;
`;

export const FilterBar = ({
  category,
  brand,
  filterPrice,
  mobileOpen,
  setCategory,
  setBrand,
  setFilterPrice,
  setMobileOpen,
}) => {
  const renderFilterContentComponent = () => (
    <FilterContent
      category={category}
      brand={brand}
      filterPrice={filterPrice}
      setCategory={setCategory}
      setBrand={setBrand}
      setFilterPrice={setFilterPrice}
    />
  );

  return (
    <Aside>
      <MobileFilterWrapper>
        <Button onClick={() => setMobileOpen(true)}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1rem" }} />
          Filters
        </Button>

        {mobileOpen && (
          <MobileOverlay>
            <MobileContent>
              <MobileHeader>
                <HeaderTitle>Filters</HeaderTitle>

                <CloseButton onClick={() => setMobileOpen(false)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ fontSize: "1rem" }}
                  />
                </CloseButton>
              </MobileHeader>

              {renderFilterContentComponent()}
            </MobileContent>
          </MobileOverlay>
        )}
      </MobileFilterWrapper>

      <DesktopWrapper>{renderFilterContentComponent()}</DesktopWrapper>
    </Aside>
  );
};

FilterBar.propTypes = {
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  filterPrice: PropTypes.number.isRequired,
  mobileOpen: PropTypes.bool,
  setCategory: PropTypes.func.isRequired,
  setBrand: PropTypes.func.isRequired,
  setFilterPrice: PropTypes.func.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
};
