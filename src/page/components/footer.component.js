import styled from 'styled-components';

import { COLORS } from '../../utilities/constant';

const FooterWrapper = styled.footer`
  margin-top: 3rem;
  border-top: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 2.5rem 0;
  text-align: center;
  font-size: 0.875rem;
  color: ${COLORS.SLATE_GRAY};
`;

const FooterContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>© {new Date().getFullYear()} Minimal Store. Built by Thanh Tran</FooterContent>
    </FooterWrapper>
  );
};
