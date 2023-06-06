import React from 'react'
import '../Style/Skills.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Col, Row } from 'react-bootstrap';
import { met_1, met_2, met_3, met_4 } from '../Assets';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia tempora velit minus aspernatur fugiat voluptates nulla quis dolorum perspiciatis dolorem eum maxime reiciendis, commodi ullam eius dicta? Ipsa, explicabo laboriosam.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={met_1} alt="img_met" />
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={met_2} alt="img_met" />
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={met_3} alt="img_met" />
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={met_4} alt="img_met" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills