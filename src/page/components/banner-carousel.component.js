import styled from "styled-components";
import { Carousel } from "../../components/carousel.component";
import { CAROUSEL_SPEED, COLORS, VIETNAMESE_CURRENCY } from "../../utilities/constant";

const CarouselContent = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  line-height: 160px;
  color: ${COLORS.BLACK};
  background: ${COLORS.LIGHT_GRAY};
  font-style: italic;
  font-size: 1.2rem;
`;

const CarouselStyled = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  margin-bottom: 1rem;
`;

export const BannerCarousel = () => {
  return (
    <CarouselStyled autoplay autoplaySpeed={CAROUSEL_SPEED}>
      <div>
        <CarouselContent>
          🎉 Get 50% OFF your first order, "SALE50" – Shop now!
        </CarouselContent>
      </div>

      <div>
        <CarouselContent>
          🛒 New arrivals – Fall 2025 collection, limited stock!
        </CarouselContent>
      </div>

      <div>
        <CarouselContent>
          🚚 Free nationwide shipping on orders over 7.000.000 {VIETNAMESE_CURRENCY}
        </CarouselContent>
      </div>

      <div>
        <CarouselContent>
          ⭐ Exclusive daily dealS – Don’t miss out!
        </CarouselContent>
      </div>

      <div>
        <CarouselContent>
          🎁 Sign up today & receive a welcome gift voucher!
        </CarouselContent>
      </div>

      <div>
        <CarouselContent>
          🔥 Flash Sale – Up to 70% OFF this weekend only!
        </CarouselContent>
      </div>

      <div>
        <CarouselContent>
          🌿 Eco-friendly packaging for all orders 🌍
        </CarouselContent>
      </div>
    </CarouselStyled>
  );
};
