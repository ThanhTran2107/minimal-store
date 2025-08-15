import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 3rem;
  border-top: 1px solid #e5e7eb;
  padding: 2.5rem 0;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
`;

const FooterContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        © {new Date().getFullYear()} Minimal Store. Built with React & Styled
        Components.
      </FooterContent>
    </FooterWrapper>
  );
};
