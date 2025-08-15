import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
  border-radius: 1.25rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: #fbbf24;
    box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.2);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Circle = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  background-color: #111827;
`;

const IconButton = styled.button`
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f3f4f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const CartCountBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.625rem;
  border-radius: 9999px;
  padding: 0 0.25rem;
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

export const Header = ({
  onOpenCart,
  onOpenWishlist,
  query,
  setQuery,
  cartCount,
}) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>
          <Circle />
          Minimal Store
        </Logo>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            maxWidth: "24rem",
            width: "100%",
          }}
        >
          <SearchWrapper>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                fontSize: "1rem",
              }}
            />

            <SearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
            />
          </SearchWrapper>

          <IconButton onClick={onOpenWishlist} aria-label="Open wishlist">
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "1.25rem" }} />
          </IconButton>
          
          <IconButton onClick={onOpenCart} aria-label="Open cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: "1.25rem" }}
            />
            {cartCount > 0 && <CartCountBadge>{cartCount}</CartCountBadge>}
          </IconButton>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
};
