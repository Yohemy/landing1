import { Container, Row, Col } from 'react-bootstrap';
import { imageData } from '~/content_option';

import './style.css';

export const Portfolio = () => {
  return (
    <Container className='About-header' id="portfolio">
      <Row className='mb-5 mt-3 pt-md-3'>
        <Col lg='8'>
          <h2 className='display-4 mb-4'> Фото </h2>{' '}
          <hr className='t_border my-4 ml-0 text-left' />
        </Col>
      </Row>
      <div className='po_items_ho'>
        {imageData.map((data, i) => {
          return (
            <div key={i} className='po_item'>
              <img src={data.src} alt='' />
            </div>
          );
        })}
      </div>
    </Container>
  );
};
