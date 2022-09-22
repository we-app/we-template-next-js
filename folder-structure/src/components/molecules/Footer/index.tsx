import styled from 'styled-components';

type FooterProps = {
  title?: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 130px;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Footer: React.FC<FooterProps> = ({ title }) => (
  <Container>{title && <p>{title}</p>}</Container>
);
