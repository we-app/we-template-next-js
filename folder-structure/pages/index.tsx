import { Button, Spacer } from '@atoms';
import { Col, Row } from 'react-grid-system';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
      // Will be passed to the page component as props
    }
  };
}

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>{t('welcome_message')}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button onClick={() => alert('Hello!')}>{t('welcome_button')}</Button>
        </Col>
      </Row>
      <Spacer />
    </>
  );
};

export default HomePage;
