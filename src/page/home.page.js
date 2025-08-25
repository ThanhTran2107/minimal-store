import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import {
  FILTER_PRODUCT_PRICES,
  LOCAL_STORAGE_KEYS,
  DURATION_NOTIFICATION,
} from "../utilities/constant";
import { Header } from "../page/components/header.component.js";
import { FilterBar } from "../page/components/filter-bar.component";
import { ProductGrid } from "../page/components/product-grid.component";
import { Footer } from "../page/components/footer.component";
import { ProductDetailModal } from "../page/components/product-detail-modal.component";
import { CartDrawer } from "../page/components/cart-drawer.component";
import { WishListModal } from "./components/wish-list-modal.component.js";
import { COLORS } from "../utilities/constant.js";
import { filter, find, map, some } from "lodash";
import { BannerCarousel } from "./components/banner-carousel.component.js";
import {
  setLocalStorage,
  getLocalStorage,
} from "../utilities/services/common.js";
import { notification } from "antd";
import { useGetProducts } from "../utilities/data-hooks/use-get-products.hook.js";
import { useGetCategories } from "../utilities/data-hooks/use-get-categories.hook.js";
import { useGetBrands } from "../utilities/data-hooks/use-get-brands.hook.js";

const Wrapper = styled.div`
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1450px;
  padding: 0 1rem;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 0;
`;

const SortButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${COLORS.DARK_GRAY_BLUE};
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    gap: 10rem;
  }
`;

const ProductSection = styled.section`
  flex: 1;
`;

const { MAX } = FILTER_PRODUCT_PRICES;
const { CART_ITEMS, WISH_LIST } = LOCAL_STORAGE_KEYS;

export const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryName, setCategoryName] = useState("All");
  const [brandName, setBrandName] = useState("All");
  const [filterPrice, setFilterPrice] = useState(MAX);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [hasOpenCart, setHasOpenCart] = useState(false);
  const [hasOpenWishList, setHasOpenWishList] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [cartItems, setCartItems] = useState(() => {
    const currentCartItems = getLocalStorage("cartItems");

    return currentCartItems || [];
  });

  const [wishList, setWishList] = useState(() => {
    const currentWishList = getLocalStorage("wishList");

    return currentWishList || [];
  });

  const { products } = useGetProducts();
  const { categories } = useGetCategories();
  const { brands } = useGetBrands();

  const filteredProducts = useMemo(() => {
    return filter(
      products,
      (pro) =>
        (categoryName === "All" || pro.category === categoryName) &&
        (brandName === "All" || pro.brand === brandName) &&
        pro.price <= filterPrice &&
        pro.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, categoryName, brandName, filterPrice, searchText]);

  const handleAddProductToCart = (product) => {
    setCartItems((prev) => {
      const found = find(prev, (cartItem) => cartItem.id === product.id);

      if (found) {
        api.warning({
          message: "This product is already in your cart!",
          duration: DURATION_NOTIFICATION,
        });

        return map(prev, (cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        api.success({
          message: "Add to the cart successfully!",
          duration: DURATION_NOTIFICATION,
        });

        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleToggleWishList = (product) => {
    setWishList((prev) =>
      find(prev, (wishItem) => wishItem.id === product.id)
        ? filter(prev, (wishItem) => wishItem.id !== product.id)
        : [...prev, product]
    );
  };

  const isWishedProduct = (product) =>
    some(wishList, (wishItem) => wishItem.id === product?.id);

  const handleRemoveWishItem = (currentId) =>
    setWishList((prev) =>
      filter(prev, (wishItem) => wishItem.id !== currentId)
    );

  const handleRemoveCartItem = (currentId) =>
    setCartItems((prev) => filter(prev, (item) => item.id !== currentId));

  const handleUpdateQuantity = (currentId, quantityIncrement) =>
    setCartItems((prev) =>
      map(prev, (item) =>
        item.id === currentId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + quantityIncrement),
            }
          : item
      )
    );

  useEffect(() => {
    setLocalStorage(CART_ITEMS, cartItems);
    setLocalStorage(WISH_LIST, wishList);
  }, [cartItems, wishList]);

  return (
    <Wrapper>
      {contextHolder}

      <Header
        searchText={searchText}
        cartCount={cartItems.length}
        wishCount={wishList.length}
        onOpenCart={() => setHasOpenCart(true)}
        onOpenWishlist={() => setHasOpenWishList(true)}
        setSearchText={setSearchText}
      />

      <BannerCarousel />

      <Main>
        <TopBar>
          <SortButton>
            Newest
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ width: "1rem", height: "1rem" }}
            />
          </SortButton>
        </TopBar>

        <Content>
          <FilterBar
            categories={categories}
            brands={brands}
            categoryName={categoryName}
            brandName={brandName}
            filterPrice={filterPrice}
            mobileOpen={mobileOpen}
            setCategoryName={setCategoryName}
            setBrandName={setBrandName}
            setFilterPrice={setFilterPrice}
            setMobileOpen={setMobileOpen}
          />

          <ProductSection>
            <ProductGrid
              filteredProducts={filteredProducts}
              onOpenProductDetailModal={setProductDetail}
            />
          </ProductSection>
        </Content>
      </Main>

      <ProductDetailModal
        productDetail={productDetail}
        isWishedProduct={isWishedProduct}
        onCloseProductDetailModal={() => setProductDetail(null)}
        onAddProductToCart={handleAddProductToCart}
        onToggleWishList={handleToggleWishList}
      />

      <CartDrawer
        cartItems={cartItems}
        hasOpenCartDrawer={hasOpenCart}
        isWishedProduct={isWishedProduct}
        onCloseCartDrawer={() => setHasOpenCart(false)}
        onToggleWishList={handleToggleWishList}
        onOpenProductDetailModal={setProductDetail}
        onRemoveCartItem={handleRemoveCartItem}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <WishListModal
        wishItems={wishList}
        hasOpenWishList={hasOpenWishList}
        onOpenProductDetailModal={setProductDetail}
        onCloseWishListModal={() => setHasOpenWishList(false)}
        onRemoveWishItem={handleRemoveWishItem}
      />

      <Footer />
    </Wrapper>
  );
};
