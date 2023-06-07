import React from 'react';
import '../Style/Projects.css';
import { projects } from '../Constant';
import { Container, Row, Col } from 'react-bootstrap';


function Projects() {
  return (
    <section className='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magni eum soluta 
                        architecto suscipit ipsam nostrum dolore alias libero nemo possimus nobis vitae sapiente 
                        perferendis, non, magnam placeat unde quo.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects