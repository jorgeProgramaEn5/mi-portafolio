import React from 'react'
import "../Style/Footer.css"
import { Col, Container, Row, } from 'react-bootstrap'
import { linkedin, facebook, instagram, twitter } from '../Assets';



function Footer() {
  return (
    <footer className='footer'>
        <Container fluid>
            <Row> 
                <Col className='footer-item'>
                    <div className='social-icon'>
                        <a href='#!'><img src={linkedin} alt="social_img" /></a>
                        <a href='#!'><img src={facebook} alt="social_img" /></a>
                        <a href='#!'><img src={instagram} alt="social_img" /></a>
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