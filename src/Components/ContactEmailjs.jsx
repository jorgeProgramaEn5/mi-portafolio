import "../Style/Contact.css"
import { Container, Col, Row } from 'react-bootstrap';
import { contact_img } from '../Assets';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
  
    return (
      <section className='contact' id='contact'>
          <Container>
              <Row className='aling-items-center'>
                  <Col md={6} className='imgContact'>
                      <img src={contact_img} alt="contact" />
                  </Col>
                  <Col md={6} className='contact-form'>
                      <h2>Get In Touch</h2>
                      <form>
                          <Row>
                              <Col sm={6} xs={6} className='px-1'>
                                  <input type="text"  placeholder='First Name'/>
                              </Col>
  
                              <Col sm={6} xs={6} className='px-1'>
                                  <input type="text"  placeholder='Last Name'/>
                              </Col>
  
                              <Col sm={6} xs={6} className='px-1'>
                                  <input type="email" placeholder='Email Address'/>
                              </Col>
  
                              <Col sm={6} xs={6} className='px-1'>
                                  <input type="tel" placeholder='Phone Number'/>
                              </Col>
  
                              <Col className='col-text-area'>
                                  <textarea style={{ resize: "none" }} row="6" placeholder='Message'></textarea>
                                  <button type='submit'><span>send</span></button>
                              </Col>
                          </Row>
                      </form>
                  </Col>
              </Row>
          </Container>
      </section>
    )
  }
  
  export default Contact