import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../../components/dropdown.component";
import { LoginModal } from "./login-modal.component";
import styled from "styled-components";
import { useState } from "react";
import { COLORS } from "../../utilities/constant";
import PropTypes from "prop-types";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: ${COLORS.CHARCOAL_BLUE};
  border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
  box-shadow: 0 2px 8px ${COLORS.BLACK_10};
`;

const HeaderContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${COLORS.CYBER_YELLOW};
    box-shadow: 0 0 0 2px ${COLORS.AMBER_OVERLAY_YELLOW};
  }
`;

const Logo = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${COLORS.ORANGE_YELLOW};
`;

const Circle = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  background-color: ${COLORS.ORANGE_YELLOW};
`;

const IconButton = styled.button`
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 0.5rem;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.VERY_LIGHT_GRAY};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

const CartCountBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.1rem; /* kích thước vòng tròn */
  height: 1.1rem;
  background-color: ${COLORS.RED};
  color: ${COLORS.WHITE};
  font-size: 0.65rem; /* chữ nhỏ hơn */
  font-weight: 1000;
  border-radius: 50%; /* đảm bảo tròn */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleBadge 0.2s ease;

  @keyframes scaleBadge {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  max-width: 24rem;
  width: 100%;
`;

const WishCountBadge = styled(CartCountBadge)``;

export const Header = ({
  searchText,
  cartCount,
  wishCount,
  onOpenCart,
  onOpenWishlist,
  setSearchText,
}) => {
  const [hasOpenLoginModal, setHasOpenLoginModal] = useState(false);

  //Dropdown items
  const items = [
    {
      key: "logIn",
      label: "Log In",
      onClick: () => setHasOpenLoginModal(true),
    },
    { key: "signUp", label: "Sign Up" },
  ];

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo onClick={() => window.scrollTo(0, 0)}>
          <Circle />
          BrStore
        </Logo>

        <RightSection>
          <SearchWrapper>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: COLORS.SLATE_GRAY,
                fontSize: "1rem",
              }}
            />
            <SearchInput
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products"
            />
          </SearchWrapper>

          <IconButton onClick={onOpenWishlist} aria-label="Open wishlist">
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "1.25rem" }} />
            {wishCount > 0 && <WishCountBadge>{wishCount}</WishCountBadge>}
          </IconButton>

          <IconButton onClick={onOpenCart} aria-label="Open cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: "1.25rem" }}
            />
            {cartCount > 0 && <CartCountBadge>{cartCount}</CartCountBadge>}
          </IconButton>

          <Dropdown menu={{ items }} trigger={["click"]}>
            <IconButton>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.25rem" }} />
            </IconButton>
          </Dropdown>
        </RightSection>

        <LoginModal
          hasOpenLoginModal={hasOpenLoginModal}
          onCloseLoginModal={() => setHasOpenLoginModal(false)}
        />
      </HeaderContent>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  searchText: PropTypes.string.isRequired,
  cartCount: PropTypes.number.isRequired,
  wishCount: PropTypes.number.isRequired,
  onOpenCart: PropTypes.func.isRequired,
  onOpenWishlist: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
