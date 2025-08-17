import { Card } from "../../components/card.component";
import { Divider } from "../../components/divider.component";
import { Input } from "../../components/input.component";
import { Button } from "../../components/button.component";
import { Typography } from "../../components/typography.component";
import { Row } from "../../components/row.component";
import { Col } from "../../components/col.component";
import { notification } from "../../components/notification.component";
import { useState } from "react";
import { FormatVietnameseCurrency } from "../../utilities/services/formatVietnameseCurrency";
import { COLORS, VIETNAMESE_CURRENCY } from "../../utilities/constant";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  height: 22rem;
`;

const { Title, Text } = Typography;

export const OrderSummaryCard = ({ totalPrice }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SALE50") {
      setDiscount(totalPrice * 0.5);

      notification.success("Promo code applied successfully!");
    } else {
      setDiscount(0);

      notification.warning("Invalid or non-existent promo code!");
    }
  };

  return (
    <CardStyled
      title={
        <Title level={4} style={{ margin: 0, fontWeight: "600" }}>
          Order Summary
        </Title>
      }
    >
      <Text strong>Enter promo code</Text>

      <Row gutter={8} style={{ marginTop: "0.5rem" }}>
        <Col flex="auto">
          <Input
            style={{ height: "2.5rem" }}
            placeholder="Promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </Col>

        <Col>
          <ApplyButton type="primary" onClick={handleApplyPromo}>
            Apply
          </ApplyButton>
        </Col>
      </Row>

      <Divider />

      <Row justify="space-between">
        <Text>Subtotal</Text>
        <Text>
          {FormatVietnameseCurrency(totalPrice)} {VIETNAMESE_CURRENCY}
        </Text>
      </Row>

      <Row justify="space-between">
        <Text>Discount</Text>
        <Text>
          - {FormatVietnameseCurrency(discount)} {VIETNAMESE_CURRENCY}
        </Text>
      </Row>

      <Divider />

      <Row justify="space-between">
        <Text strong style={{ fontSize: "1.1rem" }}>
          Total
        </Text>

        <Text strong style={{ fontSize: "1.1rem" }}>
          {FormatVietnameseCurrency(totalPrice - discount)}{" "}
          {VIETNAMESE_CURRENCY}
        </Text>
      </Row>
    </CardStyled>
  );
};

OrderSummaryCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
