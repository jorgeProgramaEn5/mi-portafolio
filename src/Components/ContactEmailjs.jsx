import "../Style/Contact.css"
import { Container, Col, Row } from 'react-bootstrap';
import { contact_img } from '../Assets';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {

    const form = useRef();
    const [buttonText, setButtonText] = useState("send");
    const [buttonTextDesable, setButtonTextDesable] = useState("text-enable");
    const [buttonTextEnable, setButtonTextEnable] = useState("text-desable");


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m6g1ufi', 'template_bupwt18', form.current, 'PriAIdQ5OpabYNxw0')
        .then((result) => {
            console.log(result.text);
            setButtonText("Message sent successfully")
            setButtonTextDesable("text-desable")
            setButtonTextEnable("text-enable")
        }, (error) => {
            console.log(error.text);
            setButtonText("Ups! Something went wrong")
            setButtonTextDesable("text-desable")
            setButtonTextEnable("text-enable")
        });
    };
  
    return (
      <section className='contact' id='contact'>
          <Container>
              <Row className='aling-items-center'>
                  <Col md={6} className='imgContact'>
                      <img src={contact_img} alt="contact" />
                  </Col>
                    <Col md={6} className='contact-form'>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} xs={6} className='px-1'>
                                    <input type="text" name="from_name"  placeholder='First Name' required/>
                                </Col>
    
                                <Col sm={6} xs={6} className='px-1'>
                                    <input type="text" name="from_lastname" placeholder='Last Name'/>
                                </Col>
    
                                <Col sm={6} xs={6} className='px-1'>
                                    <input type="email" name="from_email" placeholder='Email Address' required/>
                                </Col>
    
                                <Col sm={6} xs={6} className='px-1'>
                                    <input type="tel" name="phone" placeholder='Phone Number' required/>
                                </Col>
    
                                <Col className='col-text-area'>
                                    <textarea style={{ resize: "none" }} name="message" row="6" placeholder='Message' required></textarea>
                                    <input type="submit" value={buttonText} className={buttonTextDesable} onClick={()=>setButtonText("Sending...")}/>
                                    <input type="submit" value={buttonText} className={buttonTextEnable} disabled/>
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