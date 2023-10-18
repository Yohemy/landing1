import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { dataabout, videoData } from '~/content_option';

import './style.css';

export const About = () => {
  return (
    <Container className='About-header' id='about'>
      <Row className='mb-5 mt-3 pt-md-3'>
        <Col lg='8'>
          <h1 className='display-4 mb-4'>Обо мне</h1>
          <hr className='t_border my-4 ml-0 text-left' />
        </Col>
      </Row>

      <Row className='mb-4 d-flex justify-content-center'>
        <Col lg='8'>
          <div className='video-item mb-4 '>
            <ReactPlayer controls url={videoData[1].src} />
          </div>
        </Col>

        <Col lg='7' className=''>
          <div>
            <p>{dataabout.aboutme}</p>
          </div>
        </Col>
      </Row>
      <Row className='mb-5 mt-3 pt-md-3 '>
        <Col lg='8'>
          <h2 className='display-4 mb-4'>Примеры работы в кадре</h2>
          <hr className='t_border my-4 ml-0 text-left' />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col lg='8 '>
          <div className='video-item mb-4 '>
            <ReactPlayer controls url={videoData[0].src} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
