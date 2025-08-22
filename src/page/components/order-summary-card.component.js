import { Card } from "../../components/card.component";
import { Divider } from "../../components/divider.component";
import { Input } from "../../components/input.component";
import { Button } from "../../components/button.component";
import { Typography } from "../../components/typography.component";
import { Row } from "../../components/row.component";
import { Col } from "../../components/col.component";
import { notification } from "../../components/notification.component";
import { useEffect, useState } from "react";
import { FormatVietnameseCurrency } from "../../utilities/services/formatVietnameseCurrency";
import {
  COLORS,
  VIETNAMESE_CURRENCY,
  PROMOCODE,
  DURATION_NOTIFICATION,
  SHIPPING_FEE,
  SHIPPING_FEE_FREE,
} from "../../utilities/constant";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Space } from "../../components/space.component";

const ApplyButton = styled(Button)`
  background: ${COLORS.ORANGE_YELLOW};
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  height: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.ORANGE_YELLOW} !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

const CardStyled = styled(Card)`
  margin-top: -5rem;
  width: 45%;
  border-radius: 0.5rem;
  background: ${COLORS.LIGHT_GRAY};
  height: auto;
`;

const { Title, Text } = Typography;

export const OrderSummaryCard = ({ cartItems, totalPrice, isCheckout }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(SHIPPING_FEE);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const applyPromoLogic = (code, price) => {
    if (code.trim().toUpperCase() === PROMOCODE) return price * 0.5;

    return 0;
  };

  const handleApplyPromo = () => {
    const discountValue = applyPromoLogic(promoCode, totalPrice);

    setDiscount(discountValue);
    setIsPromoCodeApplied(discountValue > 0);

    if (discountValue === 0) {
      api.warning({
        message: "Invalid or non-existent promo code!",
        description:
          totalPrice === 0 && "Cannot apply promo code on an empty cart!",
        duration: DURATION_NOTIFICATION,
      });
    } else {
      api.success({
        message: "Promo code applied successfully!",
        duration: DURATION_NOTIFICATION,
      });
    }
  };

  useEffect(() => {
    const discountValue = applyPromoLogic(promoCode, totalPrice);

    if (isPromoCodeApplied) setDiscount(discountValue);

    setShipping(totalPrice > SHIPPING_FEE_FREE ? 0 : SHIPPING_FEE);

    if (totalPrice === 0) {
      setPromoCode("");
      setShipping(0);
      setFinalTotal(0);
      setDiscount(0);
      setIsPromoCodeApplied(false);

      return;
    }

    setFinalTotal(
      totalPrice -
        discount +
        (totalPrice > SHIPPING_FEE_FREE
          ? 0
          : totalPrice === 0
          ? 0
          : SHIPPING_FEE)
    );
  }, [totalPrice, discount, promoCode, isPromoCodeApplied]);

  return (
    <CardStyled
      title={
        <Title level={4} style={{ margin: 0, fontWeight: "600" }}>
          Order Summary
        </Title>
      }
    >
      {contextHolder}

      {isCheckout ? (
        <div
          style={{
            maxHeight: cartItems.length >= 10 ? "300px" : "auto",
            overflowY: cartItems.length >= 10 ? "auto" : "visible",
            paddingRight: cartItems.length >= 10 ? "0.5rem" : 0,
            marginBottom: "1rem",
          }}
        >
          {cartItems.map((item) => (
            <Row
              key={item.id}
              justify="space-between"
              style={{ marginBottom: "0.5rem" }}
            >
              <Text type="success" strong>
                {item.title} x {item.quantity}
              </Text>

              <Text type="danger" strong>
                {FormatVietnameseCurrency(item.price * item.quantity)}{" "}
                {VIETNAMESE_CURRENCY}
              </Text>
            </Row>
          ))}
        </div>
      ) : (
        <>
          <Text strong>Enter promo code</Text>

          <Row gutter={8} style={{ marginTop: "0.5rem" }}>
            <Col flex="auto">
              <Input
                style={{ height: "2.5rem" }}
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => {
                  if (e.target.value.trim() === "") setDiscount(0);

                  setPromoCode(e.target.value);
                }}
              />
            </Col>

            <Col>
              <ApplyButton type="primary" onClick={handleApplyPromo}>
                Apply
              </ApplyButton>
            </Col>
          </Row>
        </>
      )}

      <Divider />

      <Space
        direction="vertical"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Row justify="space-between">
          <Text strong>Subtotal</Text>

          <Text type="danger" strong>
            {FormatVietnameseCurrency(totalPrice)} {VIETNAMESE_CURRENCY}
          </Text>
        </Row>

        <Row justify="space-between">
          <Text>Shipping</Text>
          {totalPrice === 0 ? (
            <Text type="danger" strong>
              0 {VIETNAMESE_CURRENCY}
            </Text>
          ) : totalPrice > SHIPPING_FEE_FREE ? (
            <Text type="danger" strong delete>
              {FormatVietnameseCurrency(SHIPPING_FEE)} {VIETNAMESE_CURRENCY}
            </Text>
          ) : (
            <Text type="danger" strong>
              {FormatVietnameseCurrency(shipping)} {VIETNAMESE_CURRENCY}
            </Text>
          )}
        </Row>

        <Row justify="space-between">
          <Text>Discount</Text>

          <Text type="danger" strong>
            - {FormatVietnameseCurrency(discount)} {VIETNAMESE_CURRENCY}
          </Text>
        </Row>
      </Space>

      <Divider />

      <Row justify="space-between">
        <Text strong style={{ fontSize: "1.1rem" }}>
          Total
        </Text>

        <Text type="danger" strong style={{ fontSize: "1.1rem" }}>
          {FormatVietnameseCurrency(finalTotal)} {VIETNAMESE_CURRENCY}
        </Text>
      </Row>
    </CardStyled>
  );
};

OrderSummaryCard.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  isCheckout: PropTypes.bool.isRequired,
};
