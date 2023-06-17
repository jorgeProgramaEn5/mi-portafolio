import React from 'react'
import '../Style/Skills.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Col, Row } from 'react-bootstrap';
import { meter1, meter2, meter3, meter4 } from '../Assets';

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
                        <p>
                          I'm a front-end developer with experience in various tools and technologies. 
                          My specialization lies in Next.js, React, and Figma technologies, although 
                          I also have experience in other essential tools such as HTML, CSS, JavaScript, 
                          Git, Bootstrap, and Tailwind.

                          <span>
                            I handle these tools with ease and use them to create attractive, responsive, 
                            and functional websites and applications. As a developer, my goal is always to 
                            provide high-quality solutions that exceed the expectations of my clients and 
                            end-users.
                          </span>
                        </p>
                       
                        <Carousel responsive={responsive} infinite={true} arrows={true} autoPlay={true} autoPlaySpeed={3000} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt="img_meter" loading="lazy"/>
                                <h5>Nextjs/React</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="img_meter" loading="lazy"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="img_meter" loading="lazy"/>
                                <h5>HTML/CSS/Tailwind</h5>
                            </div>
                            <div className='item'>
                                <img src={meter4} alt="img_meter" loading="lazy"/>
                                <h5>Enthusiasm for learning</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* <img src={color_sharp} alt="sharp" className='background-img-left'/> */}
    </section>
  )
}

export default Skills