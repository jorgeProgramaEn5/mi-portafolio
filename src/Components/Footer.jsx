import React from 'react'
import "../Style/Footer.css"
import { Col, Container, Row, } from 'react-bootstrap'
import { whastapp, linkedin, twitter } from '../Assets';



function Footer() {
  return (
    <footer className='footer'>
        <Container fluid>
            <Row> 
                <Col className='footer-item'>
                    <div className='social-icon'>
                        <a href='https:wa.me/qr/NHJVYGQLSFNNO1/'><img src={whastapp} alt="social_img" /></a>
                        <a href='#!'><img src={linkedin} alt="social_img" /></a>
                        <a href='#!'><img src={twitter} alt="social_img" /></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer