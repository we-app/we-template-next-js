import { Header, Footer } from '@molecules';
import styled from 'styled-components';
import logoImg from '@assets/logo.png';
import { GlobalStyle } from '@theming/global';
import { Container } from 'react-grid-system';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled(Container)`
  flex: 1;
  width: 100%;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <StyledContainer>
    <GlobalStyle />
    <Header title="We App Web Template" image={logoImg} />
    <Content>{children}</Content>
    <Footer title="We App Web Template" />
  </StyledContainer>
);
