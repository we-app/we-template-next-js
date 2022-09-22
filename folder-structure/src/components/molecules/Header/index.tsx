import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Image, { StaticImageData } from 'next/image';

type HeaderProps = {
  image?: StaticImageData;
  title: string;
};

const Wrapper = styled.div`
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 0;
`;

export const Header: React.FC<HeaderProps> = ({ image, title }) => (
  <Wrapper>
    <Container fluid>
      <Row justify="between" align="center">
        {image && (
          <Col>
            <Image src={image} alt="header" height="70px" objectFit="contain" />
          </Col>
        )}
        {!!title && (
          <Col xs="content">
            <p>{title}</p>
          </Col>
        )}
      </Row>
    </Container>
  </Wrapper>
);
