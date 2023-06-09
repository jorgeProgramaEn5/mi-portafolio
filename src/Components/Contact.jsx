import React, { useState } from 'react'
import "../Style/Contact.css"
import { Container, Col, Row } from 'react-bootstrap';
import { contact_img } from '../Assets';


function Contact() {
  const formInitialDetails = {
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:"",
  }
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails ({
        ...formDetails,
        [category]: value
    })
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

    setButtonText('Sending...');
    let reponse = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-type": "Application/json:charset=utf-8"
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = reponse.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
        setStatus({success: true, message: "Message sent successfully"})
    } else {
        setStatus({success: false, message: "Something went wrong, please try again later"})
    }

    } catch {
        console.log("form is not valid")
    }

  }


  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='aling-items-center'>
                <Col md={6}>
                    <img src={contact_img} alt="contact" />
                </Col>
                <Col md={6} className='contact-form'>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} xs={6} className='px-1'>
                                <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value )}/>
                            </Col>

                            <Col sm={6} xs={6} className='px-1'>
                                <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value )}/>
                            </Col>

                            <Col sm={6} xs={6} className='px-1'>
                                <input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value )}/>
                            </Col>

                            <Col sm={6} xs={6} className='px-1'>
                                <input type="tel" value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value )}/>
                            </Col>

                            <Col className='col-text-area'>
                                <textarea row="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value )}></textarea>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.message === false? "danger" : "success" }>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact