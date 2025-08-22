import { Modal } from "../../components/modal.component";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Space } from "../../components/space.component";
import { Divider } from "../../components/divider.component";
import { Checkbox } from "../../components/checkbox.component";
import { COLORS } from "../../utilities/constant";
import PropTypes from "prop-types";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  outline: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${COLORS.CYBER_YELLOW};
    box-shadow: 0 0 0 3px ${COLORS.AMBER_OVERLAY_YELLOW};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(
    90deg,
    ${COLORS.BRIGHT_YELLOW},
    ${COLORS.ORANGE_YELLOW}
  );
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${COLORS.BLACK_10};
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: ${COLORS.SLATE_GRAY};
  margin: 0.5rem 0;
`;

const SocialLogin = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 0.6rem;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.LIGHT_GRAY};
    transform: translateY(-1px);
  }
`;

const FooterText = styled.div`
  text-align: center;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  color: ${COLORS.SLATE_GRAY};

  a {
    color: ${COLORS.ORANGE_YELLOW};
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: ${COLORS.CHARCOAL_BLUE};
  margin-bottom: -1rem;
`;

export const LoginModal = ({ hasOpenLoginModal, onCloseLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Modal
      open={hasOpenLoginModal}
      onCancel={onCloseLoginModal}
      footer={null}
      closeIcon={false}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <FormWrapper>
        <Space direction="vertical" size="small" align="center">
          <Title>WELCOME BACK</Title>
          <p style={{ fontStyle: "italic" }}>Login to your account</p>
        </Space>

        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Actions>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          >
            Remember me
          </Checkbox>

          <a
            href="#"
            style={{ color: COLORS.ORANGE_YELLOW, fontWeight: "500" }}
          >
            Forgot password?
          </a>
        </Actions>

        <LoginButton>Log in</LoginButton>

        <Divider style={{ margin: "-0.5rem 0" }}>
          <p style={{ color: COLORS.SLATE_GRAY, fontSize: "0.8rem" }}>
            or continue with
          </p>
        </Divider>

        <SocialLogin>
          <SocialButton>
            <FontAwesomeIcon style={{ color: COLORS.RED }} icon={faGoogle} />{" "}
            Google
          </SocialButton>
          
          <SocialButton>
            <FontAwesomeIcon style={{ color: COLORS.BLUE }} icon={faFacebook} />{" "}
            Facebook
          </SocialButton>
        </SocialLogin>

        <FooterText>
          Don’t have an account? <a href="#">Sign up</a>
        </FooterText>
      </FormWrapper>
    </Modal>
  );
};

LoginModal.propTypes = {
  hasOpenLoginModal: PropTypes.bool,
  onCloseLoginModal: PropTypes.func.isRequired,
};
