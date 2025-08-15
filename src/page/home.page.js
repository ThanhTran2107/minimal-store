import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { PRODUCTS, TOKENS } from "../utilities/constants";
import { Header } from "../page/components/header.component.js";
import { FilterBar } from "../page/components/filter-bar.component";
import { ProductGrid } from "../page/components/product-grid.component";
import { Footer } from "../page/components/footer.component";
import { ProductDetailModal } from "../page/components/product-detail-modal.component";
import { CartDrawer } from "../page/components/cart-drawer.component";
import { WishlistPanel } from "../page/components/wish-list-panel.component";

export const HomePage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(200);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (brand === "All" || p.brand === brand) &&
        p.price <= price &&
        p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [category, brand, price, query]);

  const addToCart = (p) => {
    setCart((prev) => {
      const found = prev.find((it) => it.id === p.id);
      if (found)
        return prev.map((it) =>
          it.id === p.id ? { ...it, qty: it.qty + 1 } : it
        );
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const toggleWish = (p) => {
    setWishlist((prev) =>
      prev.find((it) => it.id === p.id)
        ? prev.filter((it) => it.id !== p.id)
        : [...prev, p]
    );
  };
  const wished = (p) => wishlist.some((it) => it.id === p?.id);

  return (
    <div className={`${TOKENS.bg} ${TOKENS.text} min-h-screen`}>
      <Header
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishOpen(true)}
        query={query}
        setQuery={setQuery}
      />

      <main className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-semibold">Shop</h1>
          <button className="inline-flex items-center gap-1 text-sm text-slate-600">
            Newest <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
          </button>
        </div>

        <div className="md:flex md:gap-8">
          <FilterBar
            category={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
            price={price}
            setPrice={setPrice}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />

          <section className="flex-1">
            <ProductGrid items={filtered} onOpen={setDetail} />
          </section>
        </div>
      </main>

      <Footer />

      <ProductDetailModal
        product={detail}
        onClose={() => setDetail(null)}
        onAddCart={addToCart}
        onToggleWish={toggleWish}
        wished={wished(detail)}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        setItems={setCart}
      />

      <WishlistPanel
        open={wishOpen}
        onClose={() => setWishOpen(false)}
        items={wishlist}
        onRemove={(id) =>
          setWishlist((prev) => prev.filter((it) => it.id !== id))
        }
      />
    </div>
  );
};
